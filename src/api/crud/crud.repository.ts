import { Crud } from './entity/crud.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Crud)
export class CrudRepository extends Repository<Crud> {}
