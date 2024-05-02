/*
  Warnings:

  - You are about to drop the column `first_name` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `company` table. All the data in the column will be lost.
  - Added the required column `name` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "username",
ADD COLUMN     "name" VARCHAR(100) NOT NULL;
