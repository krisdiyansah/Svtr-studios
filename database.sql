-- ==============================================================================
-- DATABASE SCHEMA: savitar.studios (Streetwear E-Commerce Fullstack)
-- DBMS: MySQL 8.0+ / MariaDB
-- Brand: savitar.studios | Monogram: SVTR (Y2K Oval Aesthetic)
-- ==============================================================================

CREATE DATABASE IF NOT EXISTS `savitar_studios` 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `savitar_studios`;

-- ------------------------------------------------------------------------------
-- 1. Table: `admins`
-- Menyimpan kredensial administrator terenkripsi untuk akses panel inventaris
-- ------------------------------------------------------------------------------
DROP TABLE IF EXISTS `stock_logs`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL COMMENT 'Enkripsi password menggunakan SHA-256 atau BCRYPT',
  `recovery_key_hash` VARCHAR(255) DEFAULT NULL COMMENT 'Hash dari Master Recovery Key untuk reset sandi darurat (SVTR-RECOVERY-KEY-2026)',
  `full_name` VARCHAR(100) NOT NULL,
  `role` ENUM('superadmin', 'inventory_manager') DEFAULT 'superadmin',
  `last_login` DATETIME NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 2. Table: `categories`
-- Kategori produk streetwear (Tees, Hoodie, Outerwear, Accessories, etc.)
-- ------------------------------------------------------------------------------
CREATE TABLE `categories` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `slug` VARCHAR(50) NOT NULL UNIQUE,
  `description` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 3. Table: `products`
-- Data katalog produk, sisa stok inventaris, dan link integrasi Shopee
-- ------------------------------------------------------------------------------
CREATE TABLE `products` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `category_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `slug` VARCHAR(160) NOT NULL UNIQUE,
  `price` DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
  `stock` INT NOT NULL DEFAULT 0,
  `description` TEXT NULL,
  `shopee_url` VARCHAR(500) NOT NULL DEFAULT 'https://shopee.co.id/shop/1524620975',
  `image_url` VARCHAR(500) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `fk_products_category` 
    FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) 
    ON DELETE RESTRICT ON UPDATE CASCADE,
  INDEX `idx_stock` (`stock`),
  INDEX `idx_category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 4. Table: `stock_logs`
-- Audit trail pencatatan barang masuk & keluar secara real-time
-- ------------------------------------------------------------------------------
CREATE TABLE `stock_logs` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT UNSIGNED NOT NULL,
  `change_type` ENUM('IN', 'OUT', 'ADJUSTMENT') NOT NULL,
  `quantity` INT NOT NULL,
  `stock_before` INT NOT NULL,
  `stock_after` INT NOT NULL,
  `note` VARCHAR(255) NULL,
  `created_by` VARCHAR(50) DEFAULT 'admin',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `fk_stock_logs_product` 
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------------------------
-- 5. Seed Data: Kategori
-- ------------------------------------------------------------------------------
INSERT INTO `categories` (`id`, `name`, `slug`, `description`) VALUES
(1, 'Outerwear', 'outerwear', 'Brutalist work jackets, plaid hoodies & zip-ups'),
(2, 'Hoodie', 'hoodie', 'Heavyweight french terry & fleece pullovers/half-zips'),
(3, 'Tees', 'tees', 'Oversized & boxy fit graphic streetwear t-shirts'),
(4, 'Flannel', 'flannel', 'Oversized tartan flannels & casual streetwear shirts'),
(5, 'Pants', 'pants', 'Baggy balloon pants, camo double knee and bottoms'),
(6, 'Accessories', 'accessories', 'Plaid boxers, beanies, keychains, and tote bags');

-- ------------------------------------------------------------------------------
-- 6. Seed Data: Akun Administrator
-- Default credentials:
-- Username: admin
-- Password asli: savitar2026!
-- Hash SHA-256: aa357eba08f50ff3388ef4b38dda25dec78088811243b0972ada59ef64e4f900
-- ------------------------------------------------------------------------------
INSERT INTO `admins` (`id`, `username`, `email`, `password_hash`, `full_name`, `role`) VALUES
(1, 'admin', 'core@savitarstudios.com', 'aa357eba08f50ff3388ef4b38dda25dec78088811243b0972ada59ef64e4f900', 'Savitar Archive Master', 'superadmin');

