import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import vd from '../../assets/images/logo.jpg'; 

const Courses = () => {
  const Category = [
    'Web Development',
    'Artificial Intelligence',
    'App Development',
    'Data Structure And Algorithms',
    'Data Science',
    'Game Development',
  ];
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');


  const addToPlaylistHandler = ()=>{
    console.log("Added To Playlist")
  }

  const CourseCard = ({
    views,
    title,
    imgSrc,
    id,
    addToPlaylistHandler,
    creator,
    description,
    lectureCount,
  }) => (
    <VStack className="courses" alignItems={['center', 'flex-start']}>
      <Image src={imgSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        noOfLines={3}
        children={title}
        size={'sm'}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text noOfLines={2} fontWeight={"bold"} textTransform={"uppercase"} children={"Creator By :-"} />
        <Text noOfLines={2} textTransform={"uppercase"} children={creator}/>
      </HStack>

      <Heading textAlign={"center"} size={'xs'} textTransform={"uppercase"} children={`Lectures - ${lectureCount}`} />
      <Heading  size={'xs'} textTransform={"uppercase"} children={`Views - ${views}`} />

      <Stack direction={["column",'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
            <Button colorScheme='yellow'>Watch Now</Button>
        </Link>
        <Button variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add To Playlist</Button>
      </Stack>
    </VStack>
  );

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children={'All Courses'} m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search Courses...."
        type="text"
        focusBorderColor="yellow.500"
      />

      <HStack
        overflow={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {Category.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <CourseCard
          title={'Sample'}
          description={'Sample'}
          views={23}
          imgSrc={vd}
          id={'Sample'}
          creator={'Sample boy'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
