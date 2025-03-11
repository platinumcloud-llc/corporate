import {Box} from '@chakra-ui/react'
import {CompanyInfo} from '@/components/CompanyInfo'
import {CompanyAccess} from '@/components/CompanyAccess'
import {Welcome} from '@/components/Welcome'
import {Services} from '@/components/Services'
import {Contacts} from '@/components/Contacts'

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
