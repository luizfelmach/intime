-- CreateTable
CREATE TABLE "WatchCategory" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "WatchCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchBrand" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "WatchBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "images" TEXT[],
    "videos" TEXT[],
    "watchBrandId" INTEGER NOT NULL,
    "watchCategoryId" INTEGER NOT NULL,

    CONSTRAINT "Watch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Watch" ADD CONSTRAINT "Watch_watchBrandId_fkey" FOREIGN KEY ("watchBrandId") REFERENCES "WatchBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watch" ADD CONSTRAINT "Watch_watchCategoryId_fkey" FOREIGN KEY ("watchCategoryId") REFERENCES "WatchCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
