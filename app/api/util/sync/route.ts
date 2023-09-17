// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { createEdgeRouter } from "next-connect";
// import { prisma } from "#/db/db";
// import nfl from "#/seed/data/static/games/fromAPI.json"
// import { redirect } from "next/dist/server/api-utils";


// interface RequestContext {
//     // params: {
//     //     id: string
//     // }
// }

// const router = createEdgeRouter<NextRequest, RequestContext>();


// router
//     // middleware
//     // .use(async (req, event, next) => {
//     //   const start = Date.now();
//     //   await next(); // call next in chain
//     //   const end = Date.now();
//     //   console.log(`Request took ${end - start}ms`);
//     // })

//     .get(async (req, ctx) => {
//         try {
//             const _teams = await prisma.team.findMany({
//                 // where: {
//                 //     homeArenaId: null
//                 // }
//             })
//             let teams: (typeof _teams[number] & { arena: any })[] = []
//             for (const team of _teams) {
//                 let t = team as typeof teams[0]
//                 let _arena = nfl.response.find((r) => Boolean(r.teams.home.name === team.displayName && r.game.venue.city !== "London"))
//                 let name = _arena?.game.venue.name
//                 if (name) {
//                     let arena = await prisma.arena.findFirst({
//                         where: {
//                             name: name
//                         }
//                     })
//                     let T = await prisma.team.findFirst({
//                         where: {
//                             displayName: team.displayName
//                         },
//                         select: {
//                             id: true
//                         }
//                     })
//                     if (T?.id && arena?.id) {
//                         await prisma.team.update({
//                             where: {
//                                 id: T.id
//                             },
//                             data: {
//                                 homeArena: {
//                                     connect: {
//                                         id: arena.id
//                                     }
//                                 }
//                             }
//                         })
//                     }
//                 } else {
//                     console.log(`No name found for ${team.name} and ${name}`)
//                 }
//                 teams.push(t)
//             }
//             return new NextResponse(JSON.stringify({ teams }));
//         } catch (err) {
//             console.error(err)
//             return new NextResponse(JSON.stringify({ success: false }))
//         }
//     })


// export async function GET(request: NextRequest, ctx: RequestContext) {
//     return router.run(request, ctx);
// }
