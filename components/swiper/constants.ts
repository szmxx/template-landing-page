import { InjectionKey, ComponentInternalInstance } from 'vue'
export const InstanceKey: InjectionKey<ComponentInternalInstance> =
  Symbol('InstanceTreeKey')
