-- MySQL dump 10.13  Distrib 8.0.37, for Linux (x86_64)
--
-- Host: localhost    Database: colab
-- ------------------------------------------------------
-- Server version	8.0.37-0ubuntu0.22.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `componentes`
--

DROP TABLE IF EXISTS `componentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `componentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_nome_componente` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `componentes`
--

LOCK TABLES `componentes` WRITE;
/*!40000 ALTER TABLE `componentes` DISABLE KEYS */;
INSERT INTO `componentes` VALUES (16,'Buzzer'),(9,'Capacitor'),(19,'Cristal Quartzo'),(13,'Diodo'),(20,'Foto diodo receptor trasnparente'),(22,'Fusivel de vidro'),(11,'Led'),(24,'Porta Fusível'),(10,'Potenciômetro'),(14,'Push button'),(25,'Relé'),(1,'Resistor'),(23,'Sensor de temperatura'),(26,'Sensor Óptico'),(8,'Transistor'),(15,'Varistor'),(17,'Ventoinha');
/*!40000 ALTER TABLE `componentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especificacoes`
--

DROP TABLE IF EXISTS `especificacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especificacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_componente` int DEFAULT NULL,
  `potencia` varchar(10) DEFAULT NULL,
  `amount_components` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_componente` (`id_componente`),
  KEY `idx_potencia` (`potencia`),
  CONSTRAINT `especificacoes_ibfk_1` FOREIGN KEY (`id_componente`) REFERENCES `componentes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especificacoes`
--

LOCK TABLES `especificacoes` WRITE;
/*!40000 ALTER TABLE `especificacoes` DISABLE KEYS */;
INSERT INTO `especificacoes` VALUES (9,8,'c1815',82),(10,9,'100nf',41),(11,10,'50K',178),(12,10,'5K',40),(13,11,'Vermelho',42),(14,11,'Verde',45),(16,13,'1n4007',80),(17,14,'tatil',98),(18,15,'10mm',75),(19,16,'12v',30),(20,17,'12v',4),(22,19,'12MHz',3),(23,20,'5mm',4),(25,1,'1k2',8),(26,22,'250v',94),(27,23,'10k',49),(28,24,'5x20',106),(29,25,'5v',120),(30,26,'TCRT5000',158),(31,11,'Azul',78);
/*!40000 ALTER TABLE `especificacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loanComponents`
--

DROP TABLE IF EXISTS `loanComponents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loanComponents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `registration` varchar(14) DEFAULT NULL,
  `nome_componente` varchar(50) DEFAULT NULL,
  `specs` varchar(10) DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `registration` (`registration`),
  KEY `nome_componente` (`nome_componente`),
  KEY `especificacao` (`specs`),
  CONSTRAINT `loanComponents_ibfk_1` FOREIGN KEY (`registration`) REFERENCES `users` (`registration`),
  CONSTRAINT `loanComponents_ibfk_2` FOREIGN KEY (`nome_componente`) REFERENCES `componentes` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loanComponents`
--

LOCK TABLES `loanComponents` WRITE;
/*!40000 ALTER TABLE `loanComponents` DISABLE KEYS */;
INSERT INTO `loanComponents` VALUES (120,'20221041110041','Buzzer','12v',1,1),(121,'20221041110041','Capacitor','100nf',1,1),(122,'20221041110041','Cristal Quartzo','12MHz',1,1),(123,'20221041110041','Diodo','1n4007',1,1),(124,'20221041110041','Foto diodo receptor trasnparente','5mm',1,1),(125,'20221041110041','Fusivel de vidro','250v',1,0),(126,'20221041110041','Led','Vermelho',1,0),(127,'20221041110041','Porta Fusível','5x20',1,0),(128,'20221041110041','Potenciômetro','50K',1,1),(129,'20221041110041','Push button','tatil',1,0),(130,'20221041110041','Relé','5v',1,1);
/*!40000 ALTER TABLE `loanComponents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `registration` varchar(14) DEFAULT NULL,
  KEY `idx_matricula` (`registration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1231231231'),('20221041110041'),('20231142111142');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-15 19:40:26
