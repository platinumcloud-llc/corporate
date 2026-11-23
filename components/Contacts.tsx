import {Box, Button, Heading, Text, VStack} from '@chakra-ui/react'
import Link from 'next/link'

export function Contacts() {
  return (
    <Box
      bgColor={'#f7f7f7'}
      mx={'auto'}
      color={'#333'}
      py={20}
      px={5}
    >
      <Heading fontSize={'2xl'} mb={8} textAlign={'center'}>お問い合わせ</Heading>
      <Text textAlign={'center'} mb={5}>
        プラチナクラウド合同会社へのお問い合わせは、以下のメールアドレスまでお願いいたします。
      </Text>
      <VStack>
        <Link href={'mailto:support@platinumcloud.net'}>
          <Button
            size={'xl'}
            borderRadius={5}
            w={'300px'}
            bgColor={'#333'}
          >
            support@platinumcloud.net
          </Button>
        </Link>
      </VStack>
    </Box>
  )
}
