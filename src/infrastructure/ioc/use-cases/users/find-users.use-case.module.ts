import { Module } from '@nestjs/common';
import { FindUsersUseCase } from '../../../../application/use-cases/users/find-users.use-case';
import { UsersRepositoryModule } from '../../repositories/users.repository.module';

@Module({
  imports: [UsersRepositoryModule],
  providers: [FindUsersUseCase],
  exports: [FindUsersUseCase],
})
export class FindUsersUseCaseModule {}
