/*
  Warnings:

  - A unique constraint covering the columns `[account_id]` on the table `digitalwal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account_id` to the `digitalwal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "digitalwal" ADD COLUMN     "account_id" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "digitalwal_account_id_key" ON "digitalwal"("account_id");
