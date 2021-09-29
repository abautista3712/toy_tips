DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

USE testdb;
CREATE TABLE `reviews` (
	`id` INTEGER NOT NULL auto_increment,
	`toyName` varchar(255),
    `shortReview` varchar(255),
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO testdb.reviews(toyName, shortReview)
SELECT ToyName, Short_Review FROM toytips.reviews;