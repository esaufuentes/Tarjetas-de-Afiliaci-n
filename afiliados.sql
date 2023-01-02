-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: person
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tarjet`
--

DROP TABLE IF EXISTS `tarjet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(30) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `direccion` varchar(120) NOT NULL,
  `nacionalidad` varchar(30) NOT NULL,
  `ocupacion` varchar(30) NOT NULL,
  `gradoe` varchar(30) NOT NULL,
  `inputEdad` int(60) NOT NULL,
  `mes` varchar(60) NOT NULL,
  `year` varchar(60) NOT NULL,
  `image` blob NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjet`
--

LOCK TABLES `tarjet` WRITE;
/*!40000 ALTER TABLE `tarjet` DISABLE KEYS */;
INSERT INTO `tarjet` VALUES (10,'777','esau','soltero','99842 96808','region 103','mexicana','estudiante','muchos',14,'5','2028','../fotos/ARTURO MIRANDA.jpg'),(11,'777','cvb','cvb','777','dfgh','fgh','fgh','g',14,'5','2028','../fotos/ARTURO MIRANDA.jpg'),(12,'7777 7','cfvgbhnjk','cfvgbhnj','7777','7777','me','estudiantes','maximos',5,'2','2026','../fotos/'),(13,'7489 555','esau','soltero','77777','8888','ghjk','hjk','ddd',5,'5','2023','../fotos/ARTURO MIRANDA.jpg'),(14,'7489 555','esau','soltero','77777','8888','ghjk','hjk','ddd',5,'5','2023','../fotos/ARTURO MIRANDA.jpg'),(15,'7888 8','jejdjd','SOLTERO','99885','REFION','MEXICANA','ESTUDIANTE','MAXIMOS',17,'9','2028','../fotos/Sin título-2.jpg'),(16,'','','','','','','','',0,'','','../fotos/'),(17,'5688 5548 5','esau fuentes diego','soltero','99842 96808','region1023','mexicana','estudiante','secundaria',16,'11','2029','../fotos/descarga.jpg');
/*!40000 ALTER TABLE `tarjet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-01 21:24:03
