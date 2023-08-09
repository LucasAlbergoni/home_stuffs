import { Module } from '@nestjs/common';
import { ThingsService } from './things.service';
import { ThingsController } from './things.controller';
import { CommomModule } from 'src/commom/commom.module';

@Module({
  imports: [CommomModule],
  controllers: [ThingsController],
  providers: [ThingsService],
})
export class ThingsModule {}
