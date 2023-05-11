import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Data = {
    message: any;
};

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const keepAliveApiSecret = req.headers['x-keep-alive-api-secret'];
    console.log(keepAliveApiSecret);
    console.log(process.env.KEEP_ALIVE_API_SECRET);
    if (keepAliveApiSecret !== process.env.KEEP_ALIVE_API_SECRET) {
        return res.status(403).json({
            message: {
                error: 'Unauthorized'
            }
        });
    }

    await prisma.keepAlive.create({ data: {} });

    return res.status(200);
}
