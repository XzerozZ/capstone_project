-- CreateTable
CREATE TABLE "rep" (
    "rep_id" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "brand" VARCHAR(20) NOT NULL,
    "card_number" VARCHAR(16) NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "rep_rep_id_key" ON "rep"("rep_id");

-- AddForeignKey
ALTER TABLE "rep" ADD CONSTRAINT "rep_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
