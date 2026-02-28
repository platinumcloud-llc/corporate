import {Box, Heading, Text, VStack} from '@chakra-ui/react'

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
            Next.js / React / TypeScript 等を組み合わせたWebアプリケーションの設計開発を承ります<br />
            (現在は募集休止しております)
          </Text>
        </VStack>

      </Box>

    </Box>
  )
}
