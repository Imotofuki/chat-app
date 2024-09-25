import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">Chat-App</div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">チャットへ</Link>
                        </li>
                        <li>
                            <Link to="/friend">フレンド</Link>
                        </li>
                        <li>
                            <Link to="/add_friend">フレンド追加</Link>
                        </li>
                        <li>
                            <Link to="/login">ログアウト</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header