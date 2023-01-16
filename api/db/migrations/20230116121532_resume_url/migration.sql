/*
  Warnings:

  - You are about to drop the column `resumeContent` on the `JobApplication` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobApplication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "dateApplied" DATETIME,
    "resumeUrl" TEXT,
    "jobDescription" TEXT,
    "country" TEXT,
    CONSTRAINT "JobApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "JobApplication_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobApplication" ("companyId", "country", "dateApplied", "id", "jobDescription", "position", "status", "userId") SELECT "companyId", "country", "dateApplied", "id", "jobDescription", "position", "status", "userId" FROM "JobApplication";
DROP TABLE "JobApplication";
ALTER TABLE "new_JobApplication" RENAME TO "JobApplication";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
