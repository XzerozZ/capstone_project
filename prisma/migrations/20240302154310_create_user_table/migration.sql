-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL DEFAULT '',
    "last_name" VARCHAR(100) NOT NULL DEFAULT '',
    "username" VARCHAR(100) NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT '',
    "phone_number" VARCHAR(12) NOT NULL DEFAULT '',
    "id_card" VARCHAR(17) NOT NULL DEFAULT '',

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);
