import React, {Component} from 'react';
import {signinUser} from '../../actions/index';
import {connect} from 'react-redux';
// import './cool.css';
import axios from 'axios';




class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged: false,
      showError: false,
      submitted: false,
    };
  }




  handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value, error: false });
    }

  handlePasswordChange = (evt) => {
      this.setState({ password: evt.target.value, error: false });
    }






    render() {

       const style4 = {

         backgroundColor: '#99c5ff',
          borderRadius: 5,
          width: '98px',
          textAlign: 'center',
          padding: 5,
          margin: 5,
          color: 'white',
          fontSize: 18,
      }





       const style = {
            textAlign: 'center',
           };


        const style2 = {
          color: '#FF8C00',
        }


           // console.log(this.state.error);
         let errorMessage = ""
        if (this.state.error) {
            errorMessage =  "Sorry incorrect password!"

         }



        // let loading = ""
        // if (this.state.submitted) {
        //   loading =  <div className='loading-indicator'> </div>
        // }





  return (

       <div className="Signin" style={style}>
        <video className="fullscreen-bg__video" playsInline autoPlay muted loop>
                      <source src="video.mp4" type="video/mp4"/>
                    </video>

        

           <form  className="login-form" onSubmit={(event)=>{
                event.preventDefault()
                this.props.dispatch(signinUser(this.state.email, this.state.password))
                }}>

                  <h1>SPORTY</h1>
                  <h2>A Different Kind of Game!</h2>

              <input
                  type="text"
                  required
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                /><br/>
                <input
                  type="password"
                  required
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                /><br/>
                <button style={style4}>Sign In</button>
                <p>{errorMessage}</p>

              </form>


              </div>



    )
  }
}
export default connect() (SignIn)
