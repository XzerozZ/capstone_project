-- AlterTable
ALTER TABLE "bookmark" ADD COLUMN     "book_id" SERIAL NOT NULL,
ADD CONSTRAINT "bookmark_pkey" PRIMARY KEY ("book_id");
