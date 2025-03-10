import {Box, Button, Heading, Text, VStack} from '@chakra-ui/react'
import Link from 'next/link'

export function Contacts() {
  return (
    <Box
      maxW={'800px'}
      mx={'auto'}
      color={'#333'}
      py={20}
      px={5}
    >
      <Heading fontSize={'2xl'} mb={8} textAlign={'center'}>お問い合わせ</Heading>
      <Text textAlign={'center'} mb={5}>
        プラチナクラウド合同会社へのお問い合わせはこちらのフォームよりお願いいたします。
      </Text>
      <VStack>
        <Link href={'https://forms.gle/tCz2gj1wcsHGMuPD6'} target={'_blank'}>
          <Button
            size={'xl'}
            borderRadius={5}
            w={'300px'}
          >
            お問い合わせフォーム
          </Button>
        </Link>
      </VStack>
    </Box>
  )
}
