import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { UsersResolverModule } from './infrastructure/ioc/resolvers/users.resolver.module';
import { LoggingPlugin } from './infrastructure/plugins/logging.plugin';
import { ComplexityPlugin } from './infrastructure/plugins/complexity.plugin';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        'src/infrastructure/prisma/schema.gql',
      ),
    }),
    UsersResolverModule,
  ],
  providers: [LoggingPlugin, ComplexityPlugin],
})
export class AppModule {}
