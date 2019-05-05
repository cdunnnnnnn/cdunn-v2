import React, { Component } from 'react'

class PageHome extends Component {
  constructor(props) {
    super(props)
    this.state = { test: [] }
  }

  componentDidMount = async () => {
    const response = await fetch('/lib/json/test.json', {
      method: 'GET'
    })
    const json = await response.json()

    this.setState({ test: json })
  }
  render() {
    const items = this.state.test.map(item => {
      return <li key={item._id}>{item.name}</li>
    })

    return <ul>{items}</ul>
  }
}

export default PageHome
