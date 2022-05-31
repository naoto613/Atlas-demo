import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/application/repositories/users.repository';
import { UserModel } from 'src/domain/models/user.model';
import { CreateOneUserArgs } from 'src/infrastructure/prisma/@generated/user/create-one-user.args';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly repository: UsersRepository) {}

  async execute(input: Readonly<CreateOneUserArgs>): Promise<UserModel> {
    return this.repository.create(input);
  }
}
