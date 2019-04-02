import React, { Component, Fragment } from 'react';
import { connect } from 'dva';

@connect(({ offline, loading }) => ({
  offline,
}))
class Offline extends Component {
  state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'offline/clear',
    });
  }

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

export default Offline;
