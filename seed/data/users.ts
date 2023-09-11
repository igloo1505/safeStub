// import { encryptPasswordSync } from '../../utils/server/encryption'
// import { Prisma, ROLE } from '@prisma/client'

// const dummyUsers: Prisma.UserCreateArgs[] = []

// for (var i = 1; i < 50; i++) {
//     dummyUsers.push({
//         data: {
//             email: `user${i}@gmail.com`,
//             password: "Password123!",
//             role: "USER" as ROLE,
//             personalDetails: {
//                 create: {
//                     name: {
//                         create: {
//                             first: "Dummy",
//                             middle: "User",
//                             last: `User${i}`
//                         }
//                     }
//                 }
//             }
//         }
//     })
// }

// const seedUsers: Prisma.UserCreateArgs[] = [
//     {
//         data: {
//             email: "aiglinski@icloud.com",
//             password: "Password123!",
//             role: "ADMIN" as ROLE,
//             personalDetails: {
//                 create: {
//                     name: {
//                         create: {
//                             first: "Andrew",
//                             middle: "Charles",
//                             last: "Mueller"
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     {
//         data: {
//             email: "aiglinski@gmail.com",
//             password: "Password123!",
//             role: "USER" as ROLE,
//             personalDetails: {
//                 create: {
//                     name: {
//                         create: {
//                             first: "Andrew",
//                             middle: "Charles",
//                             last: "Mueller"
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     ...dummyUsers
// ].map((j) => ({ ...j, data: { ...j.data, password: encryptPasswordSync(j.data.password) } }))


// export default seedUsers
