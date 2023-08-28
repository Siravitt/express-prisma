const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.addUser = async (req: { body: Object; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Object): void; new(): any; }; }; }, next: any) => {
    try {
        console.log(req.body);

        await prisma.user.create({ data: req.body })

        res.status(201).json({ message: "Create user success" });
    } catch (err) {
        await prisma.$disconnect()
        next(err);
    } finally {
        await prisma.$disconnect()
    }
}
