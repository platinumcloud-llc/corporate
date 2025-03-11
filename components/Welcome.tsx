import {Box, Text} from '@chakra-ui/react'

export function Welcome() {
  return (
    <Box
      className={'themeGradient'}
      mx={5}
      mb={8}
      px={{base: 5, md: 10}}
      py={24}
      color={'white'}
      borderRadius={10}
    >
      <Box maxW={'1000px'} mx={'auto'}>
        <Text
          className={'capriola'}
          fontSize={{base: '47px', md: '80px'}}
          lineHeight={'1.3'}
          mb={6}
          textShadow={'0 0 10px rgba(0, 0, 0, 0.1)'}
        >
          Empowering<br/>brandnew kawaii<br/>with technology.
        </Text>
        <Text
          fontSize={{base: '16px', md: '20px'}}
          fontWeight={'bold'}
          textShadow={'0 0 10px rgba(0, 0, 0, 0.1)'}
        >
          私たちプラチナクラウドは、<br/>テクノロジーを活用して、新しい &quot;かわいい&quot; を生み出します。
        </Text>
      </Box>
    </Box>
  )
}
