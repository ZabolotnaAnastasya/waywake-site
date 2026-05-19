import React from 'react';

const platforms = [
    {
        id: 'android',
        label: 'Android',
        icon: '🤖',
        bg: 'linear-gradient(135deg, rgba(61,220,132,0.15), rgba(0,0,0,0.3))',
        border: 'rgba(61,220,132,0.3)',
        accent: '#3ddc84',
        badge: 'Google Play',
        badgeBg: 'rgba(61,220,132,0.2)',
        desc: 'Для смартфонів на Android 8.0 і вище',
        size: '24 МБ',
        version: 'v2.1.0',
        link: 'https://github.com/LastCarrige/waywake',
    },
    {
        id: 'ios',
        label: 'iOS',
        icon: '',
        bg: 'linear-gradient(135deg, rgba(100,180,255,0.15), rgba(0,0,0,0.3))',
        border: 'rgba(100,180,255,0.3)',
        accent: '#64b4ff',
        badge: 'App Store',
        badgeBg: 'rgba(100,180,255,0.2)',
        desc: 'Для iPhone та iPad з iOS 14+',
        size: '31 МБ',
        version: 'v2.1.0',
        link: 'https://github.com/LastCarrige/waywake',
    },
    {
        id: 'watch',
        label: 'WearOS / Apple Watch',
        icon: '⌚',
        bg: 'linear-gradient(135deg, rgba(200,160,255,0.15), rgba(0,0,0,0.3))',
        border: 'rgba(200,160,255,0.3)',
        accent: '#c8a0ff',
        badge: 'Watch App',
        badgeBg: 'rgba(200,160,255,0.2)',
        desc: 'Повна версія для розумного годинника',
        size: '8 МБ',
        version: 'v1.4.2',
        link: 'https://github.com/LastCarrige/Smart-Alarm-work/tree/main/watch_app',
    },
];

function Home() {
    return (
        <div style={{ padding: '40px 5% 80px', width: '100%', boxSizing: 'border-box' }}>

            {/* Hero */}
            <div className="glass-box" style={{ marginBottom: '50px', padding: '60px 40px' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>WayWake</div>
                <h1 style={{
                    fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
                    margin: '0 0 16px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase'
                }}>
                    Завантажити додаток
                </h1>
                <p style={{ color: '#ccc', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
                    Встановіть WayWake на свій пристрій та прокидайтеся разом з природою щодня
                </p>
            </div>

            {/* Platform cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '28px',
                maxWidth: '1100px',
                margin: '0 auto',
            }}>
                {platforms.map(p => (
                    <div key={p.id} style={{
                        background: p.bg,
                        border: `1px solid ${p.border}`,
                        borderRadius: '22px',
                        padding: '36px 30px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        transition: 'transform 0.25s, box-shadow 0.25s',
                    }}
                         onMouseEnter={e => {
                             e.currentTarget.style.transform = 'translateY(-6px)';
                             e.currentTarget.style.boxShadow = `0 16px 40px ${p.border}`;
                         }}
                         onMouseLeave={e => {
                             e.currentTarget.style.transform = 'translateY(0)';
                             e.currentTarget.style.boxShadow = 'none';
                         }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '2.8rem', lineHeight: 1 }}>{p.icon}</span>
                            <span style={{
                                background: p.badgeBg,
                                border: `1px solid ${p.border}`,
                                color: p.accent,
                                borderRadius: '8px',
                                padding: '4px 12px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                            }}>{p.badge}</span>
                        </div>

                        <div>
                            <h2 style={{
                                margin: '0 0 8px',
                                fontSize: '1.35rem',
                                color: p.accent,
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                            }}>{p.label}</h2>
                            <p style={{ margin: 0, color: '#bbb', fontSize: '0.92rem', lineHeight: 1.6 }}>
                                {p.desc}
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            fontSize: '0.8rem',
                            color: '#888',
                            borderTop: `1px solid ${p.border}`,
                            paddingTop: '14px',
                        }}>
                            <span>📦 {p.size}</span>
                            <span>🔖 {p.version}</span>
                        </div>

                        <a
                            href={p.link}
                            target={p.link !== '#' ? '_blank' : undefined}
                            rel="noreferrer"
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                padding: '14px',
                                borderRadius: '12px',
                                background: p.accent,
                                color: '#000',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                letterSpacing: '1px',
                                transition: 'filter 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
                            onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
                        >
                            ↓ Завантажити
                        </a>
                    </div>
                ))}
            </div>
            {/* Watch preview section */}
            <div style={{
                maxWidth: '1100px',
                margin: '60px auto 0',
                display: 'flex',
                alignItems: 'center',
                gap: '50px',
                flexWrap: 'wrap',
            }}>
                {/* Фото годинника */}
                <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
                    <img
                        src={process.env.PUBLIC_URL + '/watch.png'}
                        alt="WayWake на годиннику"
                        style={{
                            height: '280px',
                            borderRadius: '24px',
                            border: '1px solid rgba(200,160,255,0.3)',
                            boxShadow: '0 0 40px rgba(200,160,255,0.2)',
                            display: 'block',
                        }}
                        onError={e => { e.target.style.display = 'none'; }}
                    />
                </div>

                {/* Текст */}
                <div className="glass-box" style={{
                    flex: '1 1 300px',
                    margin: 0,
                    maxWidth: 'none',
                    textAlign: 'left',
                    borderColor: 'rgba(200,160,255,0.3)',
                }}>
                    <h2 style={{ color: '#c8a0ff', marginTop: 0 }}>⌚ WayWake на вашому зап'ястку</h2>
                    <p style={{ color: '#ccc', lineHeight: 1.7 }}>
                        Повна версія додатку для WearOS та Apple Watch —
                        будильник, маршрути та природні звуки прямо на годиннику.
                        Без телефону, без зайвих дотиків.
                    </p>
                    <a
                        href="https://github.com/LastCarrige/Smart-Alarm-work/tree/main/watch_app"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'inline-block',
                            marginTop: '16px',
                            padding: '12px 28px',
                            borderRadius: '12px',
                            background: '#c8a0ff',
                            color: '#000',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            letterSpacing: '1px',
                        }}
                        onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
                        onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
                    >
                        ↓ Завантажити для годинника
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;