import { getCustomRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { UserInput } from "../models/UserInput";
import { UserRepository } from "../repositories/UserRepository";

class UserService {

  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async getAll() {
    const users = await this.userRepository.find();
    return users;
  }

  async createUser(newUserData: UserInput) {
    const { email } = newUserData;

    const userExists = await this.userRepository.findOne({ email })

    if (userExists) {
      return userExists;
    }

    const user = await this.userRepository.create({
      name: newUserData.name,
      email: newUserData.email,
      password: newUserData.password,
      level_access: newUserData.level_access,
      chain_store: newUserData.chain_store,
    })

    await this.userRepository.save(user);
    return user;
  }

}

export { UserService };