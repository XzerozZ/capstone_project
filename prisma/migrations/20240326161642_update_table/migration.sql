/*
  Warnings:

  - You are about to drop the `employer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_employer_id_fkey";

-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_employer_id_fkey";

-- DropTable
DROP TABLE "employer";

-- CreateTable
CREATE TABLE "company" (
    "employer_id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "image" TEXT,
    "phone_number" VARCHAR(12) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(20) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("employer_id")
);

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "company"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "company"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
