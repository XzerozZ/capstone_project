/*
  Warnings:

  - You are about to drop the column `job_id` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_job_id_fkey";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "job_id";
