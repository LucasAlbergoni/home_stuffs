import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';
import { CategorysModule } from './categorys/categorys.module';
import { CommomModule } from './commom/commom.module';

@Module({
  imports: [ThingsModule, CategorysModule, CommomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
