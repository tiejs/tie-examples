import { Injectable } from '@tiejs/common'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async queryUser() {
    return await this.userRepository.findAll()
  }
}
