<?php
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

// Security: allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "error" => "Invalid request"]);
    exit;
}

// reCAPTCHA secret key
$secretKey = "YOUR_RECAPTCHA_SECRET_KEY";
$recaptcha = $_POST['recaptcha'] ?? '';

if (!$recaptcha) {
    echo json_encode(["success" => false, "error" => "Captcha missing"]);
    exit;
}

// Verify captcha with Google
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$recaptcha}");
$responseKeys = json_decode($response, true);

if (!$responseKeys["success"]) {
    echo json_encode(["success" => false, "error" => "Captcha failed"]);
    exit;
}

// Sanitize input
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (!$name || !$email || !$message) {
    echo json_encode(["success" => false, "error" => "Missing required fields"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = "smtp.yourserver.com";
    $mail->SMTPAuth = true;
    $mail->Username = "your@email.com";
    $mail->Password = "yourpassword";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom("your@email.com", "Your Website");
    $mail->addAddress("destination@email.com");

    // Attach file if uploaded
    if (!empty($_FILES['file']['tmp_name'])) {
        $allowedTypes = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','image/png','image/jpeg'];
        if (in_array($_FILES['file']['type'], $allowedTypes) && $_FILES['file']['size'] < 2*1024*1024) {
            $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        }
    }

    $mail->isHTML(true);
    $mail->Subject = "New message from contact form";
    $mail->Body    = "
        <b>Name:</b> {$name} <br>
        <b>Email:</b> {$email} <br>
        <b>Message:</b> <br>" . nl2br($message);

    $mail->send();

    echo json_encode(["success" => true]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
}