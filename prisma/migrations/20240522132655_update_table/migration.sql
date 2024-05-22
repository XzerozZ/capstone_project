/*
  Warnings:

  - You are about to drop the `bank_acc` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bank_acc" DROP CONSTRAINT "bank_acc_user_id_fkey";

-- DropTable
DROP TABLE "bank_acc";
