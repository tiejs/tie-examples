import { Event, On } from '@tiejs/event'

@Event()
export class FollowEvent {
  @On('updateUser', { description: 'update user' })
  async followSomeone(userId: number) {
    console.log(`User ${userId} updated`)
  }
}
