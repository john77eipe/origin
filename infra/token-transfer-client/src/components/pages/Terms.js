import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Terms extends Component {
  state = {
    accepted: false,
    redirectTo: null
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect push to={this.state.redirectTo} />
    }

    return (
      <>
        <div className="action-card">
          <h1>Accept Terms</h1>
          <p>Please agree to our terms below and click Continue to proceed</p>
          <div className="form-group">
            <div className="terms-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              odio lorem, lacinia sed molestie nec, suscipit quis ligula. Morbi
              vitae ornare felis. Curabitur leo justo, laoreet vel sem ac,
              vestibulum mollis mauris. Maecenas iaculis elit non elit dictum,
              ac pharetra nunc interdum. Mauris volutpat scelerisque quam non
              cursus. Sed eros purus, rhoncus et ex efficitur, dapibus convallis
              justo. Vestibulum diam eros, condimentum ut ante sit amet, porta
              mollis quam. Suspendisse sed magna vestibulum, imperdiet tellus a,
              venenatis metus. Nulla non volutpat dolor, vel placerat risus.
              Maecenas a imperdiet metus. Nulla volutpat lectus ligula, eget
              malesuada eros fringilla eget. Pellentesque porttitor ultricies
              mauris non congue.
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="acceptCheck"
              onClick={e => this.setState({ accepted: e.target.checked })}
            />
            <label className="form-check-label" htmlFor="acceptCheck">
              I have read and agree ot the terms and conditions
            </label>
          </div>
          <button
            className="btn btn-primary btn-lg"
            style={{ marginTop: '40px' }}
            disabled={!this.state.accepted}
            onClick={() => this.setState({ redirectTo: '/otp/setup' })}
          >
            Continue
          </button>
        </div>
      </>
    )
  }
}

export default Terms

require('react-styl')(`
  .terms-wrapper
    border-radius: 10px
    height: 300px
    overflow-y: scroll
    background-color: #e9f0f3
    font-size: 14px
    padding: 20px
    text-align: left
    margin: 40px 0
`)