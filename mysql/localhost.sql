-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 04, 2021 at 05:27 PM
-- Server version: 5.7.32
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

<br />
<b>Fatal error</b>:  Uncaught TypeError: implode(): Argument #2 ($array) must be of type ?array, string given in /Applications/MAMP/bin/phpMyAdmin/libraries/classes/Export.php:558
Stack trace:
#0 /Applications/MAMP/bin/phpMyAdmin/libraries/classes/Export.php(558): implode(Array, '|')
#1 /Applications/MAMP/bin/phpMyAdmin/export.php(441): PhpMyAdmin\Export::exportServer(Array, 'structure_and_d...', Object(PhpMyAdmin\Plugins\Export\ExportSql), '\n', 'server_export.p...', 'server', false, true, false, false, Array, '')
#2 {main}
  thrown in <b>/Applications/MAMP/bin/phpMyAdmin/libraries/classes/Export.php</b> on line <b>558</b><br />
