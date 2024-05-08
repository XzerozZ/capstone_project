/*
  Warnings:

  - You are about to drop the column `rating` on the `rating_com` table. All the data in the column will be lost.
  - You are about to alter the column `friendly_rating` on the `rating_user` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `efficiency_rating` on the `rating_user` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `accuracy_rating` on the `rating_user` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "rating_com" DROP COLUMN "rating",
ADD COLUMN     "friendly_rating" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "value_rating" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "rating_user" ALTER COLUMN "friendly_rating" SET DEFAULT 0,
ALTER COLUMN "friendly_rating" SET DATA TYPE INTEGER,
ALTER COLUMN "efficiency_rating" SET DEFAULT 0,
ALTER COLUMN "efficiency_rating" SET DATA TYPE INTEGER,
ALTER COLUMN "accuracy_rating" SET DEFAULT 0,
ALTER COLUMN "accuracy_rating" SET DATA TYPE INTEGER;
