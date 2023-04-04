import React, { Component, useState, useEffect } from 'react';
import {   Box,
  Button,
  Center,
  ChakraProvider,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr, Text } from "@chakra-ui/react"
export const ReposContext = React.createContext({
  repos: [], fetchRepos: () => {}
})

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Text color="red.500">Something went wrong.</Text>;
    }

    return this.props.children;
  }
}


  
export default function Todos() {

  const [repos, setRepos] = useState([])

  const fetchRepos = async () => {
    const response = await fetch("http://localhost:8004/githubUser/")
    const repos = await response.json()
    setRepos(repos)
  }
  
    const handleToggleScrapTime = (index) => {
    const newRepos = [...repos];
    newRepos[index].showScrapTime = !newRepos[index].showScrapTime;
    setRepos(newRepos);
  };
    useEffect(() => {
    fetchRepos()
  }, [])
  return (
    <ChakraProvider>
      <ErrorBoundary>
        <Box p={10}>
          <Center>
            <Heading as="h1" size="lg">
              My Repositories
            </Heading>
          </Center>
          <Table variant="simple" mt={5}>
            <Thead>
              <Tr>
                <Th>Repository Name</Th>

              </Tr>
            </Thead>
            <Tbody>
              {repos.map((repo, index) => (
                <Tr key={repo.id}>
                  <Td>{repo.repository}</Td>
                  <Td>
                    {repo.showScrapTime ? repo.scraped_at : ''}
                    <Button
                      size="xs"
                      variant="ghost"
                      onClick={() => handleToggleScrapTime(index)}
                      mt={1}
                    >
                      {repo.showScrapTime ? 'Hide' : 'Show details'}
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </ErrorBoundary>
    </ChakraProvider>
  );
}


