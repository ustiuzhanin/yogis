<?php


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$myEmail = 'frtrnng@gmail.com';
// $myEmail = 'yogiswafflesandgrill@gmail.com';
//$myEmail = 'rlopatkin@gmail.com';

if ( !empty($name) && !empty($email) && !empty($message) ) {
  $res = mail($myEmail, 'Mail from ' . $name . ' with my site', 'My email: ' . $email . '. Message: ' . $message);
}

header("Location: /");

//echo "Email is sent";
