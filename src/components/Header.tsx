import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css';

const Header = () => {
    return (
        <div className='header-contents'>
            <header>
                <div className="header-logo">Chat-App</div>

                <nav className='header-nav'>
                    <ul>
                        <li>
                            <Link to="/login" className='header-link'>ログアウト</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header