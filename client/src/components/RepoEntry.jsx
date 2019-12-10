import React from 'react';

const RepoEntry = ({repo}) => (
  <tr>
    <td>{repo.userName}</td>
    <td>{repo.repoName}</td>
    <td>
      <a href={repo.html_url}>{repo.html_url}</a>
    </td>
    <td>{repo.created_at}</td>
  </tr>
)

export default RepoEntry;