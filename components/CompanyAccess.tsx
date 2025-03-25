import {Box, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link'

export function CompanyAccess() {
  return (
    <Box bgColor={'#f7f7f7'}>
      <Box
        maxW={'800px'}
        mx={'auto'}
        color={'#333'}
        py={20}
        px={5}
      >
        <Heading fontSize={'2xl'} mb={8} textAlign={'center'}>アクセス</Heading>
        <Box
          position="relative"
          paddingBottom="56.25%" /* 16:9 aspect ratio */
          height="0"
          overflow="hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0434051841935!2d139.77004037728076!3d35.70054947258094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1d85c37365%3A0xeb6dd44c3e238ffa!2z56eL6JGJ5Y6fVURY!5e0!3m2!1sja!2sjp!4v1741616149252!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{position: 'absolute', top: 0, left: 0, border: 0}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        <Box my={2} p={5}>
          <Text fontSize={'lg'}>
            <b>秋葉原UDX (LIFORK AKIHABARA)</b>
          </Text>
          <Text fontSize={'sm'} mb={3}>
            東京都千代田区外神田4丁目14-1 秋葉原UDX 4F
          </Text>
          <Text fontSize={'sm'}>
            JR秋葉原駅電気街口から「アキバブリッジ」を通って徒歩3分。<br/>
            秋葉原へは、都心を結ぶJR山手線の他、京浜東北線、総武線及び東京メトロ日比谷線、銀座線（末広町駅）、つくばエクスプレスが接続しています。<br/>
            秋葉原UDXまでの行き方はこちらをご確認ください：
            <Link
              href={'https://udx.jp/access/'}
              target={'_blank'}
            >https://udx.jp/access/</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
