import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/application/repositories/users.repository';
import { UsersRepositoryImpl } from 'src/domain/repositories/users.repository-impl';

const providers = [{ provide: UsersRepository, useClass: UsersRepositoryImpl }];

@Module({
  providers,
  exports: providers.map((v) => v.provide),
})
export class UsersRepositoryModule {}
