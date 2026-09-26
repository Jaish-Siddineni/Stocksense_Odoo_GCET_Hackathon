/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `resetOtp` VARCHAR(191) NULL,
    ADD COLUMN `resetOtpExpires` DATETIME(3) NULL,
    ADD COLUMN `role` ENUM('INVENTORY_MANAGER', 'WAREHOUSE_STAFF') NOT NULL DEFAULT 'WAREHOUSE_STAFF',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
