import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      await axios
        .get('https://api.github.com/users/mdedyfauzi')
        .then((response) => {
          console.log(response);
          setUserData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUserData();
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.avatar}>
        <img src={userData.avatar_url} alt="avatar" />
        <ul>
          <li>
            <a href={userData.html_url}>{userData.login}</a>
          </li>
          <li>{userData.bio}</li>
        </ul>
      </div>
      <hr />
      <div className={styles.details}>
        <h1>Details</h1>
        <div>
          <ul>
            <li>
              <label>Name</label>
              <input type="text" disabled value={userData.name} />
            </li>
            <li>
              <label>Location</label>
              <input type="text" disabled value={userData.location} />
            </li>
            <li>
              <label>Email</label>
              <input type="text" disabled value={userData.email} />
            </li>
            <li>
              <label>Blog</label>
              <input type="text" disabled value={userData.blog} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
