<?php


/*
 * Required functions:
 * 
 * 1. Import für Liste ohne die entsprechenden Angaben
 * 
 */


require('config-local.php');
require('model/Tool.php');
require('dal/db.php');

global $db;
$dbobj = new DB();
$db = $dbobj->getDB();

global $user_messages;
$user_messages = array();

include('view/includes/countries_german.php');

require('view/main.php');