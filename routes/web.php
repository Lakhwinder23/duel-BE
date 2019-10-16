<?php


Auth::routes();
//Auth::routes(['verify' => true]);
//Route::get('/test', 'TestController@create');

//Route::view('/{path?}', 'app');

Route::get('/', function(){
	if($user = Auth::user()):
	 return redirect('/dashboard');
	else:
		 return redirect('/login');
	endif;
});

Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

//Route::view('/login', 'app');

Route::get('/login/success');

Route::get('/user/current', function(){

	$user = Auth::user();
	$d = strtotime($user['created_at']);
	$user['playing_since'] = date('d/m/Y', $d);

	if($user['profile_picture'] == ''):
		$user['profile_picture'] = 'default.jpg';
	endif;

	return response()->json($user);

});

Route::get('/user/payment-methods', 'WalletController@get_methods');

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('/auth/redirect/{provider}', 'SocialController@redirect');
Route::get('/callback/{provider}', 'SocialController@callback');

Route::get('/payment', 'PaymentController@index');

Route::get('/payment/adduser', 'PaymentController@add_user');

Route::get('/payment/user/{id}', 'PaymentController@get_user');

Route::get('/payment/addcard', 'PaymentController@add_user_credit_card');


/* Profile */

Route::get('profile', 'ProfileController@settings')->name('profile');
Route::post('profile/avatar/upload', 'ProfileController@upload');
Route::get('profile/settings', 'ProfileController@settings')->name('settings');
Route::post('profile/save', 'ProfileController@save');
Route::get('profile/wallet', 'ProfileController@wallet');
Route::get('profile/wallet/withdraw', 'ProfileController@withdraw');
Route::get('profile/payment-methods', 'ProfileController@payment_methods');
Route::post('profile/payment-methods/add', 'WalletController@add_method');
Route::get('profile/transaction-history', 'ProfileController@transaction_history');
Route::get('profile/notifications', 'ProfileController@notifications');
Route::get('profile/gamertags', 'ProfileController@gamertags');
Route::get('profile/{username}', 'ProfileController@view');

/**
 * Password Reset Route(S)
 */
Route::post('/UserPasswordReset', 'Auth\ForgotPasswordController@sendResetLink');
