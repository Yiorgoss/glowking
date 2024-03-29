import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

type Data = {
    data: any;
};

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { table, id, locale } = req.query;
    if (!table || !id) {
        res.status(400).end();
        return;
    }
    const value = Array.isArray(id) ? +id[0] : +id;

    if (typeof value !== 'number') {
        throw new Error('id must be a number');
    }

    //console.log('===========');
    //console.log(req.query);
    //console.log('===========');
    if (table === 'initial') {
        if (locale == 'en') {
            const categories = await prisma.category.findMany({
                where: {}
            });
            res.status(200).end(JSON.stringify(categories));
        } else {
            const categories = await prisma.$queryRaw`
                SELECT c.id, c.hasNext, c.imageUrl, el.title, el.description
                  FROM Category c
             LEFT JOIN CategoryEL el
                    ON c.categoryELId = el.id
`;
            res.status(200).end(JSON.stringify(categories));
        }
    } else if (table === 'category') {
        if (locale == 'en') {
            const subtypeCategories = await prisma.subtype.findMany({
                where: {
                    categories: {
                        some: {
                            categoryId: value
                        }
                    }
                }
            });
            res.status(200).end(JSON.stringify(subtypeCategories));
        } else {
            const subtypeCategories = await prisma.$queryRaw`
                SELECT s.id, s.hasNext, el.title, el.description, s.imageUrl
                  FROM Subtype s
             LEFT JOIN SubtypeEL el
                    ON s.subtypeELId = el.id
             LEFT JOIN CategorySubtype cs
                    ON cs.subtypeId = s.id
                 WHERE cs.categoryId = ${value}
`;
            res.status(200).end(JSON.stringify(subtypeCategories));
        }
    } else if (table === 'subtype') {
        if (locale === 'en') {
            const packageSubtypes = await prisma.package.findMany({
                where: {
                    subtypes: {
                        some: {
                            subtypeId: value
                        }
                    }
                }
            });
            res.status(200).end(JSON.stringify(packageSubtypes));
        } else {
            const packageSubtypes = await prisma.$queryRaw`
                SELECT p.id, p.hasNext, p.tailwindColor, el.title, el.description
                  FROM Package p
             LEFT JOIN PackageEL as el
                    ON p.packageELId = el.id
             LEFT JOIN SubtypePackage sp
                    ON sp.packageId = p.id
                 WHERE sp.subtypeId = ${value}
`;
            res.status(200).end(JSON.stringify(packageSubtypes));
        }
    } else if (table === 'package') {
        if (locale === 'en') {
            const extraPackages = await prisma.extra.findMany({
                where: {
                    packages: {
                        some: {
                            packageId: value
                        }
                    }
                }
            });
            res.status(200).end(JSON.stringify(extraPackages));
        } else {
            const extraPackages = await prisma.$queryRaw`
                SELECT e.id,  e.imageUrl, e.price, e.time, el.title, el.description
                  FROM Extra e
             LEFT JOIN ExtraEL el
                    ON e.extraELId = el.id
             LEFT JOIN PackageExtra pe
                    ON e.id = pe.extraId
                 WHERE pe.packageId = ${value}
`;
            console.log(extraPackages)
            res.status(200).end(JSON.stringify(extraPackages));
        }
    }
    res.status(400).end();
}
