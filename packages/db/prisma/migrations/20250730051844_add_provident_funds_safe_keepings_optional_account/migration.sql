-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "InvestmentType" ADD VALUE 'PROVIDENT_FUNDS';
ALTER TYPE "InvestmentType" ADD VALUE 'SAFE_KEEPINGS';

-- DropForeignKey
ALTER TABLE "Investment" DROP CONSTRAINT "Investment_accountId_fkey";

-- AlterTable
ALTER TABLE "Investment" ALTER COLUMN "accountId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
