<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to Composer autoload file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = htmlspecialchars($_POST['full-name']);
    $email = htmlspecialchars($_POST['email']);
    $phoneNumber = htmlspecialchars($_POST['phone-number']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                            
        $mail->Host       = 'smtp.hostinger.com'; // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'dev@remmani.com';                     
        $mail->Password   = 'yassine.DR@1996';                            
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   // Or use ENCRYPTION_STARTTLS with port 587
        $mail->Port       = 465;  // Or 587 for TLS

        // Recipients
        $mail->setFrom("dev@remmani.com", $fullName);
        $mail->addAddress('remmanidev@gmail.com'); 

        // Content
        $mail->isHTML(false);                                  
        $mail->Subject = "RM DEV - $subject";
        $mail->Body    = "Name: $fullName\nEmail: $email\nPhone: $phoneNumber\n\nMessage:\n$message";

        $mail->send();
        $response['status'] = 'success';
        $response['message'] = 'Message sent successfully!';
    } catch (Exception $e) {
        $response['status'] = 'error';
        $response['message'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method.';
}
echo json_encode($response);

