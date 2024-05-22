/*
  Warnings:

  - You are about to drop the column `card_id` on the `wallet` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "wallet_card_id_key";

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "card_id";
