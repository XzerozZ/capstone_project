-- CreateTable
CREATE TABLE "rating" (
    "rating_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "friendly_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "efficiency_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "accuracy_rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("rating_id")
);

-- CreateTable
CREATE TABLE "contact" (
    "contact_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("contact_id")
);

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
