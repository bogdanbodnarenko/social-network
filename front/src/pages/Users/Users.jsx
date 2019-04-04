import React, { Component } from "react";
import * as Styles from "./styles";
import { getUsers } from "../../utils/requests";
import Spinner from "../../UI/Spinner/Spinner";
import SingleUser from "./SingleUser";

export class Users extends Component {
  state = {
    users: null,
    loading: true
  };
  componentDidMount = () => {
    getUsers().then(({ users }) => {
      if (users) {
        this.setState({ users, loading: false });
      }
    });
  };

  render() {
    const { users, loading } = this.state;
    if (!users || loading) {
      return <Spinner size={100}/>;
    }
    return (
      <div>
        <Styles.UsersWrapper>
          {users.map(user => (
            <SingleUser user={user} key={user._id} />
          ))}
        </Styles.UsersWrapper>
      </div>
    );
  }
}

export default Users;