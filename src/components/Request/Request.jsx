import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
  return (
    <Container h={'92vh'}>
        <VStack h={'full'} justifyContent={'center'}spacing={'16'}>
            <Heading children={"Request New Courses"}/>
            <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name'} />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type="name"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email Address'} />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="Course" children={'Course'} />
            <Textarea
              required
              id="Course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain Your Course...."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={'4'} colorScheme="yellow" type="submit">
            Send Mail
          </Button>

          <Box my='4'>
          See Available Courses !{' '}
            <Link to={'/courses'}>
              <Button colorScheme='yellow' variant={'link'}>Click</Button>{' '}
              Here
            </Link>
          </Box>

        </form>
        </VStack>
    </Container>
  )
}

export default Request