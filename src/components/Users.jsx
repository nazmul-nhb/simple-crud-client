import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('User Deleted Successfully!');
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })
    }

    return (
        <div>
            <h2>{users?.length}</h2>
            {
                users?.map(user => <p key={user._id}>
                    {user?.name} : {user?.email}
                    <button
                        onClick={() => handleDelete(user._id)}>
                        x
                    </button>
                </p>)
            }
        </div>
    );
};

export default Users;