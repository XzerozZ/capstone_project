/*
  Warnings:

  - You are about to drop the column `trans_id` on the `order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[order_id]` on the table `order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order_id` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "order_trans_id_key";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "trans_id",
ADD COLUMN     "order_id" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "order_order_id_key" ON "order"("order_id");
