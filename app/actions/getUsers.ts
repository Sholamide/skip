import prisma from '@/app/libs/prismadb'

import getSession from './getSession'


export const getAllUsers = async () => {
   
        const session = await getSession();

        if (!session?.user?.email) {
            return []
        }
        try {

        const AllUsers = await prisma.user.findMany({
            orderBy:{
                createdAt:'desc'
            },
            where:{
                NOT:{
                    email:session.user.email
                }
            }
        });

        return AllUsers;
    } catch (error: any) {
        return null
    }
}