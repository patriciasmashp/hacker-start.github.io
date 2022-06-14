<?
$jsonEvents = file_get_contents('events.json');
header('Access-Control-Allow-Origin: http://127.0.0.1:4000');
header('Content-Type: application/json; charset=utf-8');
echo $jsonEvents;