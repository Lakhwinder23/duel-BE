<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;
class UserController extends Controller
{
  public $successStatus = 200;

public function login(Request $request)
   {

       if (Auth::user()) {
           return response()->json(['success' => true, 'message' => 'already logged in'], 200);
       } else {
           $data = array(
               'email' => $request->get('email'),
               'password' => $request->get('password')
           );
           if (Auth::attempt($data)) {
               $user = Auth::user();
               $success['token'] = $user->createToken('MyApp')->accessToken;
               return response()->json(['success' => $success, $user], 200);
           } else {
               return response()->json(['error' => 'Unauthorised'], 401);
           }
       }
   }

   public function register(Request $request)
   {
       $validator = Validator::make($request->all(), [
           'name' => ['required', 'string', 'max:255'],
           'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
           'password' => ['required']
       ]);
       if ($validator->fails()) {
           return response()->json(['error' => $validator->errors()], 401);
       }
       $user_id = User::create([
           'name' => $request['name'],
           'email' => $request['email'],
           'password' => bcrypt($request['password']),
           'provider' => 'users',
           'provider_id' => 0,
       ]);
       //$admin = User::where('role', 2)->first();
       $success['token'] =  $user_id->createToken('MyApp')->accessToken;
       // if ($admin) {
       //     $admin->notify(new NewUser($user_id));
       // }
       //return redirect('/Login');
       return response()->json(['status' => true, 'message' => 'Registration successful', 'result' => $user_id, $success]);
   }

   public function Logout(Request $request, $id)
   {
   $findcondition = DB::table('oauth_access_tokens')
       ->where('user_id', $id)
       ->Where('revoked', 'false')->get();
   if(sizeof($findcondition)!= 0){
     DB::table('oauth_access_tokens')
       ->where('user_id', $id)
       ->update([
           'revoked' => true
       ]);
   return response()->json(['success' => true, 'message' => 'logout successfully'], 200);
   }else{
     return response()->json(['success' => false, 'message' => 'please login first'], 401);
   }


   }

  public function details()
  {
      $user = Auth::user();
      return response()->json(['success' => $user], $this-> successStatus);
  }
}
