-- CreateTable
CREATE TABLE "transaction" (
    "order_id" VARCHAR(255) NOT NULL,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "transaction_order_id_key" ON "transaction"("order_id");

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id1_fkey" FOREIGN KEY ("user_id1") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_user_id2_fkey" FOREIGN KEY ("user_id2") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
