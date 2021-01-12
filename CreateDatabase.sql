CREATE DATABASE UserInfo;

use UserInfo
  
  CREATE TABLE Users
  ( 
     userName   VARCHAR(100) PRIMARY KEY, 
     password   VARCHAR(100) NOT NULL, 
     userMail   VARCHAR(100) NOT NULL,
  ); 