/*
  Warnings:

  - You are about to drop the `rating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_company_id_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_job_id_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_user_id_fkey";

-- DropTable
DROP TABLE "rating";

-- CreateTable
CREATE TABLE "rating_user" (
    "rating_id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "friendly_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "efficiency_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "accuracy_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "rating_user_pkey" PRIMARY KEY ("rating_id")
);

-- CreateTable
CREATE TABLE "rating_com" (
    "rating_id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "rating_com_pkey" PRIMARY KEY ("rating_id")
);

-- AddForeignKey
ALTER TABLE "rating_user" ADD CONSTRAINT "rating_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_user" ADD CONSTRAINT "rating_user_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_user" ADD CONSTRAINT "rating_user_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_com" ADD CONSTRAINT "rating_com_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_com" ADD CONSTRAINT "rating_com_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_com" ADD CONSTRAINT "rating_com_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;
