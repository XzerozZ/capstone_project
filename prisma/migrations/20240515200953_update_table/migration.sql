-- CreateTable
CREATE TABLE "order" (
    "trans_id" VARCHAR(255) NOT NULL,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "order_trans_id_key" ON "order"("trans_id");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_user_id1_fkey" FOREIGN KEY ("user_id1") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_user_id2_fkey" FOREIGN KEY ("user_id2") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
