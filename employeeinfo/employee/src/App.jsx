import './App.css';
import UserProfile from './components/UserProfile';
const userDeatilsList = [
  {
    uniqueId: 1,
    imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'John Doe',
    role: 'Software Engineer',
  },
  {
    uniqueId: 2,
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Jane Smith',
    role: 'Product Manager',  
    },
  {
    uniqueId: 3,
    imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Mike Johnson',
    role: 'UX Designer',
  },
];

function App() {
  return (
    <div className="App">
      <h1>UserList</h1>
      {userDeatilsList.map((each) => (
        <UserProfile userDetails={each} key={each.uniqueId}  />
      ))}
    </div>
  );
}

export default App
