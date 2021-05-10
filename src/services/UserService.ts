import { getCustomRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { LevelAccess } from "../entities/LevelAccess";
import { UserInput } from "../models/UserInput";
import { UserUpdateInput } from "../models/UserUpdateInput";
import { UserRepository } from "../repositories/UserRepository";
import { LevelAccessRepository } from "../repositories/LevelAccessRepository";

class UserService {

  private userRepository: Repository<User>;
  private levelAccessRepository: Repository<LevelAccess>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
    this.levelAccessRepository = getCustomRepository(LevelAccessRepository);
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
    const { email, levelsAccess } = newUserData;

    const userExists = await this.userRepository.findOne({ email });

    if (userExists) {
      throw new Error("User already exists");
    }

    const setRoles = new Set<LevelAccess>();
    levelsAccess.map(role => {
      const levelAcess = this.levelAccessRepository.create({
        name: role
      });
      setRoles.add(levelAcess);
    });
    const arrRoles = Array.from(setRoles);

    await this.levelAccessRepository.save(arrRoles);

    const user = await this.userRepository.create({
      name: newUserData.name,
      email: newUserData.email,
      levelsAccess: arrRoles,
      password: newUserData.password,
      chain_store: newUserData.chain_store,
    });

    await this.userRepository.save(user);

    return user;
  }

  async updateUserById(userData: UserUpdateInput): Promise<User> {
    const { _id, levelsAccess } = userData;

    let userToUpdate = await this.userRepository.findOne(_id);

    if (!userToUpdate) {
      throw new Error("User not exists");
    }

    if (levelsAccess) {
      const setRolesExists = new Set<LevelAccess>();
      userToUpdate.levelsAccess.map(role => setRolesExists.add(role));
      
      levelsAccess.map(role => {
        const levelAcess = this.levelAccessRepository.create({
          name: role
        });
        setRolesExists.add(levelAcess);
      });
      const arrRoles = Array.from(setRolesExists);
      await this.levelAccessRepository.save(arrRoles);
      
      userToUpdate.levelsAccess = arrRoles;
    }

    userToUpdate.name = userData.name;
    userToUpdate.email = userData.email;

    await this.userRepository.save(userToUpdate);

    return userToUpdate;
  }

}

export { UserService };