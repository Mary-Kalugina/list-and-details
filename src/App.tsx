import React, {useEffect, useState} from 'react';
import List from './components/List';
import Details from './components/Details';

const App: React.FC = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState<{id: number, name: string} | null>(null);

  useEffect( () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.response);
          setList(data);
        } catch (e) {
          console.error(e);
        }
      }
    };
    xhr.send();
  }, [])

  return (
    <>
    <div className="list">
   { list.map((user, index) => (
      <List key={index} user={user} chooseUser={setUser}/>
    ))}
   </div>
    {user ? <Details info={user} /> : null}
    </>
  );
}

export default App;