-- ------------------------------------------------------------------------------
-- 7. Seed Data: Katalog Produk Streetwear Resmi Savitar Studios (Shopee Drop)
-- ------------------------------------------------------------------------------
INSERT INTO `products` (`id`, `category_id`, `name`, `slug`, `price`, `stock`, `description`, `shopee_url`, `image_url`, `is_active`) VALUES
(1, 5, 'SAVITAR STUDIOS | 8 Ball Baggy Balloon Pants', 'savitar-studios-8-ball-baggy-balloon-pants', 239000.00, 24, 
 'Celana baggy balloon cutting unisex dari Savitar Studios. Bahan premium fleece tebal dengan detail bordir 8-Ball & logo Savitar, tali pinggang adjustable, dan kontras jahitan putih khas streetwear.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-1-8ball-baggy-pants.jpg', 1),

(2, 1, 'SAVITAR STUDIOS | MONOCHROME PLAID JACKET', 'savitar-studios-monochrome-plaid-jacket', 300000.00, 16, 
 'Jaket hoodie motif plaid / tartan monokrom hitam putih khas Y2K streetwear. Siluet fleksibel, bahan katun tartan ringan berkualitas, ritsleting depan, dan hoodie berlapis ganda.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-2-monochrome-plaid.jpg', 1),

(3, 4, 'SAVITAR STUDIOS | Savitar Crowned Flannel Shirt', 'savitar-studios-crowned-flannel-shirt', 185000.00, 20, 
 'Kemeja flannel oversized bernuansa streetwear Y2K dengan grafis print lettering Savitar di dada. Bahan flannel wool blend halus, nyaman untuk daily wear maupun skena gigs.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-3-crowned-flannel.jpg', 1),

(4, 1, 'SAVITAR STUDIOS | PLAID JACKET ALL VARIAN', 'savitar-studios-plaid-jacket-all-varian', 300000.00, 12, 
 'Koleksi lengkap jaket tartan Savitar Studios dalam semua varian warna (Monochrome Black, Electric Blue, Dark Night, dan Earth Brown). Desain modular, ritsleting kuat, dan cutting boxy.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-4-plaid-all-varian.jpg', 1),

(5, 3, 'SAVITAR STUDIOS | Tshirt Boxy Color Riot Putih', 'savitar-studios-tshirt-boxy-color-riot-putih', 115000.00, 15, 
 'T-shirt cutting boxy oversized putih bersih dengan grafis Color Riot SVTR warna-warni kontras tinggi. Katun combed 24s adem dengan kerah rib tebal 3cm.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-5-color-riot-putih.jpg', 1),

(6, 1, 'SAVITAR STUDIOS | ELECTRIC BLUE PLAID JACKET', 'savitar-studios-electric-blue-plaid-jacket', 300000.00, 14, 
 'Jaket hoodie motif tartan electric blue kontras tinggi. Detail unik dengan saku dada multifungsi, tali serut hoodie, dan pergelangan tangan elastis.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-6-electric-blue-plaid.jpg', 1),

(7, 3, 'SAVITAR STUDIOS | Tshirt Boxy Meltdown Putih', 'savitar-studios-tshirt-boxy-meltdown-putih', 115000.00, 18, 
 'T-shirt boxy warna putih dengan grafis tangan meleleh Meltdown hitam brutalist di bagian dada. Sablon plastisol pekat dan tahan cuci berkali-kali.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-7-meltdown-putih.jpg', 1),

(8, 1, 'SAVITAR STUDIOS | Outlaw Cross Work Jacket', 'savitar-studios-outlaw-cross-work-jacket', 370000.00, 8, 
 'Work jacket hitam pekat dengan bordir grafis gothic Outlaw Iron Cross bertuliskan monogram SVTR besar di punggung serta deretan aksen bunga / bintang di lengan kiri. Material kanvas drill kokoh berfuring satin.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-8-outlaw-cross-jacket.jpg', 1),

