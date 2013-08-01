-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 02, 2013 at 12:40 AM
-- Server version: 5.5.32
-- PHP Version: 5.3.10-1ubuntu3.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `base_projet`
--

-- --------------------------------------------------------

--
-- Table structure for table `abonne`
--

CREATE TABLE IF NOT EXISTS `abonne` (
  `idAbonnee` int(11) NOT NULL AUTO_INCREMENT,
  `pwd` varchar(254) DEFAULT NULL,
  `login` varchar(254) DEFAULT NULL,
  `nomAbonne` varchar(254) DEFAULT NULL,
  `prenomAbonne` varchar(254) DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`idAbonnee`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=57 ;

--
-- Dumping data for table `abonne`
--

INSERT INTO `abonne` (`idAbonnee`, `pwd`, `login`, `nomAbonne`, `prenomAbonne`, `email`) VALUES
(1, 'berasmi', 'r.asma', 'asma', 'rebaya', 'asma@gmail.com'),
(3, '', '', NULL, NULL, NULL),
(7, 'ameni', 'ameni', NULL, NULL, NULL),
(8, 'ser', 'asl', NULL, NULL, NULL),
(9, 'souad', 'souad', NULL, NULL, NULL),
(10, 'AMIN', 'AMIN', '', '', 'AMIN@GMAIL.COM'),
(12, 'k', 'jk', 'a', 'h', 'j'),
(13, 'monoprix', 'monoprix', 'monoprix', NULL, 'monoprix@gmail.com'),
(14, 'magasin general', 'magasin general', 'magasin general', NULL, 'magasinGeneral@gmail.com'),
(15, 'carrefour', 'carrefour', 'carrefour', 'carrefour', 'carrefour'),
(19, 'wafa', 'wafa', 'wafa	', 'wafa.dogui@gmail.com', 'dogui'),
(20, 'seif', 'seif', 'seif', 'seif', 'seif'),
(21, 'kk', 'jj', 'll', 'kk', 'nn'),
(22, '', '', '', '', ''),
(23, 'amir', 'amir', 'amir', 'amir@gmail.com', 'amir'),
(24, 'nabil', 'nabil', 'nabil', 'nabil@gmail.com', 'nabil'),
(25, 'ali', 'ali', 'ali', 'ali', 'ali'),
(26, 'sahar', 'sahar', 'sahar', 'sahar', 'sahar'),
(27, 'ana', 'ana ', 'ana', 'ana', 'ana'),
(28, 'dada', 'dada', 'dada', 'dada', 'dada'),
(29, 'zied', 'zied', 'zied', 'zied', 'zied'),
(30, 'HATEM', 'HATEM', 'HATEM', 'HATEM', 'HATEM'),
(32, 'FIDE', 'FIDE', 'FIDE', 'FIDE', 'FIDE'),
(42, 'a', 'a', 'a', 'a', 'a'),
(43, 'k', 'k', 'k', 'k', 'k'),
(44, 'S', 'S', 'S', 'S', 'S'),
(45, 'ta', 'ta', '', '', ''),
(46, 'ta', 'ta', 'ta', 'ta', 'ta'),
(47, '____________', '________', '_________', '___________', '________'),
(48, 'ti', 'ti', 'ti', 'ti', 'ti'),
(49, 'gg', 'gg', 'gg', 'gg', ''),
(50, 'a', 'a', 'a', 'a', 'a'),
(51, 'de', 'de', 'de', 'de', 'de'),
(52, 'hedi', 'hedi', 'hedi', 'hedi', 'hedi'),
(53, 'f', 'f', 'lazher', 'f', 'dhib'),
(54, 'e', 'e', 'e', 'e', 'e'),
(55, 'i', 'i', 'i', 'i', 'i'),
(56, 'asmarebaya', 'r.asma', 'Rebaya', 'Asma', 'IF5@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `association12`
--

CREATE TABLE IF NOT EXISTS `association12` (
  `idAvis` int(11) DEFAULT NULL,
  `iidProduit` int(11) DEFAULT NULL,
  KEY `FK_association12` (`idAvis`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

CREATE TABLE IF NOT EXISTS `avis` (
  `idAvis` int(11) NOT NULL,
  `idAbonnee` int(11) NOT NULL,
  `texteAvis` varchar(254) DEFAULT NULL,
  `niveauAvis` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`idAvis`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `catalog`
--

CREATE TABLE IF NOT EXISTS `catalog` (
  `idCatalog` int(11) NOT NULL AUTO_INCREMENT,
  `idAbonnee` int(11) NOT NULL,
  `nomCatalog` varchar(254) DEFAULT NULL,
  `dateUploadCatalog` datetime NOT NULL,
  PRIMARY KEY (`idCatalog`),
  KEY `FK_associationCatalog` (`idAbonnee`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `catalog`
--

INSERT INTO `catalog` (`idCatalog`, `idAbonnee`, `nomCatalog`, `dateUploadCatalog`) VALUES
(1, 14, 'monoprix', '2013-05-16 00:00:00'),
(2, 14, 'monoprix', '2013-05-15 00:00:00'),
(3, 15, 'magasin general', '2013-05-09 00:00:00'),
(4, 15, 'magasin general', '2013-04-06 00:00:00'),
(5, 13, 'carrefour', '2013-03-25 00:00:00'),
(6, 13, 'carrefour', '2013-02-21 00:00:00'),
(8, 14, 'monoprix', '2013-05-16 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `idCategorie` int(11) NOT NULL,
  `nomCategorie` varchar(254) DEFAULT NULL,
  `desccategorie` varchar(254) DEFAULT NULL,
  `imagecategorie` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`idCategorie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`idCategorie`, `nomCategorie`, `desccategorie`, `imagecategorie`) VALUES
(1, 'cremerie', 'les produits du lait', 'http://10.0.2.2/Kaddechphp/pdt/creme.jpg'),
(2, 'sugele', 'denrees alimentaires surgelees', 'http://10.0.2.2/Kaddechphp/pdt/surgele.jpg'),
(4, 'Parfumerie', 'produits de beauté ou de toilette', 'http://10.0.2.2/Kaddechphp/pdt/par.jpg'),
(5, 'TV/HiFi', 'electronique grand public', ' 	http://10.0.2.2/Kaddechphp/pdt/tv.jpg'),
(6, 'bagagerie', 'les portes bagages ', 'http://10.0.2.2/Kaddechphp/pdt/bag.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE IF NOT EXISTS `client` (
  `idAbonnee` int(11) NOT NULL AUTO_INCREMENT,
  `etatSocialal` varchar(254) DEFAULT NULL,
  `sexe` varchar(254) DEFAULT NULL,
  `ville` varchar(254) DEFAULT NULL,
  `adresseClient` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idAbonnee`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=56 ;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`idAbonnee`, `etatSocialal`, `sexe`, `ville`, `adresseClient`) VALUES
(1, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL),
(19, NULL, NULL, NULL, NULL),
(20, NULL, NULL, NULL, NULL),
(23, NULL, NULL, NULL, NULL),
(24, NULL, NULL, NULL, NULL),
(25, NULL, NULL, NULL, NULL),
(26, NULL, NULL, NULL, NULL),
(27, NULL, NULL, NULL, NULL),
(42, NULL, NULL, NULL, NULL),
(43, NULL, NULL, NULL, NULL),
(44, NULL, NULL, NULL, NULL),
(45, NULL, NULL, NULL, NULL),
(47, NULL, NULL, NULL, NULL),
(48, NULL, NULL, NULL, NULL),
(49, NULL, NULL, NULL, NULL),
(51, NULL, NULL, NULL, NULL),
(52, NULL, NULL, NULL, NULL),
(53, NULL, NULL, NULL, NULL),
(54, NULL, NULL, NULL, NULL),
(55, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `commande`
--

CREATE TABLE IF NOT EXISTS `commande` (
  `idCommande` int(11) NOT NULL,
  `idPanier` int(11) DEFAULT NULL,
  `prixCommande` float DEFAULT NULL,
  `dateCommande` datetime DEFAULT NULL,
  `etatCommande` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`idCommande`),
  KEY `FK_association4` (`idPanier`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `commercial`
--

CREATE TABLE IF NOT EXISTS `commercial` (
  `idAbonnee` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `SecretCode` int(4) DEFAULT NULL,
  PRIMARY KEY (`idAbonnee`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `commercial`
--

INSERT INTO `commercial` (`idAbonnee`, `name`, `password`, `SecretCode`) VALUES
(13, 'carrefour', 'carrefour', 1111),
(14, 'monoprix', 'monoprix', 2222),
(15, 'magasin general', 'magasin', 3333),
(19, 'geant', 'geant', 4444);

-- --------------------------------------------------------

--
-- Table structure for table `etatcommande`
--

CREATE TABLE IF NOT EXISTS `etatcommande` (
  `nomEtat` varchar(254) NOT NULL,
  `idCommande` int(11) DEFAULT NULL,
  `valeurEatcmd` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`nomEtat`),
  KEY `FK_association13` (`idCommande`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grillezone`
--

CREATE TABLE IF NOT EXISTS `grillezone` (
  `idZone` int(11) DEFAULT NULL,
  `Zon_idZone` int(11) DEFAULT NULL,
  `idGrille` int(11) NOT NULL AUTO_INCREMENT,
  `cout` float DEFAULT NULL,
  PRIMARY KEY (`idGrille`),
  KEY `FK_association19` (`Zon_idZone`),
  KEY `FK_association18` (`idZone`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=783 ;

--
-- Dumping data for table `grillezone`
--

INSERT INTO `grillezone` (`idZone`, `Zon_idZone`, `idGrille`, `cout`) VALUES
(1, 2, 751, 300),
(1, 5, 752, 350),
(1, 3, 753, 600),
(2, 7, 754, 600),
(5, 6, 755, 750),
(5, 9, 756, 650),
(14, 13, 757, 400),
(13, 9, 758, 550),
(9, 6, 759, 400),
(13, 10, 760, 550),
(6, 8, 761, 600),
(8, 10, 762, 750),
(2, 6, 763, 350),
(2, 5, 764, 550),
(7, 8, 765, 1000),
(3, 5, 766, 750),
(3, 4, 767, 350),
(4, 5, 768, 600),
(4, 9, 769, 700),
(1, 6, 771, 1200),
(1, 7, 772, 750),
(1, 8, 773, 1600),
(1, 9, 774, 500),
(1, 10, 775, 1200),
(1, 13, 776, 1050),
(15, 9, 777, 1050),
(15, 10, 778, 900),
(15, 8, 779, 1400),
(15, 7, 780, 2000),
(15, 13, 781, 1200),
(15, 6, 782, 750);

-- --------------------------------------------------------

--
-- Table structure for table `invitation`
--

CREATE TABLE IF NOT EXISTS `invitation` (
  `idAbonnee` int(11) NOT NULL,
  `email` varchar(254) NOT NULL,
  `commentaire` varchar(254) DEFAULT NULL,
  `idInvit` int(11) DEFAULT NULL,
  `dateEnvoi` datetime DEFAULT NULL,
  PRIMARY KEY (`email`),
  KEY `FK_association14` (`idAbonnee`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lignepanier`
--

CREATE TABLE IF NOT EXISTS `lignepanier` (
  `idLigne` int(11) NOT NULL AUTO_INCREMENT,
  `iidProduit` int(11) DEFAULT NULL,
  `idPanier` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL,
  PRIMARY KEY (`idLigne`),
  KEY `FK_association10` (`idPanier`),
  KEY `FK_association7` (`iidProduit`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=198 ;

--
-- Dumping data for table `lignepanier`
--

INSERT INTO `lignepanier` (`idLigne`, `iidProduit`, `idPanier`, `quantite`) VALUES
(1, 2, 2, 3),
(3, 1, 2, 1),
(4, 3, 1, 5),
(5, 2, 1, 8),
(6, 1, 1, 8),
(7, 1, 1, 8),
(8, 1, 1, 8),
(9, 1, 1, 8),
(10, 1, 1, 8),
(11, 1, 2, 3),
(12, 1, 2, 3),
(15, 1, 2, 7),
(16, 3, 2, 2),
(19, 1, 2, 4),
(20, 1, 3, 4),
(21, 2, 3, 1),
(22, 1, 5, 1),
(23, 3, 4, 1),
(24, 1, 38, 1),
(25, 2, 38, 2),
(26, 1, 48, 3),
(27, 2, 48, 2),
(28, 3, 48, 3),
(29, 3, 48, 3),
(39, 2, 50, 7),
(40, 1, 50, 5),
(41, 2, 50, 5),
(42, 3, 50, 5),
(43, 1, 50, 5),
(46, 2, 50, 3),
(47, 1, 50, 6),
(48, 1, 50, 3),
(49, 2, 50, 31),
(50, 3, 50, 4),
(53, 3, 50, 3),
(56, 3, 50, 9),
(59, 3, 50, 9),
(62, 3, 50, 9),
(63, 1, 70, 33),
(66, 1, 72, 2),
(69, 2, 72, 1),
(71, 2, 70, 1),
(72, 1, 70, 55),
(74, 1, 70, 2),
(75, 2, 70, 3),
(78, 1, 1, 3),
(80, 1, 70, 3),
(81, 1, 70, 3),
(83, 1, 70, 3),
(84, 1, 70, 3),
(85, 2, 70, 4),
(88, 1, 59, 100),
(89, 1, 59, 99),
(90, 1, 50, 99),
(91, 1, 50, 99),
(92, 1, 70, 1),
(93, 2, 70, 2),
(94, 3, 70, 3),
(95, 1, 1, 11),
(96, 2, 1, 22),
(97, 3, 1, 33),
(98, 1, 93, 1),
(99, 2, 93, 1),
(100, 3, 93, 1),
(101, 1, 93, 1),
(102, 2, 93, 1),
(103, 3, 93, 1),
(104, 1, 95, 1),
(105, 2, 95, 2),
(106, 3, 95, 3),
(107, 1, 95, 1),
(108, 1, 1, 2),
(109, 2, 95, 3),
(112, 2, 95, 3),
(113, 1, 95, 2),
(114, 2, 95, 1),
(115, 1, 70, 3),
(116, 1, 70, 2),
(117, 1, 70, 3),
(118, 1, 70, 2),
(121, 1, 2, 2),
(123, 3, 2, 3),
(124, 2, 95, 2),
(125, 3, 95, 33),
(126, 1, 95, 2),
(127, 1, 70, 2),
(128, 1, 70, 2),
(129, 3, 70, 2),
(130, 1, 70, 3),
(131, 2, 112, 3),
(132, 1, 112, 2),
(133, 2, 113, 4),
(134, 2, 113, 4),
(147, 1, 112, 2),
(148, 1, 112, 2),
(149, 2, 112, 3),
(150, 1, 112, 3),
(151, 2, 112, 2),
(152, 2, 112, 2),
(153, 2, 112, 4),
(154, 1, 112, 2),
(155, 1, 112, 3),
(156, 1, 112, 1),
(157, 2, 112, 1),
(158, 2, 1, 1),
(159, 2, 112, 1),
(160, 2, 112, 1),
(162, 1, 112, 2),
(163, 1, 112, 2),
(164, 1, 1, 2),
(165, 1, 112, 2),
(166, 2, 112, 2),
(167, 2, 112, 1),
(168, 1, 112, 2),
(169, 1, 112, 2),
(170, 1, 112, 2),
(171, 2, 112, 2),
(172, 3, 112, 1),
(173, 1, 112, 2),
(174, 2, 112, 1),
(175, 1, 93, 2),
(178, 1, 1, 3),
(179, 1, 1, 3),
(180, 2, 112, 5),
(181, 3, 112, 2),
(182, 2, 165, 7),
(183, 2, 165, 3),
(184, 2, 171, 2),
(185, 3, 171, 7),
(186, 2, 172, 2),
(187, 3, 172, 7),
(188, 2, 172, 1),
(189, 3, 172, 5),
(190, 3, 172, 5),
(191, 3, 172, 2),
(192, 2, 172, 3),
(193, 2, 177, 34),
(194, 3, 177, 22),
(195, 3, 182, 23),
(196, 2, 182, 21),
(197, 2, 182, 11);

-- --------------------------------------------------------

--
-- Table structure for table `magasin`
--

CREATE TABLE IF NOT EXISTS `magasin` (
  `idMagasin` int(11) NOT NULL AUTO_INCREMENT,
  `idAbonnee` int(11) DEFAULT NULL,
  `idZone` int(11) DEFAULT NULL,
  `nomMagasin` varchar(254) DEFAULT NULL,
  `dateCreation` datetime DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  PRIMARY KEY (`idMagasin`),
  KEY `FK_association5` (`idAbonnee`),
  KEY `FK_association16` (`idZone`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `magasin`
--

INSERT INTO `magasin` (`idMagasin`, `idAbonnee`, `idZone`, `nomMagasin`, `dateCreation`, `latitude`, `longitude`) VALUES
(1, 13, 9, 'Monoprixcentral parc', '2013-05-16 00:00:00', 36.804062, 10.183582),
(2, 13, 10, 'manar1', '2013-05-15 00:00:00', 36.847964, 10.166287),
(3, 14, 8, 'MGdenden', '2013-05-09 00:00:00', 36.801657, 10.108953),
(4, 14, 7, 'MGrueMaroc', NULL, 36.869279, 10.342865),
(5, 13, 13, 'Mprixbardocenter', NULL, 36.809474, 10.138321),
(6, 14, 6, 'MGariana', NULL, 36.861665, 10.187931);

-- --------------------------------------------------------

--
-- Table structure for table `panier`
--

CREATE TABLE IF NOT EXISTS `panier` (
  `idAbonnee` int(11) NOT NULL,
  `idPanier` int(11) NOT NULL AUTO_INCREMENT,
  `totalPanier` int(11) DEFAULT NULL,
  `etatPanier` tinyint(1) DEFAULT NULL,
  `dateajout` date DEFAULT NULL,
  PRIMARY KEY (`idPanier`),
  KEY `FK_association17` (`idAbonnee`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=187 ;

--
-- Dumping data for table `panier`
--

INSERT INTO `panier` (`idAbonnee`, `idPanier`, `totalPanier`, `etatPanier`, `dateajout`) VALUES
(1, 1, NULL, NULL, '2013-04-03'),
(7, 2, NULL, NULL, '2013-04-03'),
(1, 3, NULL, NULL, '2013-05-02'),
(1, 4, NULL, NULL, '2013-05-09'),
(7, 5, NULL, NULL, '2013-05-02'),
(23, 32, NULL, NULL, NULL),
(24, 34, NULL, NULL, NULL),
(24, 35, NULL, NULL, NULL),
(24, 36, NULL, NULL, NULL),
(24, 37, NULL, NULL, NULL),
(25, 38, NULL, NULL, NULL),
(26, 39, NULL, NULL, NULL),
(25, 40, NULL, NULL, NULL),
(25, 41, NULL, NULL, NULL),
(25, 42, NULL, NULL, NULL),
(25, 43, NULL, NULL, NULL),
(25, 44, NULL, NULL, NULL),
(25, 45, NULL, NULL, NULL),
(27, 48, NULL, NULL, NULL),
(27, 49, NULL, NULL, NULL),
(1, 50, NULL, NULL, '2013-05-18'),
(1, 51, NULL, NULL, NULL),
(1, 52, NULL, NULL, NULL),
(1, 53, NULL, NULL, NULL),
(1, 54, NULL, NULL, NULL),
(1, 55, NULL, NULL, NULL),
(1, 56, NULL, NULL, NULL),
(1, 57, NULL, NULL, NULL),
(1, 58, NULL, NULL, NULL),
(1, 59, NULL, NULL, NULL),
(1, 65, NULL, NULL, NULL),
(1, 66, NULL, NULL, NULL),
(1, 67, NULL, NULL, NULL),
(1, 68, NULL, NULL, NULL),
(1, 69, NULL, NULL, NULL),
(9, 70, NULL, NULL, NULL),
(1, 71, NULL, NULL, NULL),
(45, 72, NULL, NULL, NULL),
(45, 73, NULL, NULL, NULL),
(45, 74, NULL, NULL, NULL),
(45, 75, NULL, NULL, NULL),
(45, 76, NULL, NULL, NULL),
(45, 77, NULL, NULL, NULL),
(45, 78, NULL, NULL, NULL),
(45, 79, NULL, NULL, NULL),
(45, 80, NULL, NULL, NULL),
(45, 81, NULL, NULL, NULL),
(9, 82, NULL, NULL, NULL),
(45, 83, NULL, NULL, NULL),
(45, 84, NULL, NULL, NULL),
(9, 85, NULL, NULL, NULL),
(9, 86, NULL, NULL, NULL),
(9, 87, NULL, NULL, NULL),
(1, 88, NULL, NULL, NULL),
(9, 89, NULL, NULL, NULL),
(9, 90, NULL, NULL, NULL),
(9, 91, NULL, NULL, NULL),
(1, 92, NULL, NULL, NULL),
(47, 93, NULL, NULL, NULL),
(47, 94, NULL, NULL, NULL),
(48, 95, NULL, NULL, NULL),
(48, 96, NULL, NULL, NULL),
(1, 97, NULL, NULL, NULL),
(48, 98, NULL, NULL, NULL),
(48, 99, NULL, NULL, NULL),
(9, 100, NULL, NULL, NULL),
(9, 101, NULL, NULL, NULL),
(7, 102, NULL, NULL, NULL),
(7, 103, NULL, NULL, NULL),
(48, 104, NULL, NULL, NULL),
(48, 105, NULL, NULL, NULL),
(48, 106, NULL, NULL, NULL),
(48, 107, NULL, NULL, NULL),
(48, 108, NULL, NULL, NULL),
(9, 109, NULL, NULL, NULL),
(9, 110, NULL, NULL, NULL),
(9, 111, NULL, NULL, NULL),
(51, 112, NULL, NULL, NULL),
(52, 113, NULL, NULL, NULL),
(51, 114, NULL, NULL, NULL),
(51, 115, NULL, NULL, NULL),
(51, 116, NULL, NULL, NULL),
(51, 117, NULL, NULL, NULL),
(51, 118, NULL, NULL, NULL),
(51, 119, NULL, NULL, NULL),
(51, 120, NULL, NULL, NULL),
(51, 121, NULL, NULL, NULL),
(51, 122, NULL, NULL, NULL),
(51, 123, NULL, NULL, NULL),
(51, 124, NULL, NULL, NULL),
(51, 125, NULL, NULL, NULL),
(51, 126, NULL, NULL, NULL),
(51, 127, NULL, NULL, NULL),
(51, 128, NULL, NULL, NULL),
(51, 129, NULL, NULL, NULL),
(51, 130, NULL, NULL, NULL),
(51, 131, NULL, NULL, NULL),
(51, 132, NULL, NULL, NULL),
(51, 133, NULL, NULL, NULL),
(51, 134, NULL, NULL, NULL),
(51, 135, NULL, NULL, NULL),
(51, 136, NULL, NULL, NULL),
(51, 137, NULL, NULL, NULL),
(51, 138, NULL, NULL, NULL),
(51, 139, NULL, NULL, NULL),
(51, 140, NULL, NULL, NULL),
(51, 141, NULL, NULL, NULL),
(1, 142, NULL, NULL, NULL),
(51, 143, NULL, NULL, NULL),
(51, 144, NULL, NULL, NULL),
(51, 145, NULL, NULL, NULL),
(51, 146, NULL, NULL, NULL),
(1, 147, NULL, NULL, NULL),
(51, 148, NULL, NULL, NULL),
(51, 149, NULL, NULL, NULL),
(51, 150, NULL, NULL, NULL),
(51, 151, NULL, NULL, NULL),
(51, 152, NULL, NULL, NULL),
(51, 153, NULL, NULL, NULL),
(51, 154, NULL, NULL, NULL),
(51, 155, NULL, NULL, NULL),
(51, 156, NULL, NULL, NULL),
(1, 160, NULL, NULL, NULL),
(1, 161, NULL, NULL, NULL),
(1, 162, NULL, NULL, NULL),
(51, 163, NULL, NULL, NULL),
(51, 164, NULL, NULL, NULL),
(53, 165, NULL, NULL, NULL),
(53, 166, NULL, NULL, NULL),
(53, 167, NULL, NULL, NULL),
(53, 168, NULL, NULL, NULL),
(53, 169, NULL, NULL, NULL),
(24, 170, NULL, NULL, '2013-06-20'),
(9, 171, NULL, NULL, '2013-06-20'),
(54, 172, NULL, NULL, '2013-06-20'),
(54, 173, NULL, NULL, NULL),
(54, 174, NULL, NULL, NULL),
(54, 175, NULL, NULL, '2013-06-20'),
(54, 176, NULL, NULL, '2013-06-20'),
(55, 177, NULL, NULL, '2013-06-26'),
(55, 178, NULL, NULL, '2013-06-26'),
(48, 182, NULL, NULL, '2013-06-27'),
(1, 183, NULL, NULL, '2013-07-04'),
(1, 184, NULL, NULL, '2013-07-04'),
(1, 185, NULL, NULL, '2013-07-04'),
(1, 186, NULL, NULL, '2013-07-04');

-- --------------------------------------------------------

--
-- Table structure for table `prix`
--

CREATE TABLE IF NOT EXISTS `prix` (
  `iidProduit` int(11) DEFAULT NULL,
  `idAbonnee` int(11) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `dateMaj` datetime DEFAULT NULL,
  KEY `FK_association9` (`idAbonnee`),
  KEY `FK_association20` (`iidProduit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prix`
--

INSERT INTO `prix` (`iidProduit`, `idAbonnee`, `prix`, `dateMaj`) VALUES
(1, 13, 300, '2013-05-01 00:00:00'),
(1, 14, 350, '2013-05-05 00:00:00'),
(2, 13, 550, NULL),
(2, 14, 600, NULL),
(3, 13, 1000, NULL),
(3, 14, 920, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `produit`
--

CREATE TABLE IF NOT EXISTS `produit` (
  `idCategorie` int(11) DEFAULT NULL,
  `iidProduit` int(11) NOT NULL,
  `nomProduit` varchar(254) DEFAULT NULL,
  `imageProduit` varchar(255) DEFAULT NULL,
  `descriptionProduit` varchar(254) DEFAULT NULL,
  `dateAjout` datetime DEFAULT NULL,
  PRIMARY KEY (`iidProduit`),
  KEY `FK_association6` (`idCategorie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produit`
--

INSERT INTO `produit` (`idCategorie`, `iidProduit`, `nomProduit`, `imageProduit`, `descriptionProduit`, `dateAjout`) VALUES
(1, 1, 'dunup', 'http://10.0.2.2/Kaddechphp/pdt/surgele.jpg', 'yaourt ÃƒÆ’Ã‚Â  boire', '0000-00-00 00:00:00'),
(1, 2, 'yogo', 'http://10.0.2.2/Kaddechphp/pdt/surgele.jpg', 'yaourt classique', '0000-00-00 00:00:00'),
(2, 3, 'safia', 'http://10.0.2.2/Kaddechphp/pdt/surgele.jpg', 'eau minerale', '2013-04-15 00:00:00'),
(5, 12358967, 'Home Cinema', 'http://10.0.2.2/Kaddechphp/cat/ord.jpg', 'EAU DH 3120 S-5.1 canaux', NULL),
(5, 12549367, 'Plasma sumsung', 'http://10.0.2.2/Kaddechphp/cat/t.jpg', 'Ps 43 E 450-43', NULL),
(5, 15637475, 'PC Portable ACER', 'http://10.0.2.2/Kaddechphp/cat/pc.jpg', 'E1-531 processeur Intel dual core', NULL),
(5, 32001569, 'camera numerique', 'http://10.0.2.2/Kaddechphp/cat/ca.jpg', 'Ecran LCD 2.7', NULL),
(4, 35480039, 'UDV', 'http://10.0.2.2/Kaddechphp/cat/u.jpg', 'eau de parfun', NULL),
(5, 35879317, 'GSM', 'http://10.0.2.2/Kaddechphp/cat/i.jpg', 'GSM SONY ERECSON WT 13i', '2013-07-09 00:00:00'),
(1, 65890015, 'Mozzarella', 'http://10.0.2.2/Kaddechphp/cat/moz.jpg', 'Mozzarella Pizzailo souani', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `remarque`
--

CREATE TABLE IF NOT EXISTS `remarque` (
  `idAbonnee` int(11) NOT NULL,
  `idRque` int(11) NOT NULL,
  `texte` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`idRque`),
  KEY `FK_association15` (`idAbonnee`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE IF NOT EXISTS `zone` (
  `idZone` int(11) NOT NULL AUTO_INCREMENT,
  `latitude1` double DEFAULT NULL,
  `longitude1` double DEFAULT NULL,
  `latitude2` double DEFAULT NULL,
  `longitude2` double DEFAULT NULL,
  `nomZone` varchar(30) NOT NULL,
  PRIMARY KEY (`idZone`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`idZone`, `latitude1`, `longitude1`, `latitude2`, `longitude2`, `nomZone`) VALUES
(1, 36.874403, 10.272217, 36.869459, 10.210762, 'sokra'),
(2, 36.887584, 10.248871, 36.883465, 10.178146, 'chotrana'),
(3, 36.86424, 10.287666, 36.857922, 10.226555, 'El aouina'),
(4, 36.843087, 10.284233, 36.837042, 10.223465, 'les berges du lac'),
(5, 36.845834, 10.237541, 36.848857, 10.197029, 'La Charguia'),
(6, 36.858746, 10.216942, 36.859296, 10.181236, 'Ariana'),
(7, 36.866987, 10.190849, 36.859845, 10.132484, 'Ennasr'),
(8, 36.845285, 10.189476, 36.844186, 10.162354, 'Menzeh'),
(9, 36.831272, 10.146217, 36.822752, 10.205956, 'TUNIS'),
(10, 36.83505, 10.170164, 36.838073, 10.141068, 'Manar'),
(11, 36.793065, 10.15892, 36.765567, 10.198402, 'Torbet Elbey'),
(12, 36.854626, 10.114288, 36.793065, 10.142441, 'Cité Ettadhamon'),
(13, 36.80956, 10.137291, 36.803787, 10.172653, 'Beb Saadoun'),
(14, 36.79389, 10.117378, 36.747963, 10.091629, 'El Agba'),
(15, 0, 0, 0, 0, 'zoneuser');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `association12`
--
ALTER TABLE `association12`
  ADD CONSTRAINT `FK_association12` FOREIGN KEY (`idAvis`) REFERENCES `avis` (`idAvis`);

--
-- Constraints for table `catalog`
--
ALTER TABLE `catalog`
  ADD CONSTRAINT `FK_associationCatalog` FOREIGN KEY (`idAbonnee`) REFERENCES `commercial` (`idAbonnee`);

--
-- Constraints for table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `FK_Generalisation_3` FOREIGN KEY (`idAbonnee`) REFERENCES `abonne` (`idAbonnee`);

--
-- Constraints for table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `FK_association4` FOREIGN KEY (`idPanier`) REFERENCES `panier` (`idPanier`);

--
-- Constraints for table `commercial`
--
ALTER TABLE `commercial`
  ADD CONSTRAINT `FK_Generalisation_2` FOREIGN KEY (`idAbonnee`) REFERENCES `abonne` (`idAbonnee`);

--
-- Constraints for table `etatcommande`
--
ALTER TABLE `etatcommande`
  ADD CONSTRAINT `FK_association13` FOREIGN KEY (`idCommande`) REFERENCES `commande` (`idCommande`);

--
-- Constraints for table `grillezone`
--
ALTER TABLE `grillezone`
  ADD CONSTRAINT `FK_association18` FOREIGN KEY (`idZone`) REFERENCES `zone` (`idZone`),
  ADD CONSTRAINT `FK_association19` FOREIGN KEY (`Zon_idZone`) REFERENCES `zone` (`idZone`);

--
-- Constraints for table `invitation`
--
ALTER TABLE `invitation`
  ADD CONSTRAINT `FK_association14` FOREIGN KEY (`idAbonnee`) REFERENCES `client` (`idAbonnee`);

--
-- Constraints for table `lignepanier`
--
ALTER TABLE `lignepanier`
  ADD CONSTRAINT `FK_association10` FOREIGN KEY (`idPanier`) REFERENCES `panier` (`idPanier`),
  ADD CONSTRAINT `FK_association7` FOREIGN KEY (`iidProduit`) REFERENCES `produit` (`iidProduit`);

--
-- Constraints for table `magasin`
--
ALTER TABLE `magasin`
  ADD CONSTRAINT `FK_association16` FOREIGN KEY (`idZone`) REFERENCES `zone` (`idZone`),
  ADD CONSTRAINT `FK_association5` FOREIGN KEY (`idAbonnee`) REFERENCES `commercial` (`idAbonnee`);

--
-- Constraints for table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `FK_association17` FOREIGN KEY (`idAbonnee`) REFERENCES `client` (`idAbonnee`);

--
-- Constraints for table `prix`
--
ALTER TABLE `prix`
  ADD CONSTRAINT `FK_association20` FOREIGN KEY (`iidProduit`) REFERENCES `produit` (`iidProduit`),
  ADD CONSTRAINT `FK_association9` FOREIGN KEY (`idAbonnee`) REFERENCES `commercial` (`idAbonnee`);

--
-- Constraints for table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `FK_association6` FOREIGN KEY (`idCategorie`) REFERENCES `categories` (`idCategorie`);

--
-- Constraints for table `remarque`
--
ALTER TABLE `remarque`
  ADD CONSTRAINT `FK_association15` FOREIGN KEY (`idAbonnee`) REFERENCES `client` (`idAbonnee`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
