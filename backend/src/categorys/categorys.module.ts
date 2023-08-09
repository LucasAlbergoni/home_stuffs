import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';
import { CommomModule } from 'src/commom/commom.module';

@Module({
  imports:[CommomModule],
  controllers: [CategorysController],
  providers: [CategorysService]
})
export class CategorysModule {}
