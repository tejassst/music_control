import React from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';

function HomePage(props) {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <p>This is the home page</p>
        </Route>
        <Route path="/join" element={RoomJoinPage} />
        <Route path="/create" element={CreateRoomPage} />
      </Routes>
    </Router>
  );
}

export default HomePage;
