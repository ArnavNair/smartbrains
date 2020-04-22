import React, {Component} from 'react';

class Signin extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://frozen-shelf-92518.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(response => response.json())
        .then(user => {
            if(user.id)
            {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    }
    
    render(){
        const {onRouteChange} = this.props;

        return(
            <article className='br3 ba dark-grey b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow5 center'>
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
                             onChange={this.onEmailChange} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"
                             onChange={this.onPasswordChange} />
                        </div>
                        </fieldset>
                        <div className="">
                            <input
                             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                             type="button" value="Sign in" 
                             onClick={this.onSubmitSignIn} />
                        </div>
                        <div className="lh-copy mt3">
                            <p style={{cursor: 'pointer'}} onClick={() => onRouteChange('register')} className="f6 link dim black db">Register</p>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default Signin;