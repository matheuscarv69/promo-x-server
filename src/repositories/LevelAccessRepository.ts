import { EntityRepository, Repository } from "typeorm";

import { LevelAccess } from "../entities/LevelAccess";

@EntityRepository(LevelAccess)
class LevelAccessRepository extends Repository<LevelAccess> {

}

export { LevelAccessRepository };