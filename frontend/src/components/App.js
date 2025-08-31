import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './HomePage';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

function App(props) {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const appDiv = document.getElementById('app');
const root = createRoot(appDiv);
root.render(<App name="Hello" />);

export default App;
