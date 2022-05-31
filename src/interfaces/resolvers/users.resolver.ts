import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user.use-case';
import { FindUsersUseCase } from 'src/application/use-cases/users/find-users.use-case';
import { UserModel } from 'src/domain/models/user.model';
import { SearchUsersInput } from 'src/dto/users/search-users.input';
import { CreateOneUserArgs } from 'src/infrastructure/prisma/@generated/user/create-one-user.args';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(
    private readonly findUsersUseCase: FindUsersUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Query(() => [UserModel], { nullable: true })
  async users(@Args() input: SearchUsersInput) {
    return this.findUsersUseCase.execute(input);
  }

  @Mutation(() => UserModel)
  async createUser(@Args() input: CreateOneUserArgs) {
    return this.createUserUseCase.execute(input);
  }
}
