import React from 'react';
import logo from '../images/logo.webp';

let Login = ()=>{
    return(
        <React.Fragment>
            <body>
                
           
        <div id="root">
            <div class="mc-auth">
                <img class="mc-auth-pattern" src="images/pattern.webp" alt="line-pattern"/>
                <div class="mc-auth-group">
                    <a class="mc-logo mc-auth-logo" href="#/ecommerce">
                        <img src={logo} alt="blue"/></a>
                        <h4 class="mc-auth-title">Login to Hotash</h4>
                        <form class="mc-auth-form">
                            <div class="mc-icon-field w-100 h-sm">
                                <i class="material-icons">email</i>
                                <input type="email" placeholder="Enter your email"/>
                            </div>
                            <div class="mc-icon-field w-100 h-sm">
                                <i class="material-icons">lock</i>
                                <input type="password" placeholder="Enter your password"/>
                                <button type="button" class="material-icons">visibility</button>
                            </div>
                            {/* <div class="mc-icon-field w-100 h-sm"> */}
                                {/* <i class="material-icons">verified_user</i>
                                <select>
                                    <option>Select Option</option>
                                    <option value="select user role">select user role</option>
                                    <option value="admin">admin</option>
                                    <option value="member">member</option>
                                    <option value="client">client</option>
                                    <option value="manager">manager</option>
                                    <option value="vendor">vendor</option>
                                </select></div> */}
                                <button type="button" class="mc-auth-btn h-sm">sign in</button>
                                <a class="mc-auth-forgot" href="#/forgot-password">forgot password?</a>
                                <div class="mc-auth-divide"><span>or</span>
                               </div>
                               <div class="mc-auth-connect">
                                <a class="twitter h-sm" href="#/login">
                                    <i class="icofont-twitter"></i>
                                    <span>Continue with Twitter</span></a>
                                <a class="facebook h-sm" href="#/login"><i class="icofont-facebook"></i><span>Continue with Facebook</span></a>
                            </div>
                        </form>
                        <div class="mc-auth-navigate"><span>Don't have an account?</span><a href="#/register">register</a></div></div></div></div>
                        </body>
        </React.Fragment>
    )
}

export default Login;