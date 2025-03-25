import {Box} from '@chakra-ui/react'
import {CompanyInfo} from '@/components/CompanyInfo'
import {CompanyAccess} from '@/components/CompanyAccess'
import {Welcome} from '@/components/Welcome'
import {Services} from '@/components/Services'
import {Contacts} from '@/components/Contacts'

export const metadata = {
  title: 'platinumcloud*',
  description: 'テクノロジーを活用して、新しい "かわいい" を届けます。プラチナクラウド合同会社の企業サイトです。企業情報、事業情報、採用情報など。',
  openGraph: {
    title: 'platinumcloud*',
    description: 'テクノロジーを活用して、新しい "かわいい" を届けます。プラチナクラウド合同会社の企業サイトです。企業情報、事業情報、採用情報など。',
    url: 'https://platinumcloud.net',
    type: 'website',
    images: [
      {
        url: 'https://platinumcloud.net/platinumcloud.png',
        alt: 'platinumcloud*',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function Page() {
  return (
    <Box>
      <Welcome/>
      <Services/>
      <CompanyInfo/>
      <CompanyAccess/>
      <Contacts/>
    </Box>
  )
}
