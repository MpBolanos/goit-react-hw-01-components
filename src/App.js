import Profile from 'components/Profile';
import userData from 'data/user.json';
import Statistics from 'components/Statistics';
import statisticsrData from 'data/data.json';
import FriendList from 'components/FriendList';
import FriendListItem from 'components/FriendListItem';
import friendsData from 'data/friends.json';
import TransactionHistory from 'components/TransactionHistory';
import transactions from 'data/transactions.json';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticsrData} />
      
      <FriendList>
        {friendsData.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;