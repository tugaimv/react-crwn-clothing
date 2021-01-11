
import './App.css';

import UserProfile from './components/user-profile.component';
import UserList from './components/user-list.component';

function App() {
  return (
    <div className="App">
      <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
      <UserProfile name='UserTest' email='test@email.com' dataSource='https://jsonplaceholder.typicode.com/posts' />
    </div>
  );
}

export default App;
