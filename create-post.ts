import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const post = await prisma.post.create({
        data: {
            title: 'Hello World from author 2',
            content: 'This is a draft',
            //published: false,
            authorId: 2
        }
    })
    console.log(post)
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