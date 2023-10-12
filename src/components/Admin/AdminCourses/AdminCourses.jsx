import { Button, HStack, Image, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { Th } from '@chakra-ui/react';
import React from 'react';
import {
  Box,
  Grid,
  Heading,
  Table,
  TableCaption,
  Tbody,
  TableContainer,
  Thead,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
const AdminCourses = () => {
  const courseDetailsHandler = userId => {
    onOpen();
    console.log(userId);
  };
  const deleteHandler = userId => {
    console.log(userId);
  };
  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId, lectureId);
  };
  const addLectureHandler= (e,courseId,description,title,video)=> {
    e.preventDefault();
  }

  const { isOpen, onClose, onOpen } = useDisclosure();
  const courses = [
    {
      _id: '1',
      title: 'React development',
      category: 'Web Development',
      poster: {
        url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&',
      },
      createdBy: 'XXXXX',
      views: 100,
      numberOfVideos: 10,
    },
  ];
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(),default`,
      }}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          children={'All Users'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
          my={'16'}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'}>
            <TableCaption>All Available Courses in the Database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          id={'weydgcsd'}
          courseTitle = {'React development'}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image
          src={item.poster.url}
          alt={item.title}
          w={'100px'}
          h={'100px'}
          borderRadius={'md'}
          objectFit={'cover'}
          mb={'4'}
          boxShadow={'md'}
          border={'1px solid #ccc'}
        />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numberOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            colorScheme={'purple.500'}
            onClick={() => courseDetailsHandler(item._id)}
          >
            View Lecture
          </Button>
          <Button variant={'outline'} onClick={() => deleteHandler(item._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
