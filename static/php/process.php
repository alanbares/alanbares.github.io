<?php

// PHP variables to extract data from
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$human = intval($_POST['name']);

//Send email
$from = 'Contact form'
$to = 'alanbares@gmail.com'
$subject = 'Message from contact';

$body = 'From: $name\n E-Mail: $email\n Message:\n $message';

// Form Validation

# Name field
if (!$_POST['name']) {
    $errName = 'Please enter your name';
}

# Email field
if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errEmail = 'Please enter a valid email address';
}

# Spam Bot
if ($human !== 5) {
    $errHuman = 'Can\'t tell if human'
}



?>
