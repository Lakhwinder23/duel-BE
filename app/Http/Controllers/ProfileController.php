<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;


class ProfileController extends Controller
{
    //

    public function __construct()
    {


        $this->middleware('auth');
    }




    public function settings(){

    	return view('layouts.app');
    }


    public function wallet(){

    	return view('layouts.app');
    }


    public function withdraw(){

    	return view('layouts.app');
    }

    public function payment_methods(){

    	return view('layouts.app');
    }

    public function transaction_history(){

    	return view('layouts.app');
    }

    public function notifications(){

    	return view('layouts.app');
    }

    public function gamertags(){

    	return view('layouts.app');
    }

    public function save(Request $request){

    	$user = auth()->user();

    	$user_id = $user->id;



    

    	$address_line_1 = $request->address_line_1;
		$country = $request->country;
		$email = $request->email;
		$first_name = $request->first_name;
		$last_name = $request->last_name;
		$password = $request->password;
		$postcode = $request->postcode;
		$town = $request->town;
		$user_name = $request->user_name;

		$request->validate([
            'address_line_1' => 'required',
            'country' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'postcode' => 'required',
            'town' => 'required',
            'user_name' => 'required|min:6',


        ]);

		// If email is set = check it doesn't already exist for another user:



		// If username is set - check it doesn't already exist for another user:



    

    	$User = User::find($user_id);
    
    	$User->address_line_1 = $address_line_1;
    	$User->country = $country;
    	//$User->email = $email;
    	$User->first_name = $first_name;
    	$User->last_name = $last_name;
    	$User->postcode  = $postcode;
    	$User->town = $town;
    	$User->user_name = $user_name;

    
    	$User->save();

    	$arr = array(
    		'status' => 'success'
    	);

    	return response()->json($arr);
    	

    }


    public function upload(Request $request){

    	$user = auth()->user();

    	$user_id = $user->id;

    	$file = $request->file->store('public/avatar');

    	$str = str_replace('public/avatar', '/storage/avatar', $file);

    	$raw_file = str_replace('public/avatar', '', $file);

    	$User = User::find($user_id);
    	$User->profile_picture = $raw_file;
    	$User->save();


    	$arr = array(
    		'url' => $str,
    		'status' => 'success'
    	);

    	return response()->json($arr);

    }
}
