-- AlterTable
ALTER TABLE "history" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Considering';

-- CreateTable
CREATE TABLE "job_exp" (
    "job_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "bookmark" (
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "job_exp_job_id_category_id_key" ON "job_exp"("job_id", "category_id");

-- CreateIndex
CREATE UNIQUE INDEX "bookmark_user_id_job_id_key" ON "bookmark"("user_id", "job_id");

-- AddForeignKey
ALTER TABLE "job_exp" ADD CONSTRAINT "job_exp_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_exp" ADD CONSTRAINT "job_exp_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;
