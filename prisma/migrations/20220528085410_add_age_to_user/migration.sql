-- AlterTable
ALTER TABLE `User` ADD COLUMN `age` INTEGER NULL,
    MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP;