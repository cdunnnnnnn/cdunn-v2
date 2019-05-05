import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="py-8">
        <p>
          copyright {new Date().getFullYear()}{' '}
          <a
            className="text-blue no-underline border-transparent border-solid border-b-2 hover:border-blue"
            href="https://github.com/cdunnnnnnn"
            target="_blank"
          >
            @cdunnnnnnn
          </a>
        </p>
      </div>
    )
  }
}

export default Footer
