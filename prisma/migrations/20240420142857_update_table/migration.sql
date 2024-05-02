/*
  Warnings:

  - The primary key for the `history` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `history_id` on the `history` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,job_id]` on the table `history` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "history" DROP CONSTRAINT "history_pkey",
DROP COLUMN "history_id";

-- CreateIndex
CREATE UNIQUE INDEX "history_user_id_job_id_key" ON "history"("user_id", "job_id");
