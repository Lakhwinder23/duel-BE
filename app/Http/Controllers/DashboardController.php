<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class DashboardController extends Controller
{

	public function __construct()
    {


        $this->middleware('auth');
    }


    public function index(){

    	return view('layouts.app');

    }
}
