-- CreateTable
CREATE TABLE "digitalwal" (
    "wal_id" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "digitalwal_wal_id_key" ON "digitalwal"("wal_id");

-- AddForeignKey
ALTER TABLE "digitalwal" ADD CONSTRAINT "digitalwal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
