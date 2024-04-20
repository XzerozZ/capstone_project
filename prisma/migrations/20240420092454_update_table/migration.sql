/*
  Warnings:

  - The primary key for the `rating_com` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_id` on the `rating_com` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `rating_com` table. All the data in the column will be lost.
  - You are about to drop the `company` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id1` to the `rating_com` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id2` to the `rating_com` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rating_com" DROP CONSTRAINT "rating_com_company_id_fkey";

-- DropForeignKey
ALTER TABLE "rating_com" DROP CONSTRAINT "rating_com_user_id_fkey";

-- AlterTable
ALTER TABLE "rating_com" DROP CONSTRAINT "rating_com_pkey",
DROP COLUMN "company_id",
DROP COLUMN "user_id",
ADD COLUMN     "user_id1" INTEGER NOT NULL,
ADD COLUMN     "user_id2" INTEGER NOT NULL,
ADD CONSTRAINT "rating_com_pkey" PRIMARY KEY ("user_id1", "user_id2", "job_id");

-- DropTable
DROP TABLE "company";

-- AddForeignKey
ALTER TABLE "rating_com" ADD CONSTRAINT "rating_com_user_id1_fkey" FOREIGN KEY ("user_id1") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_com" ADD CONSTRAINT "rating_com_user_id2_fkey" FOREIGN KEY ("user_id2") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
