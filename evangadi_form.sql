-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 28, 2023 at 04:56 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evangadi_form`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `quastion_id` int NOT NULL,
  `answer` varchar(128) NOT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `user_id` (`user_id`),
  KEY `quastion_id` (`quastion_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`answer_id`, `user_id`, `quastion_id`, `answer`) VALUES
(1, 1, 2, 'dnbfhds'),
(2, 1, 2, 'dnbfhds'),
(3, 1, 2, 'dnbfhds'),
(4, 1, 4, 'React is a javascript'),
(5, 3, 4, 'React is a javascript Library'),
(6, 1, 4, 'fRONT ENDE LANGUADGE nnnnnnnnnnnnn'),
(7, 1, 4, 'jjjjjjjjjjjjj\\\n'),
(8, 1, 4, 'rest is '),
(9, 1, 4, 'rest is '),
(10, 1, 4, 'rest is '),
(11, 1, 4, 'rest is '),
(12, 1, 1, 'hthfg'),
(13, 1, 1, 'here is the answersbjs'),
(14, 1, 1, 'here is the answersbjs');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
CREATE TABLE IF NOT EXISTS `profile` (
  `profile_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `first_name` varchar(128) NOT NULL,
  `last_name` varchar(128) NOT NULL,
  PRIMARY KEY (`profile_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`profile_id`, `user_id`, `first_name`, `last_name`) VALUES
(1, 9, 'qqq', 'www'),
(2, 10, 'Efrem', 'Efremw'),
(3, 11, 'beti', 'beti');

-- --------------------------------------------------------

--
-- Table structure for table `quastion`
--

DROP TABLE IF EXISTS `quastion`;
CREATE TABLE IF NOT EXISTS `quastion` (
  `quastion_id` int NOT NULL AUTO_INCREMENT,
  `quastion_Title` varchar(128) NOT NULL,
  `description` varchar(128) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`quastion_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `quastion`
--

INSERT INTO `quastion` (`quastion_id`, `quastion_Title`, `description`, `user_id`) VALUES
(1, 'React js', 'React js Description', 11),
(2, 'React js', 'React js Description', 11),
(3, 'swswww`', 'ede frfr f', 1);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
CREATE TABLE IF NOT EXISTS `registration` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(128) NOT NULL,
  `user_email` varchar(128) NOT NULL,
  `user_password` varchar(128) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`user_id`, `user_name`, `user_email`, `user_password`) VALUES
(1, 'magi', 'martaassefa23@gmail.com', '$2a$10$9MqcqcZR05o9eYki7nEAruIYvJpOB7sStvUkp6K4RbdOGYVQh5IYS'),
(2, 'ggggg', 'martaassefa36@gmail.com', '$2a$10$hEmyMnUeII53OAPQRu3XYeA65gwwsJdctcSbLb56Qm1eB/rnV/evC'),
(3, 'giiii', 'marta23@gmail.com', '$2a$10$LQ5PsC8DS0DNcWsEG8SiSe2fYkfS8Oh8nvvQUfp7RiODqfZfIpvUW'),
(4, 'geni', 'genetmoreda23@gmail.com', '$2a$10$3tNmoj48Ahrqk1CEw44YA.mdc3/qdKrkC9DSwK8dsf6lgzzd2Ia0K'),
(5, 'mmmm23@gmail.com', 'mmmm@gmail.com', '$2a$10$Tq1/CAqlxkgjr36l6kI.NORMTXd1yQkbhrfzAAzBfrc8vkSCx5Dv.'),
(6, 'girmasg', 'girma23@gmail.com', '$2a$10$riAtrBem29K0m5ngNpgP9OmcDtxm5lQVbZGyRR05mlzzu1eHtBJhq'),
(7, 'fffff', 'ffff23@gmail.com', '$2a$10$QCkDI2pKyzvmetqp5qibDesfPjeJdXrHHavvyp34Q.8W2LTDN29Pq'),
(8, 'efuu', 'efishu@gmail.com', '$2a$10$rweVcj0mKAH7amd7bje1IOpVQ4usTUj/xbvrmyaInxzghS9DF.urK'),
(9, 'efuu1', 'qqq@gmail.com', '$2a$10$hfyjdbxEunMOvKe1GmoK6ukri5uKibI1aYsMzciV0GgEEwsh.vrkC'),
(10, 'Efi', 'Efi@gmail.com', '$2a$10$GubY2/hPIX7jifLHwivP3OEDLiQ8/AIwODaJqIaSEkn2da610tpUq'),
(11, 'beti', 'beti@gmail.com', '$2a$10$0hWoioec.vKRBAgygt3i2uteaZZ/LXITjUUWrLNkOcAS8VOkEn1zW');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
