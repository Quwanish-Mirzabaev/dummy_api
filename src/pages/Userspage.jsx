import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Userspage.css";
import SearchStore from "./SearchStore";  


const src = "https://dummyjson.com/users";

const Userspage = observer(() => {
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(src);
        setUsers(response.data.users);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching users: {error.message}</div>;
  }

  return (
    <>
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Search User"
            value={SearchStore.search}
            onChange={(e) => SearchStore.setSearch(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <th>№</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>Birth date</th>
          </thead>
          <tbody>
            {users
              .filter((item) => {
                return SearchStore.search.toLowerCase() === ""
                  ? item
                  : item.firstName.toLowerCase().includes(SearchStore.search);
              })
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <Link to={"/users/user/" + user.id}>{user.firstName}</Link>
                  </td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.birthDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default Userspage;
