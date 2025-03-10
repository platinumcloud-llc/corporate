import {Box, HStack, Text} from '@chakra-ui/react'
import {PlatinumCloudLogo} from '@/components/PlatinumCloudLogo'
import Link from 'next/link'

export function Footer() {
  return (
    <Box bgColor={'#333'} p={5}>
      <PlatinumCloudLogo size={'lg'} white/>
      <Text color={'white'} fontSize={'sm'} fontWeight={'bold'} textAlign={'center'} mb={2}>
        プラチナクラウド合同会社
      </Text>
      <HStack gap={5} justify={'center'} mb={5}>
        <Text color={'white'} fontSize={'sm'}>
          <Link href={'https://forms.gle/tCz2gj1wcsHGMuPD6'} target={'_blank'}>お問い合わせ</Link>
        </Text>
        <Text color={'white'} fontSize={'sm'}>
          <Link href={'/policies/privacy'}>プライバシーポリシー</Link>
        </Text>
        <Text color={'white'} fontSize={'sm'}>
          <Link href={'/policies/terms'}>利用規約</Link>
        </Text>
      </HStack>
    </Box>
  )
}
