
CREATE TABLE clients (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,  
    "name" VARCHAR(255) NOT NULL,
    "photo" TEXT NOT NULL,
    "is_enabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
)