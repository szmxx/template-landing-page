import { injectStrict } from '@/utils'
import { InstanceKey } from './constants'
import { ISwiperItem } from './types'
interface PropTypeItem {
  data: ISwiperItem
}
export default function SwiperSlot(props: PropTypeItem) {
  const root = injectStrict(InstanceKey)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return root?.slots?.[props?.data?.slot]?.({
    data: props.data,
  })
}

SwiperSlot.props = ['data']
