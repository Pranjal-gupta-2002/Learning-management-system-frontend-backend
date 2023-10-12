import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/course.mp4';

const CoursePage = () => {
  const lectures = [
    {
      _id: 'ddrtd1',
      title: 'Sample1',
      descrption: 'Sample hfg fhujfvc',
      video: {
        url: 'asdfcx',
      },
    },
    {
      _id: 'ddrtd2',
      title: 'Sample2',
      descrption: 'Sample hfg fhujfvc',
      video: {
        url: 'asdfcx',
      },
    },
    {
      _id: 'ddrtd3',
      title: 'Sample3',
      descrption: 'Sample hfg fhujfvc',
      video: {
        url: 'asdfcx',
      },
    },
  ];
  const lectureTitle = 'Lecture Title';
  const [lectureNumber,setLectureNumber] = useState(0);
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', ' 3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          autoPlay={true}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          m={'4'}
          fontSize={'3xl'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading
          m={'4'}
          fontSize={'2xl'}
          children={lectures[lectureNumber].descrption}
        />
        <Text m={'4'}>efjhgfghfuygfifiuyfgwyuwf</Text>
      </Box>

      <VStack>
        {lectures.map((item, index) => (
          <button
            key={item._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2',
            }}
            onClick={()=>setLectureNumber(index)}
          >
            <Text>
              #{index + 1} {item.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
