import { PrismaClient, Status } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete all existing tasks (optional)
  //   await prisma.task.deleteMany()

  // Create multiple new tasks
  //   await prisma.task.createMany({
  //     data: [
  //       { name: 'Start the project', status: Status.TODO },
  //       { name: 'Set up GraphQL server', status: Status.IN_PROGRESS },
  //       { name: 'Write documentation', status: Status.DONE },
  //       { name: 'Fix bugs', status: Status.REJECTED },
  //       { name: 'Design database schema', status: Status.TODO },
  //       { name: 'Implement authentication', status: Status.IN_PROGRESS },
  //       { name: 'Create API endpoints', status: Status.TODO },
  //       { name: 'Write unit tests', status: Status.TODO },
  //       { name: 'Review code', status: Status.DONE },
  //       { name: 'Deploy to production', status: Status.TODO },
  //       { name: 'Optimize performance', status: Status.TODO },
  //       { name: 'Update dependencies', status: Status.DONE },
  //       { name: 'Set up CI/CD pipeline', status: Status.IN_PROGRESS },
  //       { name: 'Conduct user testing', status: Status.TODO },
  //       { name: 'Prepare release notes', status: Status.TODO },
  //       { name: 'Monitor application logs', status: Status.TODO },
  //     ],
  //   })

  await prisma.user.deleteMany()

  await prisma.user.createMany({
    data: [
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        age: 28,
      },
      {
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        age: 35,
      },
      {
        name: 'Charlie Adams',
        email: 'charlie.adams@example.com',
        age: 24,
      },
      {
        name: 'Diana Miller',
        email: 'diana.miller@example.com',
        age: 31,
      },
      {
        name: 'Ethan Brown',
        email: 'ethan.brown@example.com',
        age: 27,
      },
      {
        name: 'Fiona Wilson',
        email: 'fiona.wilson@example.com',
        age: 29,
      },
      {
        name: 'George Davis',
        email: 'george.davis@example.com',
        age: 38,
      },
      {
        name: 'Hannah Lee',
        email: 'hannah.lee@example.com',
        age: 26,
      },
      {
        name: 'Ivan Garcia',
        email: 'ivan.garcia@example.com',
        age: 33,
      },
      {
        name: 'Julia Martin',
        email: 'julia.martin@example.com',
        age: 30,
      },
    ],
  })
}

main()
  .catch(() => {
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
