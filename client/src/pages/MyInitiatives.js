import React from 'react';
import { Link } from 'react-router-dom';
import InitiativeCard from '../components/InitiativeCard';

function MyInitiatives({ initiatives, joinedIds, onLeave, onRate, user, onLogout }) {

    if (!user) {
        return (
            <div style={{ padding: '5% 0', display: 'flex', justifyContent: 'center' }}>
                <div className="glass-box" style={{ padding: '60px 40px' }}>
                    <h2 style={{ textTransform: 'lowercase' }}>привіт!</h2>
                    <p style={{ opacity: 0.8, marginBottom: '30px' }}>
                        щоб переглянути свій кабінет, увійдіть або зареєструйтеся
                    </p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <Link to="/auth" className="join-btn" style={{ textDecoration: 'none', width: '160px', display: 'block' }}>
                            Увійти
                        </Link>
                        <Link to="/register" className="join-btn" style={{ textDecoration: 'none', width: '160px', display: 'block', background: 'rgba(255,255,255,0.1)' }}>
                            Реєстрація
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const myProjects = initiatives.filter(item => joinedIds.includes(item.id));

    return (
        <div style={{ padding: '40px 5% 80px', maxWidth: '1100px', margin: '0 auto' }}>

            {/* Profile header */}
            <div className="glass-box" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px 40px',
                marginBottom: '40px',
                textAlign: 'left'
            }}>
                <div>
                    <p style={{ margin: 0, opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Мій кабінет
                    </p>
                    <h2 style={{ margin: '6px 0 0', textTransform: 'none', letterSpacing: 0, fontSize: '1.5rem' }}>
                        {user.email}
                    </h2>
                </div>
                <button onClick={onLogout} className="join-btn" style={{
                    width: 'auto',
                    padding: '10px 28px',
                    margin: 0,
                    background: 'rgba(255,80,80,0.3)',
                }}>
                    Вийти
                </button>
            </div>

            {/* Joined initiatives */}
            <div className="glass-box" style={{ marginBottom: '30px' }}>
                <h2>Мої ініціативи</h2>
                <p style={{ color: '#aaa', margin: 0 }}>
                    {myProjects.length > 0
                        ? `Ви долучились до ${myProjects.length} ініціатив`
                        : 'Ви ще не долучились до жодної ініціативи'}
                </p>
            </div>

            {myProjects.length > 0 && (
                <div className="project-list">
                    {myProjects.map(item => (
                        <InitiativeCard
                            key={item.id}
                            item={item}
                            onJoin={onLeave}
                            onRate={onRate}
                            isJoined={true}
                            isCabinet={true}
                            user={user}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyInitiatives;