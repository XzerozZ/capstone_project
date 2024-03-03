-- CreateTable
CREATE TABLE "career" (
    "career_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "career_pkey" PRIMARY KEY ("career_id")
);

-- CreateTable
CREATE TABLE "user_career" (
    "user_id" INTEGER NOT NULL,
    "career_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_career_user_id_career_id_key" ON "user_career"("user_id", "career_id");

-- AddForeignKey
ALTER TABLE "user_career" ADD CONSTRAINT "user_career_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_career" ADD CONSTRAINT "user_career_career_id_fkey" FOREIGN KEY ("career_id") REFERENCES "career"("career_id") ON DELETE RESTRICT ON UPDATE CASCADE;
