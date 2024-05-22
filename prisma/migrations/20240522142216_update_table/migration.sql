-- CreateTable
CREATE TABLE "bank_acc" (
    "acc_id" VARCHAR(255) NOT NULL,
    "rep_id" VARCHAR(16) NOT NULL,
    "user_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "bank_acc_acc_id_key" ON "bank_acc"("acc_id");

-- AddForeignKey
ALTER TABLE "bank_acc" ADD CONSTRAINT "bank_acc_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
