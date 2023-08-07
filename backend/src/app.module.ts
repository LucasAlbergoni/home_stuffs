import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';
import { CategorysModule } from './categorys/categorys.module';

@Module({
  imports: [ThingsModule, CategorysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
