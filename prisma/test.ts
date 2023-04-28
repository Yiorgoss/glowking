import { PrismaClient } from '@prisma/client';

async function main() {
    const prisma = new PrismaClient();

    const extraPackages = await prisma.$queryRaw`
    SELECT e.id, el.title, el.description, e.imageUrl, e.price, e.time
      FROM Extra e
 LEFT JOIN ExtraEL el
        ON e.extraELId = el.id
 LEFT JOIN PackageExtra pe
        ON e.id = pe.extraId
     WHERE pe.packageId = 2
`

    return extraPackages;
}

const abc = main().then((res) => {
    console.log(JSON.stringify(res, null, 2));
    return res;
});
console.log('=========');
console.log(abc);
console.log('=========');
