import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { ResultsModule } from './results/results.module';
import { TournamentModule } from './tournament/tournament.module';

/* Here we load the environment variables from our .env file and globalize them for the whole project. In turn we establish the connection to our MySQL database using TypeOrm (the DB is in clever cloud). */
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '1027',
      database: process.env.DB_NAME || 'prosys_local',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PlayersModule,
    ResultsModule,
    TournamentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
