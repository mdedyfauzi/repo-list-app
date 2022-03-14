import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Card from '../../components/card/Card';

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
      <div className={styles.haeder}></div>
      <div className={styles.main}>
        <div className={styles.cardList}>
          <h1>Newest</h1>
          <div className={styles.cards}> {repoData && repoData.slice(0, 2).map((item) => <Card key={item.id} name={item.name} topics={item.topics} />)}</div>
        </div>
        <div className={styles.content}>
          <h1>Table of Content</h1>
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
      </div>
      <div className={styles.menu}>
        <Sidebar />
      </div>
    </div>
  );
}
