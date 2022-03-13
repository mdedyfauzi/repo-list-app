import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';

export default function Home() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    const getRepoData = async () => {
      await axios
        .get('https://api.github.com/users/mdedyfauzi/repos')
        .then((response) => {
          console.log(response);
          setRepoData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getRepoData();
  }, []);

  return (
    <div className={styles.home}>
      <table className={styles.table}>
        <tr>
          <th>Name</th>
          <th>Created Date</th>
          <th>Updated Date</th>
          <th>Languange</th>
        </tr>
        {repoData &&
          repoData.map((item) => (
            <tr key={item.id}>
              <td>
                <a href={item.html_url}>{item.name}</a>
              </td>
              <td>{item.created_at.slice(0, 10)}</td>
              <td>{item.updated_at.slice(0, 10)}</td>
              <td>{item.language}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
