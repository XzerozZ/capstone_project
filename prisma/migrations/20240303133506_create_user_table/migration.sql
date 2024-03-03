-- CreateTable
CREATE TABLE "job" (
    "job_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "type" VARCHAR(9) NOT NULL,
    "posted_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submitted_date" TIMESTAMP(3),
    "status" VARCHAR(6) NOT NULL DEFAULT 'Open',

    CONSTRAINT "job_pkey" PRIMARY KEY ("job_id")
);

-- CreateTable
CREATE TABLE "history" (
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "history_user_id_job_id_key" ON "history"("user_id", "job_id");

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;
