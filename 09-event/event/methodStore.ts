import { MethodStoreValue } from './types'

class MethodStore {
  private key = Symbol('Tie#event')

  set(fn: any, value: Partial<MethodStoreValue>) {
    const oldValue = this.get(fn) || {}
    const newValue = { ...oldValue, ...value }
    Reflect.defineMetadata(this.key, newValue, fn)
  }
  get(fn: any): MethodStoreValue {
    return Reflect.getMetadata(this.key, fn)
  }
}

export const methodStore = new MethodStore()
