/*
  Warnings:

  - You are about to drop the column `order_id` on the `transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[trans_id]` on the table `transaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `trans_id` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "transaction_order_id_key";

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "order_id",
ADD COLUMN     "trans_id" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "transaction_trans_id_key" ON "transaction"("trans_id");
