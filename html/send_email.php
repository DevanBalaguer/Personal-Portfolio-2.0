<?php
$to = 'devan.balaguer@gmail.com'; // Your email address
$subject = 'New message from ' . $_POST['fname'] . ' ' . $_POST['lname']; // Subject line
$message = $_POST['message']; // Message
$headers = 'From: ' . $_POST['email'] . "\r\n" .
           'Reply-To: ' . $_POST['email'] . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Send email
mail($to, $subject, $message, $headers);

// Redirect to a "thank you" page
header('Location: thank_you.html');
exit;

?>
