import React from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
class View extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
  }
}
const ConnectedView = connect(mapStateToProps)(View)

export default ConnectedView
