import { PrismaService } from './prisma.service';

// PrismaClientのインスタンスを1回しか生成しないようにする
const prismaService = new PrismaService();
export default prismaService;
