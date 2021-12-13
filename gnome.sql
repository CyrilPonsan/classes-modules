-- phpMyAdmin SQL Dump
-- version 5.1.1deb4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 13 déc. 2021 à 20:08
-- Version du serveur : 10.5.12-MariaDB-1
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gnomes`
--

-- --------------------------------------------------------

--
-- Structure de la table `gnome`
--

CREATE TABLE `gnome` (
  `id` int(255) NOT NULL,
  `nom` varchar(256) COLLATE utf8_bin NOT NULL,
  `metier` varchar(256) COLLATE utf8_bin NOT NULL,
  `niveau` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `gnome`
--

INSERT INTO `gnome` (`id`, `nom`, `metier`, `niveau`) VALUES
(1, 'Firizgoude', 'Shadow Priest', 249),
(2, 'Baboulinet', 'Démoniste', 244),
(3, 'Firstunprouf', 'Voleur', 200);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `gnome`
--
ALTER TABLE `gnome`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `gnome`
--
ALTER TABLE `gnome`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
