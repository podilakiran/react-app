import React, {useState, useReducer} from 'react';

import classes from './Auth.module.css';

const AuthObj = (state, action) => {
    return {
      isAuthorized: action,
    };
}

const Auth = props => {
/*
    const [enteredUserID, setUserid] = useState();
    const [enteredPassword, setPassword] = useState();

    const [] = useReducer(AuthObj, {
        isAuthorized: false
    })


*/
    const loginSubmitHandler  = (state) => {

            console.log(state);
    }

    return <div className={classes.summary} >
        <h1>Please Log In</h1>
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit" onClick={loginSubmitHandler}>Submit</button>
            </div>
        </form>
    </div>
};

export default Auth;