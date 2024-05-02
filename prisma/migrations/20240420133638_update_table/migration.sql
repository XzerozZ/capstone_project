-- DropIndex
DROP INDEX "bookmark_user_id_job_id_key";

-- DropIndex
DROP INDEX "history_user_id_job_id_key";

-- AlterTable
ALTER TABLE "history" ADD COLUMN     "history_id" SERIAL NOT NULL,
ADD CONSTRAINT "history_pkey" PRIMARY KEY ("history_id");
