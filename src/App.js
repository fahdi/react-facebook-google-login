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
        appId=""
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br/>

      <GoogleLogin
        clientId=""
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

    </div>
  );

}

export default App;
