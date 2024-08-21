<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $fullName = htmlspecialchars($_POST['full-name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "remmanidev@gmail.com"; // Replace with your email address
    $email_subject = "New Message from Contact Form: $subject";
    $email_body = "Name: $fullName\nEmail: $email\n\nMessage:\n$message";

    // Send email
    if (mail($to, $email_subject, $email_body, "From: $email")) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
