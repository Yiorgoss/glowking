import { PrismaClient, Prisma } from '@prisma/client';

import {
    categories,
    subtypes,
    categorySubtypes,
    packages,
    subtypePackages,
    extras,
    packageExtras
} from './data';
const prisma = new PrismaClient();

async function resetDB() {
    console.log('Deleting Records...');
    await prisma.category.deleteMany();
    await prisma.subtype.deleteMany();
    await prisma.categorySubtype.deleteMany();
    await prisma.package.deleteMany();
    await prisma.subtypePackage.deleteMany();
    await prisma.extra.deleteMany();
    await prisma.packageExtra.deleteMany();

    console.log('DataBase Empty');

    console.log('Reseting Auto Increment');
    await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE Subtype AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE CategorySubtype AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE Package AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE TypePackage AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE Extra AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE PackageExtra  AUTO_INCREMENT = 1`;

    console.log('Finished reseting count');
}
async function main() {
    console.log('Seeding Starting ... ');

    //await resetDB();

    await prisma.category.createMany({
        data: categories
    });

    await prisma.subtype.createMany({
        data: subtypes
    });

    await prisma.categorySubtype.createMany({
        data: categorySubtypes
    });

    await prisma.package.createMany({
        data: packages
    });

    await prisma.subtypePackage.createMany({
        data: subtypePackages
    });
    await prisma.extra.createMany({
        data: extras
    });
    await prisma.packageExtra.createMany({
        data: packageExtras
    });

    console.log('Finished Seeding');
}

main();
