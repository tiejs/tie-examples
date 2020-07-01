export interface Emitter {
  emit: (name: string, ...args: any[]) => Promise<any>
}

export interface EventConfig {
  enable?: boolean
  events?: any[]
  patterns?: string | string[]
}

export interface ClassType<T = any> {
  new (...args: any[]): T
}

export interface EventOptions {
  description?: string
}

export interface MethodStoreValue {
  name: string
  eventOptions: EventOptions
  fn: any
  target: Object
  propertyKey: any
}

export interface EventStore {
  [key: string]: (...args: any[]) => any
}
