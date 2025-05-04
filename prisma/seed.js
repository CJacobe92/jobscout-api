import {prisma} from "../build/src/generated/prisma/index.js"
async function seed() {
  await prisma.permission.createMany({
    data: [
      { name: 'client:read', description: 'Allows reading client information' },
      { name: 'client:create', description: 'Allows creating new clients' },
      { name: 'client:update', description: 'Allows updating client information' },
      { name: 'client:delete', description: 'Allows deleting clients' },
    ],
    skipDuplicates: true, 
  });

  console.log('Client permissions seeded successfully!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });