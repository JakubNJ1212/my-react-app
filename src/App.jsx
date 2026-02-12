import UserGreeting from './UserGreeting'

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Pentro23"/>
    <UserGreeting isLoggedIn={true} />

    </>
  );
}

export default App
