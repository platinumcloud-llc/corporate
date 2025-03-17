import {Box, Heading, Text, VStack} from '@chakra-ui/react'
import {SubscribeLogo} from '@/components/SubscribeLogo'
// import Link from 'next/link'

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
        {/*<Link href={'https://subscribe.sh/'} target={'_blank'}>*/}
        {/*  <VStack*/}
        {/*    p={10}*/}
        {/*    borderRadius={10}*/}
        {/*    bgColor={'#fff'}*/}
        {/*    gap={4}*/}
        {/*    className={'shadow'}*/}
        {/*    transition={'transform .2s'}*/}
        {/*    _hover={{*/}
        {/*      transform: 'scale(1.03)',*/}
        {/*      opacity: 0.9*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <SubscribeLogo size={'4xl'}/>*/}
        {/*    <Text fontSize={'sm'} textAlign={'center'} color={'#555'}>*/}
        {/*      表現する全ての人を応援する<br />スケジュール共有プラットフォーム <b>subscribe*</b>*/}
        {/*    </Text>*/}
        {/*  </VStack>*/}
        {/*</Link>*/}
        <VStack
          p={10}
          borderRadius={10}
          bgColor={'#eee'}
          gap={4}
          // className={'shadow'}
          opacity={0.7}
        >
          <SubscribeLogo size={'4xl'}/>
          <Text textAlign={'center'} color={'#555'}>
            2025年春リリース予定
          </Text>
        </VStack>
      </Box>
    </Box>
  )
}
