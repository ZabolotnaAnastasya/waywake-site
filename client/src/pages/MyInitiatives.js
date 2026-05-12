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
        <div style={{ padding: '40px 5% 80px', width: '100%', boxSizing: 'border-box' }}>

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
                    width: 'auto', padding: '10px 28px', margin: 0,
                    background: 'rgba(255,80,80,0.3)',
                }}>
                    Вийти
                </button>
            </div>

            {/* Рекламна секція */}
            <div className="glass-box" style={{ marginBottom: '30px' }}>
                <h2>оскільки весь проект є безкоштовним для користувачів - трішки реклами</h2>
            </div>

            <div className="glass-box" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                textAlign: 'left',
                flexWrap: 'wrap',
                borderColor: 'rgba(200,160,255,0.3)',
                maxWidth: '900px',
            }}>
                {/* Фото реклами */}
                <img
                    src={process.env.PUBLIC_URL + '/recruitment.png'}
                    alt="Реклама"
                    style={{
                        width: '260px',
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        border: '1px solid rgba(200,160,255,0.3)',
                        flexShrink: 0,
                    }}
                    onError={e => { e.target.style.display = 'none'; }}
                />

                {/* Текст */}
                <div style={{ flex: '1 1 200px' }}>
                    <h2 style={{ color: '#c8a0ff', marginTop: 0 }}>Реклама на WayWake</h2>
                    <p style={{ color: '#ccc', lineHeight: 1.7, margin: '0 0 16px' }}>
                        Якщо ви хочете розмістити свою рекламу, звʼяжіться з нами. Контакти в футері.
                    </p>
                    <a
                        href="https://github.com/LastCarrige/Smart-Alarm-work/tree/main/watch_app"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 28px',
                            borderRadius: '12px',
                            background: '#c8a0ff',
                            color: '#000',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                        }}
                        onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
                        onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
                    >
                        ↓ Завантажити для годинника
                    </a>
                </div>
            </div>

            {/* Joined initiatives */}
            {myProjects.length > 0 && (
                <div className="project-list" style={{ marginTop: '40px' }}>
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