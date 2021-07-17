import React from "react"
import './header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const LOGIN = () => {
    return (
        <div className='login'>
            <img className='img_register' src="./login.jpg"></img>
            <div className='box_login'>
                <form>
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-light btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LOGIN
