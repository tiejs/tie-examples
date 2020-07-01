import { methodStore } from '../methodStore'
import { EventOptions } from '../types'

export function On(name: string, eventOptions = {} as EventOptions): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    methodStore.set(descriptor.value, {
      name,
      eventOptions,
      fn: descriptor.value,
      target,
      propertyKey,
    })
  }
}
