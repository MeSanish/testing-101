import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchPostsAction } from 'src/actionCreators/posts';

class Main extends Component<{ fetchPostsAction: typeof fetchPostsAction }> {
  async componentDidMount() {
    try {
      await new Promise((resolve, reject) => {
        const payload = { search: 'test', filter: { country: '1', type: '1' } }
        this.props.fetchPostsAction(payload, resolve, reject)
      })
    } catch (error) {
      throw error;
    }
  }
  render() {
    return (
      <div>
        <p>Main...</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fetchPostsAction }, dispatch)

export default connect(null, mapDispatchToProps)(Main);