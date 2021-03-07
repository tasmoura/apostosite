<?php

if(isset($_POST['email']) && !empty($_POST['email'])){}
    
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['message']);

    $to = 'contato@agenciaaposto.com';
    $subject = 'site - agenciaaposto';
    $body =     'Nome: '.$nome. '\r\n'.
                'Email: '.$email. '\r\n'.
                'Mensagem: '.$mensagem. '\r\n';
    $header =   'From:contato@agenciaaposto.com'.'\r\n'.
                .'Reply-To:'.$email.'\r\n'.
                .'X=Mailer:PHP/'.phpversion();

    if(mail($to,$subject,$body,$header)){
        echo('email enviado com sucesso!');
    } else{
        echo('O email não pode ser enviado');
    }
}

?>