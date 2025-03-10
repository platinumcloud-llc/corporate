import {Box} from '@chakra-ui/react'
import {PlatinumCloudLogo} from '@/components/PlatinumCloudLogo'
import {CompanyInfo} from '@/components/CompanyInfo'

export default function Page() {
  return (
    <Box>
      <PlatinumCloudLogo />
      <CompanyInfo />
      <PlatinumCloudLogo size={'xs'} />
    </Box>
  )
}
