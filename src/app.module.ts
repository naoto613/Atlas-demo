import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { UsersResolverModule } from 'src/infrastructure/ioc/resolvers/users.resolver.module';
import { LoggingPlugin } from 'src/infrastructure/plugins/logging.plugin';
import { ComplexityPlugin } from 'src/infrastructure/plugins/complexity.plugin';
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(
        process.cwd(),
        'src/infrastructure/prisma/schema.gql',
      ),
      // corsの設定が必要な場合
      // cors: {
      //   origin: process.env.ORIGINS?.split(','),
      //   credentials: true,
      // },
      debug: process.env.NODE_ENV === 'production' ? false : true,
      playground: process.env.NODE_ENV === 'production' ? false : true,
    }),
    UsersResolverModule,
  ],
  providers: [LoggingPlugin, ComplexityPlugin],
})
export class AppModule {}
