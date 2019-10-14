<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use SafeCharge\Api\RestClient;
use SafeCharge\Api\Service\AuthenticationManagement;
use SafeCharge\Api\Service\OrdersManagement;
use SafeCharge\Api\Service\Payments\CreditCard;
use SafeCharge\Api\Service\UserPaymentOptions;
use SafeCharge\Api\Service\UsersManagement;



class PaymentController extends Controller
{

	 private $_service;

	 private static $_client = null;

    private static $_sessionToken = null;

    private static $_userTokenId = null;

    private static $_upoCreditCardId = null;



	 public function __construct()
    {
        

        $this->_service = new UsersManagement($this->getClient());
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

           // $logger = new Logger('safecharge-php-sdk');
            //$logger->pushHandler(new StreamHandler(__DIR__ . DIRECTORY_SEPARATOR . 'safecharge-log.log', Logger::DEBUG));
            //self::$_client->setLogger($logger);
        }
        return self::$_client;
    }


    public function index(){

			    	$client = new \SafeCharge\Api\RestClient([
			    'environment'       => \SafeCharge\Api\Environment::TEST,
			    'merchantId'        => '7340426767903440312',
			    'merchantSiteId'    => '186183',
			    'merchantSecretKey' => 'mdQiEErubToJY1GIdUzxByxt3aX2QhjRHH0TYMPCCSL6aUz2JQwcLL9ngPzmANlK',
			]);

			$authenticationService = new \SafeCharge\Api\Service\AuthenticationManagement($client);

			$authenticationResponse = $authenticationService->getSessionToken([
			    'clientRequestId' => '1'
			]);

			$openOrderParams = [
			    'sessionToken'      => $authenticationResponse['sessionToken'],
			    'currency'          => 'USD',
			    'amount'            => "10",
			    'amountDetails'     => [
			        "totalShipping" => "0",
			        "totalHandling" => "0",
			        "totalDiscount" => "0",
			        "totalTax"      => "0"
			    ],
			    'items'             => [
			        [
			            "id"       => "1",
			            "name"     => "name",
			            "price"    => "10",
			            "quantity" => "1"
			        ]
			    ],
			];

			$orderService = new \SafeCharge\Api\Service\OrdersManagement($client);

			$openOrderResponse = $orderService->openOrder($openOrderParams);

			print_r($openOrderResponse);
    }


    public function add_user(){

    	$userTokenId = sha1(time());

    	// client request id is the eloquent user id
        $params      = [
            'userTokenId'     => 'andyclarke',
            'clientRequestId' => '100',
            'firstName'       => 'John',
            'lastName'        => 'Smith',
            'address'         => 'some street',
            'state'           => '',
            'city'            => '',
            'zip'             => '',
            'countryCode'     => 'GB',
            'county'          => 'Anchorage',
            'phone'           => '',
            'locale'          => 'en_UK',
            'email'           => 'john.smith@test.com',
        ];

        $response = $this->_service->createUser($params);
        //$this->assertEquals('SUCCESS', $response['status']);
        //$this->assertContains('userId', $response);

        print_r($response);
        //return $userTokenId;

    }

    public function add_user_credit_card()
    {
        
        $params   = [
            'userTokenId'     => 'andyclarke',
            'clientRequestId' => '235',
            'ccCardNumber'    => '4000020951595032',
            'ccExpMonth'      => '06',
            'ccExpYear'       => '2020',
            'ccNameOnCard'    => 'A CLARKE',
            'billingAddress'  => '16 The Road, Manchester, M9 6RW',
        ];
        $response = $this->_service->addUPOCreditCard($params);
       
        print_r( $response );

    }


    public function get_user($id){

    	$params   = [
            'userTokenId'     => 'andyclarke',
            'clientRequestId' => '109',
        ];
        $response = $this->_service->getUserDetails($params);

        print_r($response);
    }

     public static function getSessionToken()
    {
        if (self::$_sessionToken == null) {
            $service             = new AuthenticationManagement(self::getClient());
            $response            = $service->getSessionToken(['clientRequestId' => "15"]);
            self::$_sessionToken = $response['sessionToken'];
        }

        return self::$_sessionToken;
    }


    




    /**
     * @param null $_sessionToken
     */
    public static function setSessionToken($_sessionToken)
    {
        self::$_sessionToken = $_sessionToken;
    }


    /**
     * @return null|string
     * @throws \Exception
     * @throws \SafeCharge\Api\Exception\ConnectionException
     * @throws \SafeCharge\Api\Exception\ResponseException
     * @throws \SafeCharge\Api\Exception\ValidationException
     */
    public static function getUserTokenId()
    {
        if (self::$_userTokenId == null) {
            $userManagementService = new UsersManagement(TestCaseHelper::getClient());
            $userTokenId           = md5(time());
            $params                = [
                'userTokenId'     => $userTokenId,
                'clientRequestId' => '100',
                'firstName'       => 'John',
                'lastName'        => 'Smith',
                'address'         => 'some street',
                'state'           => '',
                'city'            => '',
                'zip'             => '',
                'countryCode'     => 'GB',
                'phone'           => '',
                'locale'          => 'en_UK',
                'email'           => 'john.smith@test.com',
            ];

            $response = $userManagementService->createUser($params);
            if (!isset($response['status']) || $response['status'] != 'SUCCESS') {
                throw new \Exception('Cannot create a user');
            }
            self::$_userTokenId = $userTokenId;
        }
        return self::$_userTokenId;
    }

    /**
     * @param bool $isAuth
     * @return mixed
     * @throws \Exception
     * @throws \SafeCharge\Api\Exception\ConnectionException
     * @throws \SafeCharge\Api\Exception\ResponseException
     * @throws \SafeCharge\Api\Exception\ValidationException
     */
    public static function createAndReturnTransaction($isAuth = false)
    {
        $service = new CreditCard(self::getClient());
        self::setSessionToken(null);
        $params = [
            'sessionToken'      => self::getSessionToken(),
            // "orderId"           => "",
            'userTokenId'       => TestCaseHelper::getUserTokenId(),
            'clientRequestId'   => '',
            'transactionType'   => $isAuth ? 'Auth' : 'Sale',
            'isRebilling'       => '0',
            'isPartialApproval' => '0',
            'currency'          => SimpleData::getCurrency(),
            'amount'            => SimpleData::getAmount(),
            'amountDetails'     => SimpleData::getAmountDetails(),
            'items'             => SimpleData::getItems(),
            'deviceDetails'     => SimpleData::getDeviceDetails(),
            'userDetails'       => SimpleData::getUserDetails(),
            'shippingAddress'   => SimpleData::getShippingAddress(),
            'billingAddress'    => SimpleData::getBillingAddress(),
            'dynamicDescriptor' => SimpleData::getDynamicDescriptor(),
            'merchantDetails'   => SimpleData::getMerchantDetails(),
            'addendums'         => SimpleData::getAddEndUms(),
            'cardData'          => SimpleData::getCarData(),
            'urlDetails'        => SimpleData::getUrlDetails()
        ];

        $response = $service->paymentCC($params);
        return $response;
    }

    /**
     * @return mixed
     * @throws \Exception
     * @throws \SafeCharge\Api\Exception\ConnectionException
     * @throws \SafeCharge\Api\Exception\ResponseException
     * @throws \SafeCharge\Api\Exception\ValidationException
     */
    public static function openOrderAndReturnOrderId()
    {
        $service = new OrdersManagement(self::getClient());
        self::setSessionToken(null);
        $params = [
            'sessionToken'      => TestCaseHelper::getSessionToken(),
            'userTokenId'       => TestCaseHelper::getUserTokenId(),
            'clientUniqueId'    => '',
            'clientRequestId'   => '',
            'currency'          => SimpleData::getCurrency(),
            'amount'            => SimpleData::getAmount(),
            'amountDetails'     => SimpleData::getAmountDetails(),
            'items'             => SimpleData::getItems(),
            'deviceDetails'     => SimpleData::getDeviceDetails(),
            'userDetails'       => SimpleData::getUserDetails(),
            'shippingAddress'   => SimpleData::getShippingAddress(),
            'billingAddress'    => SimpleData::getBillingAddress(),
            'dynamicDescriptor' => SimpleData::getDynamicDescriptor(),
            'merchantDetails'   => SimpleData::getMerchantDetails(),
            'addendums'         => SimpleData::getAddEndUms(),
        ];

        $response = $service->openOrder($params);
        return $response['orderId'];
    }

    /**
     * @return mixed
     * @throws \SafeCharge\Api\Exception\ConfigurationException
     * @throws \SafeCharge\Api\Exception\ConnectionException
     * @throws \SafeCharge\Api\Exception\ResponseException
     * @throws \SafeCharge\Api\Exception\ValidationException
     * @throws \Exception
     */
    public static function getUPOCreditCardId()
    {
        if (!is_null(self::$_upoCreditCardId)) {
            return self::$_upoCreditCardId;
        }
        $service = new UserPaymentOptions(self::getClient());

        $cardData = SimpleData::getCarData('375510288656924');

        $params = [
            'userTokenId'     => TestCaseHelper::getUserTokenId(),
            'clientRequestId' => '235',
            'ccCardNumber'    => $cardData['cardNumber'],
            'ccExpMonth'      => $cardData['expirationMonth'],
            'ccExpYear'       => $cardData['expirationYear'],
            'ccNameOnCard'    => $cardData['cardHolderName'],
        ];

        $response = $service->addUPOCreditCard($params);

        self::$_upoCreditCardId = $response['userPaymentOptionId'];

        return self::$_upoCreditCardId;
    }


}
