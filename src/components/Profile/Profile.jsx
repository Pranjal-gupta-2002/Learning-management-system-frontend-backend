import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import vd from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Profile = () => {

  const {isOpen,onClose,onOpen} = useDisclosure();
  const user = {
    name: 'Abhay Gupta',
    email: 'abhayg980@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'dhfg',
        poster: vd,
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e,image)=>{
    e.preventDefault();
  }
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button colorScheme="yellow" variant={'ghost'} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children={'Name -'} fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children={'Email -'} fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children={'CreatedAt -'} fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children={'Subscription -'} fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color={'yellow.500'} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          padding={'4'}
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
        >
          {user.playlist.map(element => (
            <VStack w={'48'} m={'2'} key={element.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />

              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button colorScheme="yellow" variant={'ghost'}>
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler}/>
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}) {

const closeHandler = ()=>{
    onClose();
    setImgPrev('')
    setImage('')
}
    const[image,setImage] = useState('')
    const[imgPrev,setImgPrev] = useState('')

    const changeImageHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = ()=>{
            setImgPrev(reader.result)
            setImage(file)
        }
    }
    const fileUploadCss = {
        "&::file-selector-button":{
            cursor:"pointer",marginLeft:"-5%",
            width:"110%",
            border:"none",
            height:"100%",
            color:"#ECC94B",
            backgroundColor:"white"
        }
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter={'blur(10px)'}>
        <ModalContent>
            <ModalHeader>Change Photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
                <VStack spacing={'8'}>
                  {
                    imgPrev&&<Avatar src={imgPrev} boxSize={'48'} />
                  }
                  <Input type={"file"} css={fileUploadCss}  onChange={changeImageHandler}/>
                  <Button w={'full'} colorScheme='yellow' type={'submit'}>Change</Button>
                </VStack>
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button mr={'3'} onClick={closeHandler}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
