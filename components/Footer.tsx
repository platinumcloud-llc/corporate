import {Box, HStack, Text} from '@chakra-ui/react'
import {PlatinumCloudLogo} from '@/components/PlatinumCloudLogo'
import Link from 'next/link'
import {Tooltip} from '@/components/ui/tooltip'

export function Footer() {
  return (
    <Box bgColor={'#333'} p={5}>
      <PlatinumCloudLogo size={'lg'} white/>
      <HStack gap={8} justify={'center'} mb={5}>
        <Text color={'white'} fontSize={'sm'}>
          <Tooltip
            content={'現在募集は行っておりません'}
            positioning={{placement: 'top'}}
            showArrow
            openDelay={0}
            closeDelay={0}
          >
            <Link href={'/'}>採用情報</Link>
          </Tooltip>
        </Text>
        <Text color={'white'} fontSize={'sm'}>
          <Link href={'/policies/privacy'}>プライバシーポリシー</Link>
        </Text>
        <Text color={'white'} fontSize={'sm'}>
          <Link href={'/policies/terms'}>利用規約</Link>
        </Text>
      </HStack>
      <Text fontSize={'xs'} textAlign={'center'} color={'#ffffff'} mb={5}>
        Made with ❤️ in Akihabara<br />
        &copy; 2025 platinumcloud
      </Text>
    </Box>
  )
}
