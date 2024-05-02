/*
  Warnings:

  - You are about to drop the column `company_id` on the `post` table. All the data in the column will be lost.
  - The primary key for the `rating_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_id` on the `rating_user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `rating_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,job_id]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id1` to the `rating_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id2` to the `rating_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_company_id_fkey";

-- DropForeignKey
ALTER TABLE "rating_user" DROP CONSTRAINT "rating_user_company_id_fkey";

-- DropForeignKey
ALTER TABLE "rating_user" DROP CONSTRAINT "rating_user_user_id_fkey";

-- DropIndex
DROP INDEX "post_company_id_job_id_key";

-- AlterTable
ALTER TABLE "post" DROP COLUMN "company_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "rating_user" DROP CONSTRAINT "rating_user_pkey",
DROP COLUMN "company_id",
DROP COLUMN "user_id",
ADD COLUMN     "user_id1" INTEGER NOT NULL,
ADD COLUMN     "user_id2" INTEGER NOT NULL,
ADD CONSTRAINT "rating_user_pkey" PRIMARY KEY ("user_id1", "user_id2", "job_id");

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "post_user_id_job_id_key" ON "post"("user_id", "job_id");

-- AddForeignKey
ALTER TABLE "rating_user" ADD CONSTRAINT "rating_user_user_id1_fkey" FOREIGN KEY ("user_id1") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_user" ADD CONSTRAINT "rating_user_user_id2_fkey" FOREIGN KEY ("user_id2") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