(9, 2, 'SAVITAR STUDIOS | 8 Ball Oversize Half Zip Hoodie', 'savitar-studios-8-ball-oversize-half-zip-hoodie', 239000.00, 9, 
 'Hoodie half-zip dengan saku kanguru dan aksen bordir 8-Ball & artwork tribal di lengan. Bahan fleece katun berat 330 GSM dengan zipper logam Y2K.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-9-8ball-half-zip.jpg', 1),

(10, 1, 'SAVITAR STUDIOS | GRAPHITE PLAID JACKET', 'savitar-studios-graphite-plaid-jacket', 300000.00, 11, 
 'Jaket hoodie tartan edisi Graphite abu-abu gelap kehitaman. Siluet relax fit fleksibel, saku tersembunyi, dan tahan angin ringan.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-10-graphite-plaid.jpg', 1),

(11, 1, 'SAVITAR STUDIOS | IVORY PLAID JACKET', 'savitar-studios-ivory-plaid-jacket', 300000.00, 6, 
 'Jaket hoodie motif tartan Ivory krem muda dengan garis kotak hitam kontras. Desain hood bisa diatur dan tali serut kokoh.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-11-ivory-plaid.jpg', 1),

(12, 1, 'SAVITAR STUDIOS | Worldwide Collegiate Tracksuit Set', 'savitar-studios-worldwide-collegiate-tracksuit', 349000.00, 5, 
 'Setelan tracksuit hoodie & jogger pants cokelat earth tone dengan bordir Worldwide Collegiate penuh. Siluet santai untuk tampilan streetwear sehari-hari.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-12-worldwide-tracksuit.jpg', 1),

(13, 6, 'SAVITAR STUDIOS | PLAID SHORT BOXER', 'savitar-studios-plaid-short-boxer', 55000.00, 30, 
 'Celana pendek boxer santai motif tartan plaid katun poplin adem. Pinggang elastis nyaman untuk outfit santai di rumah maupun skena nongkrong.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-13-plaid-short-boxer.jpg', 1),

(14, 2, 'SAVITAR STUDIOS | Essential Boxy Hoodie', 'savitar-studios-essential-boxy-hoodie', 270000.00, 0, 
 'Hoodie hitam pullover dengan grafis monogram oval SVTR di dada tengah. Koleksi archive terbatas, habis terjual di drop resmi.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-14-essential-boxy-hoodie.jpg', 1),

(15, 1, 'SAVITAR STUDIOS | Workshirt Boxy Crop Iron Cross', 'savitar-studios-workshirt-boxy-crop-iron-cross', 155000.00, 0, 
 'Kemeja kerja lengan pendek boxy crop dengan grafis bordir Iron Cross gothic di punggung dan saku depan ganda.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-15-workshirt-iron-cross.jpg', 1),

(16, 5, 'SAVITAR STUDIOS | Double Knee Pants Camo', 'savitar-studios-double-knee-pants-camo', 235000.00, 0, 
 'Celana panjang tactical double knee dengan corak kamuflase abu-abu malam. Jahitan penguat tiga baris dan kancing logam bermerek.', 
 'https://shopee.co.id/shop/1524620975', 'assets/products/prod-16-double-knee-camo.jpg', 1);

-- ------------------------------------------------------------------------------
-- 8. View: Low Stock Monitor (< 5 unit)
-- ------------------------------------------------------------------------------
CREATE OR REPLACE VIEW `view_low_stock_alerts` AS
SELECT 
    p.id,
    p.name,
    c.name AS category_name,
    p.stock,
    p.price,
    CASE 
        WHEN p.stock = 0 THEN 'OUT_OF_STOCK'
        WHEN p.stock <= 5 THEN 'CRITICAL_LOW'
        ELSE 'AVAILABLE'
    END AS stock_status,
    p.updated_at
FROM `products` p
JOIN `categories` c ON p.category_id = c.id
WHERE p.stock <= 5;
