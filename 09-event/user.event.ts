// import { Event, On } from '@tiejs/event'
import { Event, On } from './event'

@Event()
export class FollowEvent {
  @On('updateUser', { description: 'update user' })
  async followSomeone(userId: number, id: number) {
    console.log(`User 1 ${userId} updated`, id)
  }
}
