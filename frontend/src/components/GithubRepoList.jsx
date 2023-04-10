import React, {useState, useEffect } from 'react';
import {
  Button,
  Table,
  Tbody,
  Td,
  Thead,
  Tr
} from "@chakra-ui/react"
  
export const ReposContext = React.createContext({
  repos: [], fetchRepos: () => {}
})

function GithubRepoList(githubUser) {
    console.log('githubUser',githubUser)
 const [repos, setRepos] = useState([]);
    const fetchRepos = async (forSelectedUser) => {
    const response = await fetch(`http://localhost:8004/githubUser/${forSelectedUser}/repos`)
    const repos = await response.json()
    setRepos(repos)
    }
    useEffect(() => {
      fetchRepos(githubUser.githubUser);
  }, [githubUser]);
  
const handleToggleScrapTime = (index) => {
    const newRepos = [...repos];
    newRepos[index].showScrapTime = !newRepos[index].showScrapTime;
    setRepos(newRepos);
  };


  return (
    <div>
     <Table variant="simple" mt={5}>
            <Thead>
              <Tr fontSize="lg" fontWeight="bold" mb="2">
                {githubUser.githubUser}'s public repositories:
              </Tr>
            </Thead>
            <Tbody>
              {repos?.map((repo, index) => (
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
    </div>
  );
}

export default GithubRepoList;