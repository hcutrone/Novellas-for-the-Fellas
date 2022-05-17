import './Routes.css'
import React from 'react'
import Group from '../components/Group.js'
import { Link } from 'react-router-dom'
import { Container, VStack, Heading } from '@chakra-ui/react'

const Home = ({ userName, groups }) => {
  return (
    <Container className="home" maxW="100vw" centerContent>
      <Container className="home-header">
        <Heading as="h1">Novellas for the Fellas</Heading>
        <Heading as="h2">Welcome, {userName}!</Heading>
      </Container>

      <VStack className="home-groups" align="stretch" spacing="20px" padding="20px">
        {groups.map(group => {
          return <Group group={group}></Group>
        })}
      </VStack>
    </Container>
  )
}

export default Home