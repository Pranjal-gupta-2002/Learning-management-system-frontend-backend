import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h={'90vh'} p="16">
      <Heading children="Welcome" my={'8'} textAlign={'center'} />

      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={'0'}
      >
        <Box bg={'yellow.400'} py={'4'} css={{ borderRadius: '8px 8px 0 0 ' }}>
          <Text >Pro Pack - $150.00</Text>
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt="4" spacing={'8'}>
            <Text color={'black'}>
              Join pro pack and Get access to all Content.
            </Text>
            <Heading size={'md'} children={'$299 Only'} />
          </VStack>

          <Button my={'8'} width={'full'} colorScheme="yellow">
            But Now
          </Button>
        </Box>

        <Box bg={'blackAlpha.600'} p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            size={'sm'}
            color={'white'}
            textTransform={'uppercase'}
            children={'100% Refund At Cancellation'}
          />

          <Text fontSize={'sm'} color={'white'} children={"*Terms & Conditions Applied"}/>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
