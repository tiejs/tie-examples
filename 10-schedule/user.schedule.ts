import { Schedule, Cron, Interval } from '@tiejs/schedule'

@Schedule()
export class UserSchedule {
  @Cron('*/5 * * * * *')
  updateUser() {
    console.log('user cache updated')
  }
  // 每隔 10 秒执行任务
  @Interval(2000)
  updateUserCache() {
    console.log('user cache updated--')
  }
}
