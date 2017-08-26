import React, { Component } from 'react'

import 'prismjs/themes/prism-okaidia.css'

class Layout extends Component {
  render() {
    return (
      <main>
        {this.props.children()}
      </main>
    )
  }
}

export default Layout
