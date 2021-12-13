<?php
    require 'connexion.php';
    
    $competencesStatement = $db->prepare('SELECT * FROM `gnome`');
    $competencesStatement->execute();
    $competences = $competencesStatement->fetchAll();
    echo json_encode($competences);
?>

