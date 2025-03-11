import {Box, Heading, Text, VStack} from '@chakra-ui/react'
import Link from 'next/link'
import {SubscribeLogo} from '@/components/SubscribeLogo'

export function Services() {
  return (
    <Box
      background={'repeating-linear-gradient(120deg, transparent, transparent 60px, #f7f7f7 60px, #f7f7f7 120px)'}
    >
      <Box
        maxW={'1000px'}
        mx={'auto'}
        color={'#333'}
        py={20}
        px={5}
      >
        <Heading as={'h2'} fontSize={'2xl'} mb={8} textAlign={'center'}>事業・サービス</Heading>
        <Link href={'https://subscribe.sh/'} target={'_blank'}>
          <VStack
            p={10}
            borderRadius={10}
            className={'shadow'}
            bgColor={'#fff'}
            gap={4}
            transition={'transform .2s'}
            _hover={{
              transform: 'scale(1.03)',
              opacity: 0.9
            }}
          >
            <SubscribeLogo size={'4xl'}/>
            <Text fontSize={'sm'} textAlign={'center'} color={'#555'}>
              表現する全ての人を支援するプラットフォーム <b>subscribe*</b><br/>
              https://subscribe.sh/
            </Text>
          </VStack>
        </Link>
      </Box>
    </Box>
  )
}
