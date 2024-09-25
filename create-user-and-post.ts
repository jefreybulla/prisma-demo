import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
          name: 'Fred',
          email: 'fred@domain.com',
          posts: {
            create: [
              {
                title: 'Hello World',
                published: true
              },
              {
                title: 'My second post',
                content: 'This is still a draft'
              }
            ],
          },
        },
      })
    console.log(user)
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