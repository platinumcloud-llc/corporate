'use client'

import {useState} from 'react'
import {Box, HStack, Link, Text} from '@chakra-ui/react'
import {WarpField} from '@/components/WarpField'

// Deep night sky with soft nebula light in the editor's colours, and a quiet dot grid on top.
const SPACE = [
  'radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1.4px) center / 22px 22px',
  'radial-gradient(55% 90% at 15% 0%, rgba(79,70,229,0.55), transparent 70%)',
  'radial-gradient(50% 80% at 85% 100%, rgba(255,92,138,0.35), transparent 70%)',
  'radial-gradient(60% 90% at 55% 45%, rgba(164,60,230,0.30), transparent 70%)',
  '#14112b',
].join(', ')

/** The image editor service. The whole card is one link, in the editor's own galaxy colours. */
export function ImageEditorCard() {
  const [boost, setBoost] = useState(false)
  return (
    <Link
      onPointerEnter={() => setBoost(true)}
      onPointerLeave={() => setBoost(false)}
      onFocus={() => setBoost(true)}
      onBlur={() => setBoost(false)}
      position={'relative'}
      overflow={'hidden'}
      href={'https://image.platinumcloud.net'}
      target={'_blank'}
      rel={'noopener noreferrer'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={4}
      px={10}
      py={{base: 14, md: 20}}
      mb={10}
      borderRadius={10}
      color={'white'}
      textDecoration={'none'}
      transition={'transform 0.2s, box-shadow 0.2s'}
      style={{background: SPACE, boxShadow: '0 12px 32px rgba(20, 17, 43, 0.28)'}}
      _hover={{textDecoration: 'none', transform: 'translateY(-2px)', boxShadow: '0 18px 40px rgba(79, 70, 229, 0.35)'}}
      _focusVisible={{outline: '3px solid rgba(164, 60, 230, 0.5)', outlineOffset: '3px'}}
    >
      <WarpField boost={boost} />
      <Text
        position={'relative'}
        textAlign={'center'}
        fontWeight={'800'}
        fontSize={{base: '2xl', md: '3xl'}}
        lineHeight={'1.1'}
        letterSpacing={'0.04em'}
        style={{
          // Starlight: white fading into the editor's lavender and rose, with a soft glow.
          background: 'linear-gradient(100deg, #ffffff 10%, #e2d8ff 45%, #ffc4d8 90%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 18px rgba(164, 60, 230, 0.55))',
        }}
      >
        オンライン画像編集
      </Text>
      <Text position={'relative'} textAlign={'center'} fontSize={'sm'} opacity={0.92}>
        ブラウザだけで使える無料の画像編集ツール<br />
        トリミング・色調補正・モザイク・形式変換に対応しています
      </Text>
      <HStack position={'relative'} gap={2} fontSize={'sm'} fontWeight={'bold'}>
        <Logo />
        <Box as={'span'}>image.platinumcloud.net</Box>
        <Box as={'span'} aria-hidden={'true'}>→</Box>
      </HStack>
    </Link>
  )
}

/** The editor's app icon, on a white tile so it reads on the gradient. */
function Logo() {
  return (
    <svg width={22} height={22} viewBox={'0 0 64 64'} aria-hidden={'true'}>
      <rect x={'2'} y={'2'} width={'60'} height={'60'} rx={'14'} fill={'rgba(255,255,255,0.22)'} />
      <circle cx={'44'} cy={'21'} r={'6'} fill={'#ffd60a'} />
      <path
        d={'M8 50 L23 31 Q25 28.6 27.2 31 L35 40 L39.8 34.6 Q42 32.2 44.2 34.6 L56 48 L56 50 Q56 56 50 56 L14 56 Q8 56 8 50Z'}
        fill={'#ffffff'}
      />
    </svg>
  )
}
