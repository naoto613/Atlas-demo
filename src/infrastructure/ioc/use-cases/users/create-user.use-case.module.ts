import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/users/create-user.use-case';
import { UsersRepositoryModule } from 'src/infrastructure/ioc/repositories/users.repository.module';

@Module({
  imports: [UsersRepositoryModule],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase],
})
export class CreateUserUseCaseModule {}
