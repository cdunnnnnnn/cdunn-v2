import React, { Component } from 'react'

class Page404 extends Component {
  render() {
    return (
      <>
        <h2 className="font-normal font-mono leading-tight">{`{ status: 404, message: "Document Not Found" }`}</h2>
        <p className="text-lg leading-loose text-grey-dark">
          Oops! We can't find the page you were looking for.
        </p>
      </>
    )
  }
}

export default Page404
