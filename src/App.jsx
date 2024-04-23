import './App.css'

function App() {

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('User Added Successfully')
          form.reset();
        }
      })
  }

  return (
    <>
      <h2>Simple CRUD Client</h2>

      <form onSubmit={handleAddUser}>
        <input required type="text" name='name' id='name' />
        <br />
        <input required type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
