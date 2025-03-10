import {Box} from '@chakra-ui/react'
import {PlatinumCloudLogo} from '@/components/PlatinumCloudLogo'
import {CompanyInfo} from '@/components/CompanyInfo'
import {CompanyAccess} from '@/components/CompanyAccess'
import {Welcome} from '@/components/Welcome'
import {Services} from '@/components/Services'
import {Contacts} from '@/components/Contacts'
import {Footer} from '@/components/Footer'

export default function Page() {
  return (
    <Box>
      <PlatinumCloudLogo/>
      <Welcome/>
      <Services/>
      <CompanyInfo/>
      <CompanyAccess/>
      <Contacts/>
      <Footer/>
    </Box>
  )
}
