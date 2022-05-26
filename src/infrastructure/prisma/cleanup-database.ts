import { PrismaClient } from '@prisma/client';

/**
 * 全てのテーブルのデータを削除する
 */
export const cleanupDatabase = async (): Promise<void> => {
  const prisma = new PrismaClient();

  // relationを加味して順番に削除
  await prisma.user.deleteMany();

  prisma.$disconnect();
};
