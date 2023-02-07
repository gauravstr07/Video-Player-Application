import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Img src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Img src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is the Gameing
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Img src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Img src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"} fontStyle={"italic"}>
            Gaming is an industry that grows fast, with new exciting games, more
            advanced graphics, and richer storylines produced every day. And as
            games improve, so does gaming website design. The internet is full
            of stunning game website examples and countless gaming website ideas
            that are worth exploring. A gaming website is a great medium to
            promote a video game, create an online space that unites gamers, or
            share industry news. Gaming website UI design is one of the key
            factors determining the user’s experience. And the latter should be
            nothing but fantastic if you want to have a successful site. So to
            help you create a top-notch gaming website, we’ve gathered the best
            gaming design ideas and tips, as well as game website examples in
            this article. If you’re ready to explore, let’s jump right in!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
