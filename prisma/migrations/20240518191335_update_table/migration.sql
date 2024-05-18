/*
  Warnings:

  - You are about to drop the column `account_id` on the `digitalwal` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "digitalwal_account_id_key";

-- AlterTable
ALTER TABLE "digitalwal" DROP COLUMN "account_id";
