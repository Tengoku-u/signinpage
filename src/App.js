import person from './images/svg.png';
import google from './images/google.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

import logo from './images/medlocatorproject_1.png';


import './App.css';

function App() {
  return (
  
      <body>
        {/*<img src={image} className= "BodyImg" alt="medlocator"/>*/}
        <div>
          <header>
            <img src={logo} className= "MedLogo" alt="medlocator logo"/>
            <button className= "SignIn">Sign in</button>
          </header>
          <main>
              
            <div className="Form">
              <div className= "buttonSwitcher">

              </div>
              <img src= {person} className= "Person" alt=""/>
              <p className="Sign">Sign up on <span>MedLocator</span></p>
                <div> 
                  <input id="email" class="input" type="text" placeholder="E-mail" />
                </div> 
                <div>  
                  <input id="name" class="input" type="text" placeholder="Name" />
                </div> 
                <div>
                  <input id="password" class="input" type="password" placeholder="Password" />
                </div>
                <div>
                  <input id="password" class="input" type="password" placeholder="Confirm Password" />
                </div>
                <div className="Terms">
                  <input type = "checkbox" name = "check" value = "on" /> I agree to the <a className="link" href="www.signin.com">Terms and Conditions</a> and <br/> <a className="link" href="www.signin.com">Privacy Policy</a> of MedLocator
                </div>
                <div>
                  <button className= "SignUp">Sign Up</button>
                </div>
                <p>Or continue with these social profiles</p>
                  <div>
                  <img src={google} className= "Svg" alt="med"/>
                  <img src={facebook} className= "Svg" alt="med"/>
                  <img src={twitter} className= "Svg" alt="med"/>
                  </div>
                <p className= "Account">Already have an account? <a className="link" href="www.signin.com">Sign In</a></p>
              </div>
            
              
          </main>   
        </div>
        <footer>&copy; 2021 MedLocator, All rights reserved.</footer>
      </body>
         
  );
}
export default App;
