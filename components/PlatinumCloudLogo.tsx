import {Text} from '@chakra-ui/react'

type Props = {
  size?: string
  white?: boolean
}

export function PlatinumCloudLogo({size, white}: Props) {
  return (
    <Text
      textAlign={'center'}
      color={white ? '#ffffff' : '#555555'}
      ml={2}
      py={5}
      fontSize={size || 'xl'}
      className={'capriola'}
    >platinumcloud<span style={{color: white ? '#add8e6' : '#8f80bd'}}>*</span></Text>
  )
}
