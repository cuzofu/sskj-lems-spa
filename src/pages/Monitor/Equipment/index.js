import React, { Component, Fragment } from 'react';
import { connect } from 'dva';

@connect(({ equipment, loading }) => ({
  equipment,
}))
class Equipment extends Component {
  state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'equipment/clear',
    });
  }

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

export default Equipment;
