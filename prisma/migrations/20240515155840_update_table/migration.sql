/*
  Warnings:

  - The primary key for the `transaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[trans_id]` on the table `transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_pkey",
ALTER COLUMN "trans_id" DROP DEFAULT,
ALTER COLUMN "trans_id" SET DATA TYPE VARCHAR(255);
DROP SEQUENCE "transaction_trans_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "transaction_trans_id_key" ON "transaction"("trans_id");
