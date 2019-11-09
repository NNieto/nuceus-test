import React from 'react';
import { Button, Navbar } from 'reactstrap';

import { Link } from "react-router-dom";
const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];
class Home extends React.Component {
  state = {
    collapsed:true
  }

  render() {
    
    return (
        <div>
          <Navbar className="main-nav text-center">
            <p className="text-center">Home</p>
          </Navbar>
          <div className="container">
            <h1>Top 5 GitHub Users</h1>
            <h4>Tap the username to see more information</h4>
            {
              topFive.map((user)=>(
                <Button className="guthub-user-btn" key={user} color="primary">
                  <Link to={`/person/${user}`}>{user}</Link>
                </Button>
              ))
            }
          </div>
        </div>
    );
  }
}

export default Home;
