import person from './icons/person.svg';
import mail from './icons/mail.svg';
import confirmationPassword from './icons/password.svg';
import password from './icons/lock2.svg';
import './App.css';

function App() {
  return (
          <div className="box">
            <h1>Sign up</h1>
            <div>
              <form>
                <div className="sub-item">
                  <img src={person} alt='person'/>
                  <input type='text' placeholder='username'></input>
                </div>
                <div className="sub-item">
                    <img src={mail} alt='person'/>
                    <input type='email' placeholder='email'></input>
                </div> 
                <div className="sub-item">
                    <img src={password} alt='person'/>
                    <input type='password' placeholder='password'></input>
                </div> 
                <div className="sub-item">
                    <img src={confirmationPassword} alt='person'/>
                    <input type='password' placeholder='confirm password'></input>
                </div> 
                <div className='save-button'>
                  <button type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
  );
}

export default App;
