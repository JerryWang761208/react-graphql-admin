import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Dashboard extends Component {

  render() {
    if(!this.props.loading){
      console.log(this.props.data.allCats);
    }
    
    
    return (
      <div className="animated fadeIn">
        Hello World
      </div>
    )
  }
}


const MyQuery = gql`
{
  allCats{
    name
  }
}
`;

export default graphql(MyQuery)(Dashboard);
// export default Dashboard;
