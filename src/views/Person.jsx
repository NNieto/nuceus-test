import React from "react";
import {
  Spinner,
  Navbar
} from "reactstrap";
import request from '../helpers/request';
import { Link } from "react-router-dom";

class Person extends React.Component {
  state = {
  }

  componentDidMount() {
    this.getGitHubUser(this.props.match.params.username)
  }

  async getGitHubUser(user) {
    this.setState({loading:true})
    const response = await request.get(`users/${user}`);
    this.setState({
      avatar_url: response.data.avatar_url,
      name: response.data.name,
      location: response.data.location,
      loading:false
    })
  }

  render() {
    return (
        <div className="content">
          <Navbar className="main-nav">
            <Link to="/">
              <img alt="back-button" className="back-image" src="https://icon-library.net/images/white-back-icon/white-back-icon-7.jpg"/>
              Back
            </Link>
            <p>Person</p>
          </Navbar>
          {
            this.state.loading ?
              <Spinner className="spinner-app"/>
            :
              <div className="container main-container">
                <img alt="user-avatar" className="avatar" src={this.state.avatar_url}/>
                <div className="info-container">
                  <div className="middle">
                    <b>{this.state.name}</b>
                    <p>{this.state.location || "no location"}</p>
                  </div>
                </div>
              </div>
          }
        </div>
    );
  }
}

export default Person;
