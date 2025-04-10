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
      borderRadius={20}
    >
      <Box maxW={'1000px'} mx={'auto'}>
        <Text
          className={'capriola'}
          fontSize={{base: '47px', md: '80px'}}
          lineHeight={'1.3'}
          mb={6}
          textShadow={'0 0 10px rgba(0, 0, 0, 0.1)'}
        >
          Blooming<br />brandnew kawaii<br/>with technology.
        </Text>
        <Text
          fontSize={{base: '1.1rem', md: '1.3rem'}}
          fontWeight={'bold'}
          textShadow={'0 0 10px rgba(0, 0, 0, 0.1)'}
        >
          私たちプラチナクラウドは、<br/>テクノロジーで新しい &quot;かわいい&quot; を咲かせます。
        </Text>
        <Text
          mt={2}
          fontSize={{base: '0.9rem', md: '1rem'}}
        >
          「かわいい」そして「ゆるふわ」で「やさしい」プロダクトを開発し、社会をちょっとだけやわらかくします。
        </Text>
      </Box>
    </Box>
  )
}
