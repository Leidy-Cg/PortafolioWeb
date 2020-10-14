<?php
    $destinatario = 'leidycg2000@gmail.com';
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];

    $header = "Enviado desde la página de Leidy Lorena Cita";
    $mensajeCompleto = $mensaje . "\nAtentamente: ". $nombre

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script> SetTimeout(\"location.href='index.html'\",1000)</script>";
?>  