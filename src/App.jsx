import Button from './Button';
import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendsList';


function App() {

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      
    </div>
  )
}

export default App
