import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('User Updated Successfully!');
                }
            })
    }

    return (
        <div>
            <h3>Update Info of {loadedUser.name}</h3>

            <form onSubmit={handleUpdateUser}>
                <input required type="text" name='name' defaultValue={loadedUser?.name} id='name' />
                <br />
                <input required type="email" name="email" defaultValue={loadedUser?.email} id="email" />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;