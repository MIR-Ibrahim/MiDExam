import logo from './logo.svg';
import './App.css';
import PoolDisplay from './PollDisplay';
import UserParticipation from './UserParticipation';
import AnotherUserParticipation from './AddAnotheUser';
import ThankYou from './ThankYouMessage';

function App() {
  return (
    <div className="App">
      <h1>Pool Display</h1>
      <PoolDisplay />
      <UserParticipation/>
      <AnotherUserParticipation/>
      <ThankYou/>
    </div>
  )
}

export default App;
