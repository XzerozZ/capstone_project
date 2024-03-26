/*
  Warnings:

  - The primary key for the `company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employer_id` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `employer_id` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `employer_id` on the `rating` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[company_id,job_id]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `company_id` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_employer_id_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_employer_id_fkey";

-- DropIndex
DROP INDEX "post_employer_id_job_id_key";

-- AlterTable
ALTER TABLE "company" DROP CONSTRAINT "company_pkey",
DROP COLUMN "employer_id",
ADD COLUMN     "company_id" SERIAL NOT NULL,
ADD CONSTRAINT "company_pkey" PRIMARY KEY ("company_id");

-- AlterTable
ALTER TABLE "post" DROP COLUMN "employer_id",
ADD COLUMN     "company_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "rating" DROP COLUMN "employer_id",
ADD COLUMN     "company_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "post_company_id_job_id_key" ON "post"("company_id", "job_id");

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;
