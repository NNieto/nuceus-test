import React from "react";
import {
  Spinner
} from "reactstrap";
import request from '../helpers/request';
import CustomNav from './CustomNav';

class Person extends React.Component {
  state = {
    loading: false,
    name:"",
    avatar:"",
    location:""
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
        <>
          <CustomNav back title="Person"/>
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
        </>
    );
  }
}

export default Person;
