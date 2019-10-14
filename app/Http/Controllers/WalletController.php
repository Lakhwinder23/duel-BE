<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;
use SafeCharge\Api\RestClient;
use SafeCharge\Api\Service\AuthenticationManagement;
use SafeCharge\Api\Service\OrdersManagement;
use SafeCharge\Api\Service\Payments\CreditCard;
use SafeCharge\Api\Service\UserPaymentOptions;
use SafeCharge\Api\Service\UsersManagement;
use App\PaymentMethod;



class WalletController extends Controller
{
    //

    private $_service;

	 private static $_client = null;

    private static $_sessionToken = null;

    private static $_userTokenId = null;

    private static $_upoCreditCardId = null;


     public function __construct()
    {
        

        $this->_service = new UsersManagement($this->getClient());
        $this->_optionsservice = new UserPaymentOptions($this->getClient());
    }

    public static function getClient()
    {
        if (self::$_client == null) {

          

            self::$_client = new RestClient([
                'environment'       => \SafeCharge\Api\Environment::TEST,
			    'merchantId'        => '7340426767903440312',
			    'merchantSiteId'    => '186183',
			    'merchantSecretKey' => 'mdQiEErubToJY1GIdUzxByxt3aX2QhjRHH0TYMPCCSL6aUz2JQwcLL9ngPzmANlK'
			         ]);

         
        }
        return self::$_client;
    }

    public function add_safecharge_user($userTokenId){

    	$userTokenId = sha1(time());

    	$user = auth()->user();

    	$user_id = $user->id;

    	$User = User::find($user_id);



    	// client request id is the eloquent user id
        $params      = [
            'userTokenId'     => $userTokenId,
            'clientRequestId' => date('YmdHis'),
            'firstName'       => $User->first_name,
            'lastName'        => $User->last_name,
            'address'         => $User->address_line_1,
            'state'           => '',
            'city'            => $User->town,
            'zip'             => $User->postcode,
            'countryCode'     => 'GB',
            'county'          => '',
            'phone'           => '',
            'locale'          => 'en_UK',
            'email'           => $User->email,
        ];

        $response = $this->_service->createUser($params);
        //$this->assertEquals('SUCCESS', $response['status']);
        //$this->assertContains('userId', $response);

        print_r($response);
        //return $userTokenId;

    }



    private function get_user_token_id(){

    	$user = auth()->user();

    	$user_id = $user->id;

    	$User = User::find($user_id);

    	$safecharge_token_id = $User->safecharge_token_id;

    	if($safecharge_token_id == ''){

    		$code = 'tk';
    		for($i=1;$i<=10;$i++):
    			$code .= mt_rand(1,9);
    		endfor;
    		$code .= date('dmHis');

    		$User->safecharge_token_id = $code;
    		$User->save();


    		$this->add_safecharge_user($code);

    		return $code;

    	}else{

    		return $safecharge_token_id;
    	}
    }

    public function add_method(Request $request){


    	$method_name = $request->method_name;
    	$card_number = $request->card_number;
    	$cardholder_name = $request->cardholder_name;
    	$expiry_date = $request->expiry_date;

    	$last_four_digits = substr($card_number, 12, 4);

    	$user = auth()->user();

    	$user_id = $user->id;

    	$User = User::find($user_id);

    	$address = $User->address_line_1.' ' . $User->postcode;

    	$userTokenId = $this->get_user_token_id();

    	$clientRequest = date('YmdHis').$userTokenId;

    	$params   = [
            'userTokenId'     => $userTokenId,
            'clientRequestId' => $clientRequest,
            'ccCardNumber'    => $card_number,
            'ccExpMonth'      => '06',
            'ccExpYear'       => '2020',
            'ccNameOnCard'    => $cardholder_name,
            //'billingAddress'  => $address,
        ];
        

       // $response = $this->_optionsservice->addUPOCreditCard($params);

        // when the above works - we store uniqueCC for our records which we can use with the last 4 digits

        $uniqueCC = '23423423423423';
       
        //print_r( $response );

        $PaymentMethod = new PaymentMethod;

        $PaymentMethod->user_id = $user_id;
        $PaymentMethod->safecharge_token_id = $userTokenId;
        $PaymentMethod->card_ending = $last_four_digits;
        $PaymentMethod->cardholder_name = $cardholder_name;
        $PaymentMethod->method_name = $method_name;
        $PaymentMethod->uniqueCC = $uniqueCC;

        $PaymentMethod->save();







    }


    public function get_methods(){

    	$user = auth()->user();

    	$user_id = $user->id;

    	$methods = PaymentMethod::where('user_id', '=', $user_id)->get();

    	$arr = array(
    		'status' => 'success',
    		'methods' => $methods
    	);

    	return response()->json($arr);

    }
}
