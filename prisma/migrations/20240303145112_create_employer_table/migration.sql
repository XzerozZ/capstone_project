/*
  Warnings:

  - Added the required column `employer_id` to the `rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rating" ADD COLUMN     "employer_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
