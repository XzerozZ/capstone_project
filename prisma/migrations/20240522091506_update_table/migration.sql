-- CreateTable
CREATE TABLE "wallet" (
    "wal_id" VARCHAR(255) NOT NULL,
    "card_number" VARCHAR(16) NOT NULL,
    "user_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "wallet_wal_id_key" ON "wallet"("wal_id");

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
