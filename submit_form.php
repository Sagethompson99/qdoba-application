<?php 
    $to = "sagethompson85@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Job Application";
    $message2 = "Thank you for applying to Qdoba!";


    $message = "First name: " . $first_name . "\nLast Name: " . $last_name;


    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to, $subject, $message, $headers);
    mail($from, $subject2, $message2, $headers2);
?>