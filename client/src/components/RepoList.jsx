import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = ({repos}) => {
  console.log(repos);
  // let searchedRepos = (reposFound, searchTerm) => {
  //   return reposFound.filter(repo => {
  //     if (repo.userName === searchTerm) {
  //       return reposFound.userName.length
  //     }
  //   })
  // }
  return (
    <div>
      <h4>Repo List Search Results: </h4>
      <p>There are {repos.length} repos found.</p>

      <table>
        <tbody>
          <tr>
            <th>userName</th>
            <th>repoName</th>
            <th>html_url</th>
            <th>created_at</th>
          </tr>
          {repos.map((repo, index) => (
            <RepoEntry repo={repo} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RepoList;