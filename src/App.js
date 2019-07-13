import React from 'react';
import './App.css';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function App() {

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <FacebookLogin
        appId="" // Add your app id from facebook here
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br/>

      <GoogleLogin
        clientId="" // Add your client id from google credentials here
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

    </div>
  );

}

export default App;
