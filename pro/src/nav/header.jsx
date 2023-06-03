import React from 'react'
import './header.css'
const header = () => {
  return (
    <>
      <div class="frist">
        <from>
          <div class="fro">
            <h5>Login from</h5>
             
            <input type="email" placeholder="Enter Email" /><br />
            <input type="password" placeholder="Enter Password" />
            <br />
            <button class="btn">Continue</button>
            <p>OR</p>
            <div class="btn2">
              <img src="data:image/png;base64,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" alt='google' />
              <h1>continue with google</h1>
            </div>
            <hr />
            <div class="last">
              <h2>can't login?</h2>
              <h4>sing up for an account</h4>
            </div>
          </div>
        </from>
      </div>

    </>
  )
}

export default header