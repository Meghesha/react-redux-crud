import React from 'react';
import { config } from '../config';
import { PublicClientApplication } from '@azure/msal-browser';
import { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            error : null,
            isAuthenticated : false,
            user:{}
        };
        this.login = this.login.bind(this)

        //Initialize the MSAL application object
        this.PublicClientApplication = new PublicClientApplication({
            auth: {
                clientId: config.appId,
                redirectUri: config.redirectUri,
                authority: config.authority
            },
            cache: {
                cacheLocation: "sessionStorage",
                storeAuthStateInCookie : true
            }
        });
    }
    async login(){
        try{
            // Login via popup
            await this.PublicClientApplication.loginPopup(
                {
                    scopes: config.scopes,
                    prompt: "select account"
                }
            );
            this.setState({isAuthenticated:true})
        }
        catch(err){
            this.setState({
                isAuthenticated: false,
                user: {},
                error: err
            });
        }
    }
    
    logout(){
        this.PublicClientApplication.logout();
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.isAuthenticated ? <p>Successfully logged in</p> :
                    <p> <button onClick={()=> this.login()}>Login in</button> </p>
                }
            </React.Fragment>
        )
    }
}

export default Login;