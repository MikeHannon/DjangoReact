import React from 'react'
import axios from 'axios'
import { URL } from '../config/Api.js'
import Snippet from './snippet.js'

class Snippets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      codeSnippets: [],
    }
    this.getData()
  }
  getData() {
    axios({
      method: 'get',
      url: `${URL}/snippets/`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        this.setState({ codeSnippets: response.data })
      })
      .catch(err => {
        this.setState({ codeSnippets: [] })
      })
  }
  render() {
    const snippets = this.state.codeSnippets.map(snip => {
      return <Snippet key={snip.id} code={snip.code} />
    })
    return <div>{snippets}</div>
  }
}

export default Snippets
