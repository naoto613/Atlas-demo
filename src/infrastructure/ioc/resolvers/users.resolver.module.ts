import { Module } from '@nestjs/common';
import { CreateUserUseCaseModule } from 'src/infrastructure/ioc/use-cases/users/create-user.use-case.module';
import { FindUsersUseCaseModule } from 'src/infrastructure/ioc/use-cases/users/find-users.use-case.module';
import { UsersResolver } from 'src/interfaces/resolvers/users.resolver';

@Module({
  imports: [CreateUserUseCaseModule, FindUsersUseCaseModule],
  providers: [UsersResolver],
})
export class UsersResolverModule {}
