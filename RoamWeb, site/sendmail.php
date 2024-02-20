<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["nom"];
    $email = $_POST["e-mail"];
    $message = $_POST["message"];

    $to = "kristi.metani13@gmail.com";
    $subject = "Nouveau message de $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>
