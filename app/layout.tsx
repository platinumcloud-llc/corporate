import {Capriola, Noto_Sans_JP, Roboto} from 'next/font/google'
import ClientProvider from '@/components/ClientProvider'
import './global.css'
import {Box} from '@chakra-ui/react'
import {PlatinumCloudLogo} from '@/components/PlatinumCloudLogo'
import {Footer} from '@/components/Footer'

const capriola = Capriola({
  weight: ['400'],
  subsets: ['latin']
})
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="ja"
      className={`${capriola.className} ${roboto.className} ${notoSansJP.className}`}
    >
      <body>
        <ClientProvider>
          <Box minH={'100vh'}>
            <Box w={'full'} h={'7px'} className={'themeGradient'}/>
            <PlatinumCloudLogo/>
            {children}
            <Footer/>
          </Box>
        </ClientProvider>
      </body>
    </html>
  )
}
