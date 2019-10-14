<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Hash;

class TestController extends Controller
{
    
	public function create(){

		$user = new User;
		$user->password = Hash::make('abc123');
		$user->email = 'andy@codeburo.co.uk';
		$user->name = 'Andy Clarke';
		$user->provider = 'app';
		$user->provider_id = 0;
		$user->save();


	}

}