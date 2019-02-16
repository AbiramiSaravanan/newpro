import React from 'react'
import { Link } from 'react-router-dom'

export default function others() {
  return (
    <div>
      <React.Fragment>
          <ol>
              <Link to="/"Calendar></Link>
              <ul>Remainder</ul>
              <ul>Map</ul>
          </ol>
      </React.Fragment>
    </div>
  )
}
