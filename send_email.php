<?php
// Adjust the path as needed
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = htmlspecialchars($_POST['full-name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com'; // Hostinger SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'dev@remmani.com'; // Your email address
        $mail->Password   = 'yassine.DR@1996'; // Your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('dev@remmani.com', $fullName);
        $mail->addAddress('dev@remmani.com');

        // Content
        $mail->isHTML(false);
        $mail->Subject = "New Message from Contact Form: $subject";
        $mail->Body    = "Name: $fullName\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
