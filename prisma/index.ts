const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()



const main = async() => {
    const entry = await prisma.user.create({
      data: {
        name: 'John',
        email: 'john@prisma.com',
        posts: {
          create: { title: 'start up' },
        },
        profile: {
          create: { bio: 'Learning is what i like' },
        },
      },
    })

    // console.log(entry)

    async function main() {
        const post = await prisma.post.update({
          where: { id: 1 },
          data: { published: true },
        })
        console.log(post)
      }
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }

  main()