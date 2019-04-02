import React, { Component, Fragment } from 'react';
import { connect } from 'dva';

@connect(({ emap, loading }) => ({
  emap,
}))
class EMap extends Component {
  state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'emap/clear',
    });
  }

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

export default EMap;
