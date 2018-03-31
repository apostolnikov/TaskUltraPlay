<?php
$post_body = file_get_contents('php://input');

$matchId = filter_var($post_body, FILTER_SANITIZE_NUMBER_INT);

$data = array("matchIds" => array($matchId)); 

$data_string = json_encode($data);    

$ch = curl_init();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

curl_setopt($ch, CURLOPT_URL,"https://api.odds.gg/markets/matches");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    	"Accept: application/json",
        "Content-Type: application/json",
        "api-key: a1172ade-d72c-4c80-832c-10ab3f44de0b",
        "isUpdate: true")                                                                       
);                                              

// receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec ($ch);

curl_close ($ch);

echo json_encode(json_decode($response, true));
?>