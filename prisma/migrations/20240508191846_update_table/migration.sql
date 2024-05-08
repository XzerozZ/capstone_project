/*
  Warnings:

  - Added the required column `comment` to the `rating_com` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `rating_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rating_com" ADD COLUMN     "comment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "rating_user" ADD COLUMN     "comment" TEXT NOT NULL;
