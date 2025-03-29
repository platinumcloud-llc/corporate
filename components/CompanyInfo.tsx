import {Box, Heading, Stack, Text} from '@chakra-ui/react'

export function CompanyInfo() {
  return (
    <Box
      maxW={'800px'}
      mx={'auto'}
      color={'#333'}
      py={20}
      px={5}
    >
      <Heading fontSize={'2xl'} mb={6} textAlign={'center'}>会社概要</Heading>
      <dl>
        <Stack direction={{base: 'column', md: 'row'}} p={5} borderBottom={'2px solid #eee'}>
          <Text as={'dt'} fontWeight={'bold'} w={'150px'}>社名</Text>
          <Text as={'dd'}><b>プラチナクラウド合同会社</b><br/>platinumcloud LLC</Text>
        </Stack>
        <Stack direction={{base: 'column', md: 'row'}} p={5} borderBottom={'2px solid #eee'}>
          <Text as={'dt'} fontWeight={'bold'} w={'150px'}>所在地</Text>
          <Text as={'dd'}>
            〒1010021<br/>
            東京都千代田区外神田4-14-1 秋葉原UDX4F
          </Text>
        </Stack>
        <Stack direction={{base: 'column', md: 'row'}} p={5} borderBottom={'2px solid #eee'}>
          <Text as={'dt'} fontWeight={'bold'} w={'150px'}>代表者</Text>
          <Text as={'dd'}>小林 修平</Text>
        </Stack>
        <Stack direction={{base: 'column', md: 'row'}} p={5} borderBottom={'2px solid #eee'}>
          <Text as={'dt'} fontWeight={'bold'} w={'150px'}>設立</Text>
          <Text as={'dd'}>2025年04月01日 (*設立準備中)</Text>
        </Stack>
        <Stack direction={{base: 'column', md: 'row'}} p={5} borderBottom={'2px solid #eee'}>
          <Text as={'dt'} fontWeight={'bold'} w={'150px'}>資本金</Text>
          <Text as={'dd'}>1,000,000円</Text>
        </Stack>
        <Stack direction={{base: 'column', md: 'row'}} p={5}>
          <Text as={'dt'} fontWeight={'bold'} w={'150px'}>事業内容</Text>
          <Stack gap={2}>
            <Text as={'dd'}>Webアプリケーションの設計・開発</Text>
            <Text as={'dd'}>
              スケジュール配信プラットフォーム「<b>subscribe*</b>」の開発
            </Text>
          </Stack>
        </Stack>
      </dl>
    </Box>
  )
}
