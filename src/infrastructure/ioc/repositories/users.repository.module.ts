import { Module } from '@nestjs/common';
import { UsersRepository } from '../../../application/repositories/users.repository';
import { UsersRepositoryImpl } from '../../../domain/repositories/users.repository-impl';
import { PrismaModule } from '../prisma/prisma.module';

const providers = [{ provide: UsersRepository, useClass: UsersRepositoryImpl }];

@Module({
  imports: [PrismaModule],
  providers,
  exports: providers.map((v) => v.provide),
})
export class UsersRepositoryModule {}
