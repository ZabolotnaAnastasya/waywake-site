import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
    return (
        <header>
            <div className="header-container">
                <h1>WayWake</h1>
                <nav>
                    <ul>
                        <li><Link to="/about">Наше комʼюніті</Link></li>
                        <li><Link to="/">Версії додатку</Link></li>
                        <li><Link to="/my-initiatives">Мій кабінет</Link></li>
                        {user
                            ? <li><button onClick={onLogout} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem', opacity: 0.8 }}>Вийти</button></li>
                            : <li><Link to="/auth">Увійти</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;