import React, { Component, useState, useEffect } from 'react';
import {
  Box,
  ChakraProvider,
  Text,
  Select
} from "@chakra-ui/react"

import GithubRepoList from './GithubRepoList';
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

export default function GithubRepoDetails() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [repos, setRepos] = useState([]);

      const fetchUsers= async () => {
    const response = await fetch("http://localhost:8004/githubUser/users")
    const users = await response.json()
    setUsers(users)
  }
  
const handleToggleScrapTime = (index) => {
    const newRepos = [...repos];
    newRepos[index].showScrapTime = !newRepos[index].showScrapTime;
    setRepos(newRepos);
  };

useEffect(() => {
    fetchUsers()
  }, [])


  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <>
    <ChakraProvider>
      <ErrorBoundary>
          <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
    >
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Select a GitHub user to see their public repositories:
      </Text>
      <Select value={selectedUser} onChange={handleUserChange} mb="4">
        <option value="">Select a user</option>
        {users.map(user => (
          <option key={user} value={user}>{user}</option>
        ))}
      </Select>
      {selectedUser.length > 0 && (
        <Box>

    <GithubRepoList  githubUser={selectedUser} />              
            </Box>
     
            )}
            </Box>
        </ErrorBoundary>
      </ChakraProvider>
      </>
  );
}

 