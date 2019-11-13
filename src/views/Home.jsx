import React from 'react';
import CustomNav from './CustomNav';
import { Link } from "react-router-dom";
const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

const Home = (props)=>(
  <>
    <CustomNav title="Home"/>
    <div className="container">
      <h1>Top 5 GitHub Users</h1>
      <h4>Tap the username to see more information</h4>
      {
        topFive.map((user)=>(
          <Link className="btn btn-info guthub-user-btn" key={user} color="primary" to={`/person/${user}`}>{user}</Link>
        ))
      }
    </div>
  </>
  )

export default Home;
