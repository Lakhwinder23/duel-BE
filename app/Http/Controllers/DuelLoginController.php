<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;
use Session;
use Illuminate\Support\Facades\Hash;

class DuelLoginController extends Controller
{

	public function __construct()
    {
       $user = Auth::user();
    }
    


    public function register(Request $request){

        $user = new User();
        $user->name = $request->user_name;
        $user->password = Hash::make($request->password);
        $user->email = $request->email;
        $user->provider = 'users';
        $user->provider_id = 0;
        if($user->save()):
            $data = array(
                'status' => 'success',
                'user_id' => $user->id
            );
        else:

            $data = array(
                'status' => 'fail',
                'message' => 'Please check your details and try again'
            );

        endif;

        return response()->json($data);


    }

	public function authenticate222(Request $request)
{
    $auth = false;
    $credentials = $request->only('email', 'password');
    $user = array();
    if (Auth::attempt($credentials, $request->has('remember'))) {
        $auth = true; // Success
        $user = Auth::user();
    }

    $user = Auth::user();

    if ($request->ajax()) {
        return response()->json([
            'auth' => $auth,
            'user' => $user
        ]);
    } else {
      
    }

}


public function authenticate(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email', 'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');



        if (Auth::attempt($credentials, $request->has('remember')))
        { //this if validate if the user is on the database line 1
            $user = Auth::user();
           return response()->json([
            'auth' => 'success',
            'user' => $user
        ]);
            //this redirect if user is the db line 2
        }

        return response()->json(['auth' => 'fail']);
    }


    public function current_user(){

         $user = Auth::user();

  
        return response()->json($user);
  

    }




}
