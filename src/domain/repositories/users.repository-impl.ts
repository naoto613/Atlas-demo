import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../application/repositories/users.repository';
import { SearchUsersInput } from '../../dto/users/search-users.input';
import { CreateOneUserArgs } from '../../infrastructure/prisma/@generated/user/create-one-user.args';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: Readonly<CreateOneUserArgs>): Promise<UserModel> {
    return this.prisma.user.create(input);
  }

  async findMany(
    input: Readonly<SearchUsersInput>,
  ): Promise<UserModel[] | null> {
    const { skip, take, where } = input;
    return this.prisma.user.findMany({
      skip,
      take,
      where: {
        OR: [
          {
            email: { contains: where.email },
          },
          {
            name: { contains: where.name },
          },
          {
            authority: { equals: where.authority },
          },
        ],
      },
      orderBy: {
        email: 'asc',
      },
    });
  }
}
