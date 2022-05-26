import { Module } from '@nestjs/common';
import { UsersResolver } from '../../../interfaces/resolvers/users.resolver';
import { CreateUserUseCaseModule } from '../use-cases/users/create-user.use-case.module';
import { FindUsersUseCaseModule } from '../use-cases/users/find-users.use-case.module';

@Module({
  imports: [CreateUserUseCaseModule, FindUsersUseCaseModule],
  providers: [UsersResolver],
})
export class UsersResolverModule {}
