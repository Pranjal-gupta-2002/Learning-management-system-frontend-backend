
import { Button, HStack, Td, Tr } from '@chakra-ui/react';
import { Th } from '@chakra-ui/react';
import React from 'react';
import { Box, Grid, Heading, Table, TableCaption,Tbody, TableContainer, Thead } from '@chakra-ui/react'
import Sidebar from "../Sidebar"
import { RiDeleteBin7Fill } from 'react-icons/ri';
const Users = () => {
  const updateHandler = (userId) => {
    console.log(userId)
  }
  const deleteHandler = (userId) => {
    console.log(userId)
  }

  const users = [{
    _id: '1',
    name: 'John Doe',
    email: 'XXXXXXXXXXXXXX',
    role: 'Admin',
    subscription: {
      status: 'active'
    },

  }]
  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(),default`,
      }}
    >
      <Box p={['0','16']} overflowX={'auto'}>
        <Heading
          children={'All Users'}
          textTransform={'uppercase'}
          textAlign={['center','left']}
          my={'16'}
        />
        <TableContainer w={['100vw','full']}>
          <Table variant={'simple'}>
            <TableCaption>All Available Users in the Database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                users.map((item)=>(
                  <Row key={item._id} item={item} updateHandler={updateHandler} deleteHandler={deleteHandler}/>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({item,updateHandler,deleteHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>#{item.name}</Td>
      <Td>#{item.email}</Td>
      <Td>#{item.role}</Td>
      <Td>#{item.subscription.status==="active"?"Active":"Not Active"}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button variant={'outline'} colorScheme={'purple.500'} onClick={()=>updateHandler(item._id)}>
            Change Role
          </Button>
          <Button variant={'outline'}onClick={()=>deleteHandler(item._id)}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}