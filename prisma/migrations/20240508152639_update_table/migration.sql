-- CreateTable
CREATE TABLE "work" (
    "job_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "work_link" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "work_user_id_job_id_key" ON "work"("user_id", "job_id");

-- AddForeignKey
ALTER TABLE "work" ADD CONSTRAINT "work_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work" ADD CONSTRAINT "work_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
