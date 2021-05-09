import 'dotenv/config';
import { getCustomRepository, Repository } from "typeorm";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";
import { LoginInput } from '../models/LoginInput';

class AuthService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async authenticate(credentials: LoginInput) {
    const { email, password } = credentials;
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Password incorrect!");
    }

    const token = jwt.sign({ id: user._id, name: user.name, roles: user.level_access }, process.env.APP_SECRET, { expiresIn: '2d' });
    return token;
  }


}

export { AuthService };