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

$body = "From: $name\n E-Mail: $email\n Message:\n $message";
