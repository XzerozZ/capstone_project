/*
  Warnings:

  - You are about to drop the `digitalwal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "digitalwal" DROP CONSTRAINT "digitalwal_user_id_fkey";

-- DropTable
DROP TABLE "digitalwal";
