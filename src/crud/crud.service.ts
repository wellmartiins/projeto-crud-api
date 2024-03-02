import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CrudService {
    crud = COURSES;

  getCrud(): Promise<any> {
    return new Promise(resolve => {
        resolve(this.crud);
    });
  };
  
  getCrudId(crudId): Promise<any> {
    let id = Number(crudId);

    return new Promise(resolve => {
        const ids = this.crud.find(item => item.id === id)
        if (!id) {
            throw new HttpException('esse id nao existe', 404)
        };
        resolve(ids);
    });
  };

  addCrud(crud): Promise<any> {
    return new Promise(resolve => {
        this.crud.push(crud);
        resolve(this.crud)
    });
  };

  deleteCrud(crudId): Promise<any> {
    let id = Number(crudId);
    return new Promise(resolve => {
        let index = this.crud.findIndex(crud => crud.id === id);
        if (index === -1) {
            throw new HttpException('O crud com esse ID nao existe', 404)
        };
        this.crud.splice(index, 1);
        resolve(this.crud)
    });
  };

}
