import { PluginConfig } from '@tiejs/common'
import EventPlugin from '../event'

export const plugins: PluginConfig = [
  {
    name: 'event',
    main: EventPlugin,
    enable: true,
  },
]
