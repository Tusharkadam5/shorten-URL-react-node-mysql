-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2020 at 11:13 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shortendb`
--

-- --------------------------------------------------------

--
-- Table structure for table `urlstable`
--

CREATE TABLE `urlstable` (
  `id` int(10) NOT NULL,
  `fullurl` varchar(250) NOT NULL,
  `shorturl` varchar(5) NOT NULL,
  `country` varchar(25) NOT NULL,
  `clicks` int(15) NOT NULL,
  `ipaddress` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `urlstable`
--

INSERT INTO `urlstable` (`id`, `fullurl`, `shorturl`, `country`, `clicks`, `ipaddress`) VALUES
(4, 'http://youtube.com/zxxz', 'tK4JO', 'india', 0, 0),
(5, 'http://google.com/abc', 'TFegr', 'india', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `urlstable`
--
ALTER TABLE `urlstable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `urlstable`
--
ALTER TABLE `urlstable`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
