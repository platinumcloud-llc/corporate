import {Box, Heading, Text, VStack} from '@chakra-ui/react'
import {SubscribeLogo} from '@/components/SubscribeLogo'
import Link from 'next/link'

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
            p={14}
            borderRadius={10}
            bgColor={'#fff'}
            gap={4}
            className={'shadow'}
            transition={'transform .2s'}
            _hover={{
              transform: 'scale(1.03)',
              opacity: 0.9
            }}
            mb={10}
            border={'4px solid #bbe2f1'}
          >
            <SubscribeLogo size={'4xl'}/>
            <Text fontSize={'sm'} textAlign={'center'} color={'#555'}>
              表現する人と応援する人をつなぐ<br />スケジュール配信プラットフォーム <b>subscribe*</b>
            </Text>
          </VStack>
        </Link>

        <VStack
          p={10}
          borderRadius={10}
          bgColor={'#eee'}
          gap={4}
          opacity={0.7}
          mb={10}
        >
          <Text textAlign={'center'} color={'#555'} fontWeight={'bold'} fontSize={'lg'}>ウェブアプリ開発(業務委託)</Text>
          <Text textAlign={'center'} color={'#555'} fontSize={'sm'}>
            Next.js / React / TypeScript / GoogleCloud 等を組み合わせたWebアプリケーションの設計開発を承ります<br />
            (現在は募集休止しております)
          </Text>
        </VStack>

      </Box>

    </Box>
  )
}
