import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const prismaMigratePosts = await prisma.post.findMany({
        where: { title: { contains: "Hello" } },
      })
    console.log(prismaMigratePosts);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })