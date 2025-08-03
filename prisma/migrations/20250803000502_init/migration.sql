-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('TODO', 'DONE', 'IN_PROGRESS', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'TODO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
