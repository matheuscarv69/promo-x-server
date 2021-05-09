import { getCustomRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { UserInput } from "../models/UserInput";
import { UserUpdateInput } from "../models/UserUpdateInput";
import { UserRepository } from "../repositories/UserRepository";

class UserService {

  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async getAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ _id: id });
    return user;
  }

  async createUser(newUserData: UserInput): Promise<User> {
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

  async updateUserById(userData: UserUpdateInput): Promise<User> {
    const { _id } = userData;

    let userToUpdate = await this.userRepository.findOne(_id);

    userToUpdate.name = userData.name;
    userToUpdate.email = userData.email;
    userToUpdate.level_access = userData.level_access;
    await this.userRepository.save(userToUpdate);

    return userToUpdate;
  }

}

export { UserService };