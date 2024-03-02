import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudApiModule } from './crud-api/crud-api.module';
import { CrudController } from './crud/crud.controller';
import { CrudService } from './crud/crud.service';

@Module({
  imports: [CrudApiModule],
  controllers: [AppController, CrudController],
  providers: [AppService, CrudService],
})
export class AppModule {}
