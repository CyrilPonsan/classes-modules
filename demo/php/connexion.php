<?php
    $user = 'toto';
    $password = 'jGqy0ZgYJBlwsfn9';
    $mysqlConnexion = new PDO('mysql:host=localhost;dbname=gnomes;', $user, $password);
    try
    {
        $db = new PDO('mysql:host=localhost;dbname=gnomes;', $user, $password);
        $db->exec("set names utf8");
    }
    catch (Exception $e)
    {
        die('Erreur : '.$e->getMessage());
    }
?>