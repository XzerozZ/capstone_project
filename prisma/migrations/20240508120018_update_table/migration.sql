/*
  Warnings:

  - A unique constraint covering the columns `[OTP]` on the table `OTP` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OTP_OTP_key" ON "OTP"("OTP");
