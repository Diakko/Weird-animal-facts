-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 12, 2020 at 10:51 AM
-- Server version: 5.5.64-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matiassh`
--

-- --------------------------------------------------------

--
-- Table structure for table `wop_pictures`
--

CREATE TABLE IF NOT EXISTS `wop_pictures` (
  `pic_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `filename` text NOT NULL,
  `user` int(11) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wop_pictures`
--

INSERT INTO `wop_pictures` (`pic_id`, `title`, `description`, `filename`, `user`) VALUES
(4, 'Kissa', 'The English puss, extended as pussy and pussycat, is attested from the 16th century and may have been introduced from Dutch poes or from Low German puuskatte, related to Swedish kattepus, or Norwegian pus, pusekatt.', 'c90ad88ec39c6fed30d056456f75336f', 1),
(2, 'Slug', 'Slugs can have up to four noses.', 'fe8e099779aeb086ca109d2a9e33c4e9', 2),
(3, 'Slug', 'Slugs can have up to four noses.', 'd206227f5741f88b6ff72761c2c20820', 2),
(5, 'Koira', 'Koiralla on varustettu vessapaperirullalla taistelussa koronaa vastaan', '597ac9101750bf5cdb7be1e3684a2731', 1),
(6, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', 'cc46b11ce71e09d290402615f699dc97', 3),
(7, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', '4d388190629e1da7c61ed6617608a34d', 3),
(8, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', 'dcd4b9160c313053f258ab74f6657f15', 3),
(9, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', '76a7749c8591e3c0d87948b047d4ac97', 3),
(10, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', 'a3ed9428bf46a8cd398cb8fa8669cf9d', 3),
(11, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', '09408f6579253f533bf4e2d38181b5e9', 3),
(12, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', '4df127acc0d5155664eb286f99edf571', 3),
(13, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', 'd81c24adf8e187185caea32979c64798', 3),
(14, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', '67e24e973f41182c1fc7910b573da9ec', 3),
(15, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', '3c6b927e80557396948b741cad6175db', 3),
(16, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', 'c5b472a376c50f670c5c4d5a42b5c591', 3),
(17, 'Hippo', 'Hippos sweat red sweat to protect them from harsh sun while coming out of water to eat greenery', '9bf05d74ea5ac08b88d5b878d87a7dbd', 3),
(18, 'Sloth', 'Sloths can sleep up to 22 hours a day', '2662226f62608f8b0aefcad7b06a2c2d', 3),
(19, 'Shrimp', 'Shrimps heard is usually located in their head', '4284371e33f24160c492707e5b6ccc83', 1),
(20, 'Elephant', 'Elephants can use their trunks as a fifth leg and for many other uses', 'a7532e3b5ac8ab28da1475142e92d5d7', 2),
(21, 'Koala', 'The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.', 'cdc6d7430925a7c7e25c59ab4971519e', 1),
(22, 'Panda', 'Bamboo contains very little nutritional value so pandas must eat 12-38kg every day to meet their energy needs.', '52fd0f83400224ee6601421954b562ac', 3),
(23, 'Toucan', 'The colorful and large bill, which in some large species measures more than half the length of the body, is the hallmark of toucans. Despite its size, the toucan''s bill is very light.', 'f24275e364bab2d6b39135fc221b5092', 4),
(24, 'Tigeer', 'The Champawat Tiger, a tigress found in Nepal and then India, had two broken canines. She was responsible for an estimated 430 human deaths, the most attacks known to be perpetrated by a single wild animal.', '2ef5a998b613129a380afb5c9e4c03d3', 4),
(25, 'Penguin', 'Nearly three percent of the ice in Antarctic glaciers is penguin urine.', '8d4555e0ab1ba9e7e488c3e45eca2d6c', 3),
(26, 'Penguin', 'Nearly three percent of the ice in Antarctic glaciers is penguin urine.', '934f020906b91e168ca381ff60c2017e', 1),
(27, 'Bat', 'Nanananannanananannana Batman', 'f18ea6624391c0afad1e70ba631fb674', 3),
(28, 'Bat', 'Bats always turn left when leaving a cave', 'b571ba284c8e877d4afe69f21a69c238', 3);

-- --------------------------------------------------------

--
-- Table structure for table `wop_user`
--

CREATE TABLE IF NOT EXISTS `wop_user` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `wop_user`
--

INSERT INTO `wop_user` (`user_id`, `name`, `email`, `password`) VALUES
(1, 'John Doe', 'john@metropolia.fi', '$2a$10$SoMSzFS3QejcBdMo9at8jeFh379CDfDi2gFG5TXId6b.gqYw4daee'),
(2, 'Jane Doez', 'jane@metropolia.fi', '$2a$10$SoMSzFS3QejcBdMo9at8jeFh379CDfDi2gFG5TXId6b.gqYw4daee'),
(3, 'matias', 'a@b.fi', '$2a$10$QYiPNp3AE0SQ9RlBTyQ8I.nINJtztCUWKf7nn450x8uAo9jpZHNEu'),
(4, 'stobe', 'ab@ab', '$2a$10$.i49pDWg8O7iqSVkoVqsdOtNqSmuKDOXEJMpOf1unakbhWpkIJ4ze');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wop_pictures`
--
ALTER TABLE `wop_pictures`
  ADD PRIMARY KEY (`pic_id`);

--
-- Indexes for table `wop_user`
--
ALTER TABLE `wop_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wop_pictures`
--
ALTER TABLE `wop_pictures`
  MODIFY `pic_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `wop_user`
--
ALTER TABLE `wop_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
