/*
  Warnings:

  - The primary key for the `rating_com` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `rating_user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "rating_com" DROP CONSTRAINT "rating_com_pkey",
ADD CONSTRAINT "rating_com_pkey" PRIMARY KEY ("rating_id");

-- AlterTable
ALTER TABLE "rating_user" DROP CONSTRAINT "rating_user_pkey",
ADD CONSTRAINT "rating_user_pkey" PRIMARY KEY ("rating_id");
