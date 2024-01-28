<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if($_SERVER['REQUEST_METHOD'] == "POST")
    {
        


        //Load Composer's autoloader
        require 'vendor/autoload.php';

        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);
        $mail->CharSet = 'UTF-8';

        try {
            //Server settings
            $mail->SMTPDebug =0;                      //Enable verbose debug output
            $mail->SMTPOptions = [
                'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
                ]
            ];

            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'piterbabiak@gmail.com';                     //SMTP username
            $mail->Password   = 'lgjyqbrmzgmkislg';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('jarekbabiak3@gmail.com', 'PORTFOLIO');
            $mail->addAddress('jarekbabiak3@gmail.com');     //Add a recipient
            //Content
            // $mail->isHTML(true);                                  //Set email format to HTML

            $to = $_POST['email'];
            $name = $_POST['name'];
            $area = $_POST['textarea'];

            if ($mail->addReplyTo($to, $name, $area)) {
                $mail->Subject = 'Kontakt od '.$_POST['email'];
                $mail->isHTML(false);
                $mail->Body = <<<EOT
                Email: {$_POST['email']}
                Imie i Nazwiso: {$_POST['name']}
                Wiadomość: {$_POST['textarea']}
                EOT;
            }

            $mail->send();
            echo 'Message has been sent';
            unset($to, $name, $area);

            exit();
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        } 
    }

?>