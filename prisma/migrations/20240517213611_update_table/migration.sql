/*
  Warnings:

  - Added the required column `mass` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ADD COLUMN     "product_mass" INTEGER;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "mass" INTEGER NOT NULL;
