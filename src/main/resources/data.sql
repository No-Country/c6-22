INSERT INTO `roles`(`role_id`, `description`, `name`) VALUES (1, 'ADMIN', 'ROLE_ADMIN');
INSERT INTO `roles`(`role_id`, `description`, `name`) VALUES (2, 'CLIENT', 'ROLE_CLIENT');

INSERT INTO `users`(`user_id`, `password`, `soft_delete`, `username`, `role_id`) VALUES 
(1, '$2a$10$PLIZoVkrPM6AdhpJimMk1ufvokEXvyAlzEoXPrCyyn.LG.bAGN4.C', false, 'admin@test.com', 1);

INSERT INTO `categories`(`category_id`, `description`, `image`, `name`, `soft_delete`) VALUES 
(1, 'Description of laptops', 'https://', 'Laptops', false),
(2, 'Description of smartphones', 'https://', 'Smartphones', false),
(3, 'Description of tablets', 'https://', 'Tablets', false),
(4, 'Description of pc', 'https://', 'PC', false);