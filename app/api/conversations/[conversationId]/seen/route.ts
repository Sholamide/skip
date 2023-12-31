import { getCurrentUser } from '@/app/actions/getCurrentUser'
import { NextResponse } from 'next/server'
import prisma from '@/app/libs/prismadb'

interface IParams {
    conversationId?: string
    request: Request
}

export async function POST(request: Request, { params }: { params: IParams }) {
    try {
        const currentUser = await getCurrentUser();
        const { conversationId } = params

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse('Unauthorized', { status: 401 })
        }


        //find existing conversation
        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            }, include: {
                messages: {
                    include: {
                        seen: true
                    }
                },
                users: true
            }
        });

        if (!conversation) {
            return new NextResponse('Invalid ID', { status: 400 })
        }

        //find last message using existing conversation
        const lastMessage = conversation.messages[conversation.messages.length - 1]

        if (!lastMessage) {
            return NextResponse.json(conversation)
        }

        //update seen of last message
        const updatedMessage = await prisma.message.update({
            where: {
                id: lastMessage.id
            },
            include: {
                sender: true,
                seen: true
            },
            data: {
                seen: {
                    connect: {
                        id: currentUser.id
                    }
                }
            }
        })

        return NextResponse.json(updatedMessage)
    } catch (error: any) {
        return new NextResponse('Internal Error', { status: 500 })
    }
} 