import { UserModel } from 'src/domain/models/user.model';
import { SearchUsersInput } from 'src/dto/users/search-users.input';
import { CreateOneUserArgs } from 'src/infrastructure/prisma/@generated/user/create-one-user.args';

export abstract class UsersRepository {
  abstract create(input: Readonly<CreateOneUserArgs>): Promise<UserModel>;
  abstract findMany(
    input: Readonly<SearchUsersInput>,
  ): Promise<UserModel[] | null>;
}
