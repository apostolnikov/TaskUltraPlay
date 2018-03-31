<?php
$curl_h = curl_init('https://api.odds.gg/matches/sport/144');

header("Access-Control-Allow-Origin: *");

curl_setopt($curl_h, CURLOPT_HTTPHEADER,
    array(
        "Accept: application/json",
        "Content-Type: application/json",
        "api-key: a1172ade-d72c-4c80-832c-10ab3f44de0b",
        "isUpdate: true"
    )
);

curl_setopt($curl_h, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl_h);
echo json_encode(json_decode($response, true));
?>