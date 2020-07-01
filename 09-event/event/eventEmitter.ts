import isPromise from 'is-promise'
import { Injectable } from '@tiejs/common'
import { EventStore } from './types'

@Injectable()
export class EventEmitter {
  eventStore: EventStore = {}

  emit = async (name: string, ...args: any[]) => {
    if (!this.eventStore[name]) return

    const result = this.eventStore[name](...args)
    if (isPromise(result)) await result
  }
}
