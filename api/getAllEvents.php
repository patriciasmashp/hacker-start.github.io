<?
$ch = curl_init();

// set url
curl_setopt($ch, CURLOPT_URL, "https://ctftime.org/api/v1/events/?limit=20");

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// $output contains the output string
$output = curl_exec($ch);

// close curl resource to free up system resources
curl_close($ch);



header('Access-Control-Allow-Origin: http://127.0.0.1:4000');
header('Content-Type: application/json; charset=utf-8');
echo $output;