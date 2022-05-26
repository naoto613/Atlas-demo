import prisma from './prisma';

/**
 * 全てのテーブルのデータを削除する
 */
export const cleanupDatabase = async (): Promise<void> => {
  // relationを加味して順番に削除
  await prisma.user.deleteMany();

  prisma.$disconnect();
};
