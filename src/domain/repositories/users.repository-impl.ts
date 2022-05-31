import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/application/repositories/users.repository';
import { UserModel } from 'src/domain/models/user.model';
import { SearchUsersInput } from 'src/dto/users/search-users.input';
import { CreateOneUserArgs } from 'src/infrastructure/prisma/@generated/user/create-one-user.args';
import prismaService from 'src/infrastructure/prisma/prisma-service';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  async create(input: Readonly<CreateOneUserArgs>): Promise<UserModel> {
    return prismaService.user.create(input);
  }

  async findMany(
    input: Readonly<SearchUsersInput>,
  ): Promise<UserModel[] | null> {
    const { skip, take, searchInput } = input;
    const where =
      searchInput !== null
        ? {
            OR: [
              {
                email: { contains: searchInput.email },
              },
              {
                name: { contains: searchInput.name },
              },
              {
                authority: { equals: searchInput.authority },
              },
            ],
          }
        : undefined;
    return prismaService.user.findMany({
      skip,
      take,
      where,
      orderBy: {
        email: 'asc',
      },
    });
  }
}
