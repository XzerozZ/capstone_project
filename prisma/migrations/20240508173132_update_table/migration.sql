/*
  Warnings:

  - A unique constraint covering the columns `[id_card]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_id_card_key" ON "user"("id_card");
