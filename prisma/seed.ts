import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

function createWatch() {
  return {};
}

async function main() {
  let size = 10;
  for (let i = 0; i < size; i++) {
    await prisma.watch.create({
      data: {
        name: faker.company.buzzPhrase(),
        description: faker.company.buzzPhrase(),
        price: +faker.finance.amount(),
        images: [
          faker.image.avatarGitHub(),
          faker.image.avatarGitHub(),
          faker.image.avatarGitHub(),
        ],
        watchBrandId: 1,
        watchCategoryId: 1,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
