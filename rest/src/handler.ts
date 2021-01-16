import {Request, Response} from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getRandomId = (count: number) => {
  return Math.floor(Math.random() * Math.floor(count) + 1);
}

const randomCat = async (req: Request, res: Response) => {
  res.send(await prisma.cat.findUnique(
    { where: { id: getRandomId(await prisma.cat.count())} }
  ))
}

const idCat = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  if(id > await prisma.cat.count() || id < 1) { res.sendStatus(400); return }
  res.send(await prisma.cat.findUnique({where: {id}}))
}

const root = async (req: Request, res: Response) => {
  res.sendStatus(400)
}

export { randomCat, idCat, root }