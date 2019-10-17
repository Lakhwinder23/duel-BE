<?php

use Illuminate\Http\Request;

Route::post('login', 'Api\UserController@login');
Route::post('register', 'Api\UserController@register');
Route::get('logout/{id}', 'Api\UserController@Logout');
Route::post('/password/email', 'Api\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'Api\ResetPasswordController@reset');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::post('login', 'DuelLoginController@authenticate');

//Route::post('register', 'DuelLoginController@register');



/* Dashboard */

Route::get('dashboard', 'DashboardController@index')->name('dashboard');

/* Profile */

Route::get('profile', 'ProfileController@index')->name('profile');
Route::get('profile/settings', 'ProfileController@settings');
Route::get('profile/settings/notifications', 'ProfileController@notifications');
Route::get('profile/settings/gamertags', 'ProfileController@gamertags');
Route::get('profile/{username}', 'ProfileController@view');

/* Wallet */

Route::get('profile/wallet', 'WalletController@index')->name('wallet');
Route::get('profile/wallet/deposit', 'WalletController@deposit');
Route::get('profile/wallet/withdraw', 'WalletController@withdraw');

/* Leaderboard */

Route::get('leaderboard', 'LeaderboardController@index');

/* Games */

Route::get('{game_name}/PS4', 'GameController@ps4');
Route::get('{game_name}/XBOX', 'GameController@xbox');
Route::get('{game_name}/PC', 'GameController@pc');
Route::get('{game_name}/{platform_name}/duel', 'GameController@duel')->name('duel');
Route::get('{game_name}/{platform_name}/duel/create', 'GameController@create_duel');
Route::get('{game_name}/{platform_name}/duel/tournaments', 'GameController@tournaments_duel');
Route::get('{game_name}/{platform_name}/duel/matchmaking', 'GameController@matchmaking_duel');

/* Matches */

Route::get('match/{id}/submit-evidence', 'MatchController@submit_evidence');
Route::get('match/{id}/create-dispute', 'MatchController@create_dispute');
Route::get('match/{id}/issue/{action}', 'MatchController@issue');
Route::get('match/{id}/results', 'MatchController@results');

/* Tournaments */

Route::get('tournament/{id}/results', 'TournamentController@index');

/* Admin */

Route::group(['as' => 'admin::'], function () {
    Route::get('dashboard', 'AdminController@dashboard');
    Route::get('disputes', 'AdminController@disputes');
    Route::get('disputes/{id}', 'AdminController@view_dispute');
    Route::get('players', 'AdminController@players');
    Route::get('players/{id}', 'AdminController@view_player');
    Route::get('tournaments', 'TournamentController@admin');
    Route::get('tournament/create', 'TournamentController@create');
    Route::get('tournament/edit/{id}', 'TournamentController@edit');
    Route::post('tournament/edit/{id}', 'TournamentController@update');
    Route::get('matchmaking', 'MatchController@admin');
    Route::get('matchmaking/create', 'MatchController@create');
    Route::get('matchmaking/edit/{id}', 'MatchController@edit');
    Route::post('matchmaking/edit/{id}', 'MatchController@update');
});
