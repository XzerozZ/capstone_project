-- CreateTable
CREATE TABLE "transfer" (
    "transfer_id" VARCHAR(255) NOT NULL,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "transfer_transfer_id_key" ON "transfer"("transfer_id");

-- CreateIndex
CREATE UNIQUE INDEX "transfer_session_id_key" ON "transfer"("session_id");

-- AddForeignKey
ALTER TABLE "transfer" ADD CONSTRAINT "transfer_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfer" ADD CONSTRAINT "transfer_user_id1_fkey" FOREIGN KEY ("user_id1") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfer" ADD CONSTRAINT "transfer_user_id2_fkey" FOREIGN KEY ("user_id2") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
