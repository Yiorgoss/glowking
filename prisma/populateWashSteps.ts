import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    success: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {}
