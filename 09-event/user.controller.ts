import { Controller, Get } from '@tiejs/controller'
import { InjectEmitter, Emitter } from './event'

@Controller()
export class UserController {
  constructor(@InjectEmitter() private emitter: Emitter) {}
  @Get('/updateUser')
  async index() {
    this.emitter.emit('updateUser', 10, 19)
    return 'user updated'
  }
}
