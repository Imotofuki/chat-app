import React from 'react'


const signup = () => {
    return (
        <div>
            <div className="form-wrapper">
                <h1>Sign Up</h1>
                <form action=''>
                    <div className="form-item">
                        <input type="text" name="username" required placeholder="ユーザー名"></input>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" required placeholder="パスワード"></input>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password-check" required placeholder="パスワード(確認)"></input>
                    </div>
                    <div className="button-panel">
                        <button type="submit" className="button" title="Sign In">作成</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default signup