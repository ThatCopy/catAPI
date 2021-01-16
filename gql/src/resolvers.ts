import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface arg {
  id: number
}

const getRandomId = (count: number) => {
  return Math.floor(Math.random() * Math.floor(count) + 1);
}

export = {
  Query: {
    cat: async () => await prisma.cat.findUnique(
      { where: { id: getRandomId(await prisma.cat.count())} }
    ),
    catId: async (_parent: any, args: arg) => {
      return await prisma.cat.findUnique(
        { where: {id: args.id} }
      )
    }
  },
};