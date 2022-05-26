import { PrismaService } from './prisma.service';

// PrismaClientのインスタンスを1回しか生成しないようにする
const prisma = new PrismaService();
export default prisma;
