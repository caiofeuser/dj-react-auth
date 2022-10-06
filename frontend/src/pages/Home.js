import { useContext, useEffect, useState } from 'react';
import useAxios from '../utils/useAxios';
import Thought from '../components/Thought';
import AuthContext from '../context/AuthContext';

function Home() {
  let { user } = useContext(AuthContext)
  const api = useAxios();
  const [notes, setNotes] = useState([]);
  const [thought, setThought] = useState('');



  useEffect(() => {
    api.get('notes/')
      .then(res =>
        setNotes(res.data))
        notes.forEach(element => {
          // console.log(element)
        });
  }, [api]);


  const handlePost = () => {

    let postData = 
    {
      "title": thought,
      "user": notes.id
    }


    api.post('notes/', postData)
      .then(res => {
        setNotes([...notes, res.data]);
      })
  }

  return (
    <section>
      <h1>Página inicial de {user.username}</h1>
      {/* {user && <li>Bem-vindo, {user.username}</li>} */}

      <hr />
      <div>
        <label> What are you thinking?
          <input type="text" style={{ marginLeft: '1rem' }}
            onChange={e => setThought(e.target.value)}
          ></input>
        </label>
        <button onClick={handlePost} style={{ marginLeft: '1rem' }}>Post!</button>
      </div>
      <div style={{ display: "grid", gridColumn: '1fr 3' }}>
        {notes.map(item => (
          <Thought
            key={item.id}
            notes={item}
            setNote={setNotes}
            user={user.username}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
