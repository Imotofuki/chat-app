import React from 'react'
// import signup from "./Signup";
// import { Link } from 'react-router-dom';
import '../../css/sign.css';
import Button from '../Button';

const Login = () => {
    return (

        <div className='background'>
            <div className="form-wrapper">
                <h1>Sign In</h1>
                <form action=''>
                    <div className="form-item">
                        <input type="text" name="username" required placeholder="ユーザー名"></input>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" required placeholder="パスワード"></input>
                    </div>
                    <div className="button-panel">
                        <button type="submit" className="button" title="Sign In">ログイン</button>
                    </div>
                </form>
                <div className="form-footer">
                    <div className="custom-line" />
                    <div className='New-title'>アカウントを持っていない方</div>
                    <p><button className="button" onClick={Button}>新規登録</button></p>
                </div>
            </div>
        </div>
    )
}

export default Login