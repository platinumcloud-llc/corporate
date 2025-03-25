import {Text} from '@chakra-ui/react'

type Props = {
  size?: string
  white?: boolean
}

export function SubscribeLogo({size, white}: Props) {
  return (
    <Text
      textAlign={'center'}
      color={white ? '#ffffff' : '#555555'}
      ml={2}
      fontSize={size || 'xl'}
      className={'capriola'}
    >subscribe<span style={{color: white ? '#add8e6' : '#8f80bd'}}>*</span></Text>
  )
}
