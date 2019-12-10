import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (repos) => {
  return (
    <div>
      <h4>Repo List Search Results: </h4>
      There are {props.repos.length} repos found.

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