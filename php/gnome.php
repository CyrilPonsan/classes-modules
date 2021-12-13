<?php
    $user = 'firizgoude';
    $password = 'UmM8R8k9KimZdp1d';
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
    $competencesStatement = $db->prepare('SELECT * FROM `gnome`');
    $competencesStatement->execute();
    $competences = $competencesStatement->fetchAll();
    echo json_encode($competences);
?>

