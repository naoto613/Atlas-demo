import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/application/repositories/users.repository';
import { UserModel } from 'src/domain/models/user.model';
import { SearchUsersInput } from 'src/dto/users/search-users.input';

@Injectable()
export class FindUsersUseCase {
  constructor(private readonly repository: UsersRepository) {}

  async execute(
    input: Readonly<SearchUsersInput>,
  ): Promise<UserModel[] | null> {
    return this.repository.findMany(input);
  }
}
