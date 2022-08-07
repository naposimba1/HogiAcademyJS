DROP TABLE IF EXISTS `tb_salle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_salle` (
  `Idsalle` int NOT NULL AUTO_INCREMENT,
  `nomclient` char(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `motif` char(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Montant` double DEFAULT NULL,
  `Nombrejour` double DEFAULT NULL,
  `datedebut` date DEFAULT NULL,
  `datefin` date DEFAULT NULL,
  PRIMARY KEY (`Idsalle`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--


DROP TABLE IF EXISTS `tb_decor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_decor` (
  `iddecor` int NOT NULL AUTO_INCREMENT,
   `idsalle` int NOT NULL,
  `nomdecor` char(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Montant` double DEFAULT NULL,
  PRIMARY KEY (`iddecor`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--

DROP TABLE IF EXISTS `tb_typedecor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_typedecor` (
  `idtype` int NOT NULL AUTO_INCREMENT,
  `iddecor` int NOT NULL,
  `nomtype` char(40) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idtype`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
ALTER TABLE tb_decor ADD FOREIGN KEY (idsalle) REFERENCES tb_salle (idsalle);
ALTER TABLE typedecor ADD FOREIGN KEY (iddecor) REFERENCES tb_decor (idecor);