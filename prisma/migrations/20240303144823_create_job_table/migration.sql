-- CreateTable
CREATE TABLE "employer" (
    "employer_id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "image" TEXT NOT NULL,
    "phone_number" VARCHAR(12) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(20) NOT NULL,

    CONSTRAINT "employer_pkey" PRIMARY KEY ("employer_id")
);

-- CreateTable
CREATE TABLE "post" (
    "employer_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "post_employer_id_job_id_key" ON "post"("employer_id", "job_id");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_employer_id_fkey" FOREIGN KEY ("employer_id") REFERENCES "employer"("employer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;
