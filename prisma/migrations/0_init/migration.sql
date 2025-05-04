-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'RECRUITMENT', 'PROCESSING', 'MANAGEMENT');

-- CreateEnum
CREATE TYPE "JobOrderStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'CLOSED');

-- CreateEnum
CREATE TYPE "VisaStatus" AS ENUM ('BLANK', 'ASSIGNED', 'ACTIVE', 'EXPIRED', 'REVOKED');

-- CreateEnum
CREATE TYPE "PermissionSubjectType" AS ENUM ('USER', 'ROLE');

-- CreateEnum
CREATE TYPE "PermissionEffect" AS ENUM ('ALLOW', 'DENY');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "primaryContact" TEXT NOT NULL,
    "areaCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_orders" (
    "id" TEXT NOT NULL,
    "employer" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "headcount" INTEGER NOT NULL,
    "location" JSONB NOT NULL,
    "status" "JobOrderStatus" NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visas" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "issuedBy" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "status" "VisaStatus" NOT NULL,
    "jobOrderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applicants" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "areaCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "resumeURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "applicants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "passports" (
    "id" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "issuedBy" TEXT NOT NULL,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "passportURL" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "passports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "jobOrderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object_permissions" (
    "id" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,
    "subject_ref_id" TEXT NOT NULL,
    "subject_type" "PermissionSubjectType" NOT NULL,
    "object_ref_id" TEXT NOT NULL,
    "effect" "PermissionEffect" NOT NULL DEFAULT 'ALLOW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "object_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_name_key" ON "clients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE INDEX "clients_name_email_primaryContact_phoneNumber_idx" ON "clients"("name", "email", "primaryContact", "phoneNumber");

-- CreateIndex
CREATE INDEX "job_orders_employer_position_idx" ON "job_orders"("employer", "position");

-- CreateIndex
CREATE INDEX "job_orders_clientId_idx" ON "job_orders"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "visas_identifier_key" ON "visas"("identifier");

-- CreateIndex
CREATE INDEX "visas_identifier_idx" ON "visas"("identifier");

-- CreateIndex
CREATE INDEX "visas_validUntil_idx" ON "visas"("validUntil");

-- CreateIndex
CREATE INDEX "visas_position_idx" ON "visas"("position");

-- CreateIndex
CREATE UNIQUE INDEX "applicants_email_key" ON "applicants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "applicants_password_key" ON "applicants"("password");

-- CreateIndex
CREATE UNIQUE INDEX "applicants_phoneNumber_key" ON "applicants"("phoneNumber");

-- CreateIndex
CREATE INDEX "applicants_firstname_idx" ON "applicants"("firstname");

-- CreateIndex
CREATE INDEX "applicants_lastname_idx" ON "applicants"("lastname");

-- CreateIndex
CREATE INDEX "applicants_email_idx" ON "applicants"("email");

-- CreateIndex
CREATE INDEX "applicants_phoneNumber_idx" ON "applicants"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "passports_passportNumber_key" ON "passports"("passportNumber");

-- CreateIndex
CREATE UNIQUE INDEX "passports_applicantId_key" ON "passports"("applicantId");

-- CreateIndex
CREATE INDEX "passports_passportNumber_idx" ON "passports"("passportNumber");

-- CreateIndex
CREATE UNIQUE INDEX "applications_applicantId_jobOrderId_key" ON "applications"("applicantId", "jobOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_key" ON "permissions"("name");

-- CreateIndex
CREATE INDEX "object_permissions_permissionId_idx" ON "object_permissions"("permissionId");

-- CreateIndex
CREATE UNIQUE INDEX "object_permissions_subject_ref_id_subject_type_object_ref_i_key" ON "object_permissions"("subject_ref_id", "subject_type", "object_ref_id", "permissionId");

-- AddForeignKey
ALTER TABLE "job_orders" ADD CONSTRAINT "job_orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visas" ADD CONSTRAINT "visas_jobOrderId_fkey" FOREIGN KEY ("jobOrderId") REFERENCES "job_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passports" ADD CONSTRAINT "passports_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "applicants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_jobOrderId_fkey" FOREIGN KEY ("jobOrderId") REFERENCES "job_orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "object_permissions" ADD CONSTRAINT "object_permissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

