import personIcon from './icons/person.svg';
import mailIcon from './icons/mail.svg';
import confirmationPasswordIcon from './icons/password.svg';
import passwordIcon from './icons/lock2.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmationPassword,setConfirmationPassword] = useState('');

  const [missingUsername, setUserNameMessage] = useState('');
  const [passwordMismatch, setPasswordMessage] = useState('');

  const [formSave, successMessage] = useState('');

  function updateUsername(e){
    setUsername(e.target.value);
  }

  function updateEmail(e){
    setEmail(e.target.value);
  }

  function updatePassword(e){
    setPassword(e.target.value);
  }

  function updateConfirmationPassword(e){
    setConfirmationPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    if(password !== confirmationPassword){
        setPasswordMessage('Password does not match!*');
        return;
    }

    if(username === '') {
      setUserNameMessage('username is mandatory*');
      return;
    }

    setPasswordMessage('');
    setUserNameMessage('');

    successMessage('Form Submitted Successfully!');
    setTimeout(() => {successMessage('')}, 3000);
  }

  return (
       <>
          {formSave ? <h2>{formSave}</h2> : ''}
          <div className="box">
            <h1>Sign up</h1>
              <form onSubmit={handleSubmit}>
                {missingUsername ? <span className='mandatory-field'> {missingUsername} </span> : ''}
                <div className="sub-item">
                  <img src={personIcon} alt='person'/>
                  <input type='text'
                    placeholder='username'
                    onChange={updateUsername}
                    value={username}
                  />
                </div>
                <div className="sub-item">
                    <img src={mailIcon} alt='person'/>
                    <input type='email'
                     placeholder='email'
                     onChange={updateEmail}
                     value={email}
                     />
                </div> 
                <div className="sub-item">
                    <img src={passwordIcon} alt='person'/>
                    <input type='password' 
                     placeholder='password'
                     onChange={updatePassword}
                     value={password}
                     />
                </div> 
                {passwordMismatch ? <span className='mandatory-field'> {passwordMismatch} </span> : ''}
                <div className="sub-item">
                    <img src={confirmationPasswordIcon} alt='person'/>
                    <input type='password'
                     placeholder='confirm password'
                     onChange={updateConfirmationPassword}
                     value={confirmationPassword}
                    />
                </div> 
                <div className='save-button'>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
        </>
  );
}

export default App;
