import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './create-crud.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('crud')
export class CrudController {
  constructor(
    private crudService: CrudService
    ) {}

    @Get()
    @ApiOkResponse({description: 'all list'})
    async getCrud() {
        const crud = await this.crudService.getCrud();
        return crud;
    }

    @Get(':crudId')
    @ApiOkResponse({description: 'list of id'})
    async getCrudId(@Param('crudId') crudId) {
        const crudI = await this.crudService.getCrudId(crudId);
        return crudI;
    }

    @Post()
    @ApiCreatedResponse({description: 'crud add'})
    async addCrud(@Body() createCrudDto: CreateCrudDto) {
        const crud = await this.crudService.addCrud(createCrudDto);
        return crud;
    }

    @Delete()
    @ApiOkResponse({description: 'remove crud'})
    async deleteCrud(@Query() query) {
      const crud = await this.crudService.deleteCrud(query.crudId);
      return crud;
    }
}