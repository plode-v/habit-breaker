import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@clerk/nextjs";

export const withSession = async (req: NextApiRequest, res: NextApiResponse) => {
    const { userId } = auth();

    if (!userId) {
        return res.status(401).json({ error: "unauthorized" });
    }

    const habits = await prisma.habit.findMany({
        where: {
            userId
        }
    })
}