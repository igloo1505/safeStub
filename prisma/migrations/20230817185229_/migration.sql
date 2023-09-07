/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Arena` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Arena_name_key" ON "Arena"("name");
