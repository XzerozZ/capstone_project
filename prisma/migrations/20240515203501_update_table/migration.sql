/*
  Warnings:

  - Added the required column `session_id` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ADD COLUMN     "session_id" TEXT NOT NULL;
