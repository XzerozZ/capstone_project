/*
  Warnings:

  - Added the required column `job_id` to the `rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rating" ADD COLUMN     "job_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;
