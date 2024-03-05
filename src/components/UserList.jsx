import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try { 
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setListOfUsers(response.data);  
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-xl text-center uppercase text-cyan-700">User List</h1>
      <ul className="grid grid-cols-2 items-center justify-center overflow-hidden">
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <strong>ID: </strong>
            {user.id} <br />
            <strong> Name: </strong> {user.name} <br />
            <strong>Username: </strong> {user.username} <br />
            <strong>Email: </strong>
            {user.email} <br />
            <strong>Address:</strong> {user.address.street}{" "}
            <strong>Suite: </strong>
            {user.address.suite} <strong>City: </strong> {user.address.city}{" "}
            <strong>Zipcode</strong> {user.address.zipcode} <br />
            <strong>Phone Number: </strong> {user.phone} <br />
            <strong>Website: </strong> {user.website} <br />
            <strong>Company: </strong> {user.company.name} <br />
            <strong>Company's Catchphrase: </strong> {user.company.catchPhrase}{" "}
            <br />
            <strong>Business: </strong> {user.company.bs}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
