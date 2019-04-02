import React, { Component, Fragment } from 'react';
import { connect } from 'dva';

@connect(({ engs, loading }) => ({
  engs,
}))
class Engs extends Component {
  state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'engs/clear',
    });
  }

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

export default Engs;
