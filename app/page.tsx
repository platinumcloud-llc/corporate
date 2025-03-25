import {Box} from '@chakra-ui/react'
import {CompanyInfo} from '@/components/CompanyInfo'
import {CompanyAccess} from '@/components/CompanyAccess'
import {Welcome} from '@/components/Welcome'
import {Services} from '@/components/Services'
import {Contacts} from '@/components/Contacts'

export const metadata = {
  title: 'プラチナクラウド合同会社 (platinumcloud LLC)',
  description: 'プラチナクラウド合同会社の企業サイトです。テクノロジーで、新しい「かわいい」を咲かせます。企業情報、事業内容、採用情報など。',
  openGraph: {
    title: 'プラチナクラウド合同会社 (platinumcloud LLC)',
    description: 'プラチナクラウド合同会社の企業サイトです。テクノロジーで、新しい「かわいい」を咲かせます。企業情報、事業内容、採用情報など。',
    url: 'https://platinumcloud.net',
    type: 'website',
    images: [
      {
        url: 'https://platinumcloud.net/platinumcloud.png',
        alt: 'プラチナクラウド合同会社 (platinumcloud LLC)',
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
