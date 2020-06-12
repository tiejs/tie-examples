import { Controller, Get } from '@tiejs/controller'
import { InjectEmitter } from '@tiejs/event'
import EventEmitter from 'eventemitter3'

@Controller()
export class UserController {
  constructor(@InjectEmitter() private emitter: EventEmitter) {}
  @Get('/updateUser')
  index() {
    this.emitter.emit('updateUser', 10)
    return 'user updated'
  }
}
