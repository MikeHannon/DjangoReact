import React from 'react'

class Snippet extends React.PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.code}</p>
      </div>
    )
  }
}

export default Snippet
