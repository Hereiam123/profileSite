<?php

  if ($_POST)  
  {
    $to = "bdemaio1@gmail.com";
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $header = "From:".$from;

    //send email
    mail($to, $subject, $message, $header);
  }
  
?>
