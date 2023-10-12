import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Heading,
  Input,
  VStack,
  Select,
  Image,
  Button,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
const CreateCourses = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const Categories = [
    'Web Development',
    'Artificial Intelligence',
    'App Development',
    'Data Structure And Algorithms',
    'Data Science',
    'Game Development',
  ];
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const fileUploadStyle = {
    '&::file-selector-button': {
      cursor: 'pointer',
      marginLeft: '-5%',
      width: '110%',
      border: 'none',
      height: '100%',
      color: 'purple',
      backgroundColor: 'white',
    },
  };
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(),default`,
      }}
    >
      <Container py={'16'}>
        <form>
          <Heading
            children={'Create Courses'}
            textTransform={'uppercase'}
            textAlign={'center'}
            my={'16'}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              value={title}
              onChange={e => setName(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              type="text"
              focusBorderColor="purple.300"
            />

            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={''}>Category</option>
              {Categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="purple.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
            {imagePrev && <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />}
            <Button w={'full'} colorScheme='purple' type='submit' mt={'8'}>
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourses;
