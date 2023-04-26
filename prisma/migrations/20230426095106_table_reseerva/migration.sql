-- CreateTable
CREATE TABLE "Reserva" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cartao" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
