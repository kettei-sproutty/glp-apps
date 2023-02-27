import { PrismaClient, type QuestionType } from '@prisma/client'

const prisma = new PrismaClient()

const DEFAULT_USER = {
  avatar: null,
  username: 'User 2',
}

const DEFAULT_QUESTION = {
  availabilityDate: new Date(),
  type: 'OPEN_ANSWER' as QuestionType,
  text: 'Question 1',
}

const DEFAULT_ANSWER_PUBLIC = {
  anonymous: false,
  text: 'Answer Public 1',
}

const DEFAULT_ANSWER_ANONYMOUS = {
  anonymous: true,
  text: 'Answer Anonymous 1',
}

async function main() {
  // Connect the client
  await prisma.$connect()

  // Create a user
  const user = await prisma.user.create({
    data: DEFAULT_USER,
  })

  // Create a question
  const question = await prisma.question.create({
    data: DEFAULT_QUESTION,
  })

  // Create an answer
  const answerPublic = await prisma.answer.create({
    data: {
      ...DEFAULT_ANSWER_PUBLIC,
      question: {
        connect: {
          id: question.id,
        },
      },
      author: {
        connect: {
          id: user.id,
        },
      },
    },
  })

  // Create an anonymous answer
  const answerAnonymous = await prisma.answer.create({
    data: {
      ...DEFAULT_ANSWER_ANONYMOUS,
      question: {
        connect: {
          id: question.id,
        },
      },
      author: {
        connect: {
          id: user.id,
        },
      },
    },
  })

  console.log({ user, question, answerPublic, answerAnonymous })
}

main()
  .then(async () => {
    console.log('Done')
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
