CREATE TABLE `tb_temas` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo_tema` varchar(50) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`hashtags` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_usuarios` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_postagens` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo` varchar(50) NOT NULL,
	`post` TEXT(1000) NOT NULL,
	`imagens_url` varchar(100),
	`data` DATE NOT NULL,
	`fk_id_temas` bigint NOT NULL,
	`fk_id_usuarios` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_postagens` ADD CONSTRAINT `tb_postagens_fk0` FOREIGN KEY (`fk_id_temas`) REFERENCES `tb_temas`(`id`);

ALTER TABLE `tb_postagens` ADD CONSTRAINT `tb_postagens_fk1` FOREIGN KEY (`fk_id_usuarios`) REFERENCES `tb_usuarios`(`id`);




