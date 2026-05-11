import React from 'react';

function About() {
    return (
        <section className="about-page">
            <div style={{
                margin: '60px auto',
                maxWidth: '1100px',
                padding: '0 5%',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '40px',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                }}>

                    {/* Лівий блок — текст */}
                    <div className="glass-box" style={{
                        flex: '1 1 340px',
                        margin: 0,
                        maxWidth: 'none',
                        textAlign: 'left',
                    }}>
                        <h2 style={{ textAlign: 'center' }}>Хто ми?</h2>
                        <img
                            src={process.env.PUBLIC_URL + '/logo.png'}
                            alt="Логотип"
                            style={{ height: '120px', display: 'block', margin: '0 auto 24px' }}
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo'; }}
                        />
                        <p>
                            Ми — команда розробників додатку <strong>WayWake</strong>,
                            що допомагає прокидатися в гармонії з природою.
                        </p>
                        <p>
                            Проєкт створений студентами
                            <strong> Національного університету "Львівська політехніка"</strong> у 2025 році.
                        </p>

                        <hr style={{ border: '0.5px solid rgba(255,255,255,0.2)', margin: '24px 0' }} />

                        <h3>Наша місія</h3>
                        <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
                            "Прокидайся красиво — кожен день."
                        </p>
                        <p>
                            WayWake — це розумний будильник з природними звуками,
                            персоналізованими маршрутами та підтримкою годинника.
                            Ми хочемо зробити ранок найкращою частиною дня.
                        </p>
                    </div>

                    {/* Правий блок — відео */}
                    <div style={{
                        flex: '1 1 340px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}>
                        <div className="glass-box" style={{
                            margin: 0,
                            maxWidth: 'none',
                            padding: '24px',
                        }}>
                            <h2 style={{ marginTop: 0, marginBottom: '20px' }}>Демо додатку</h2>
                            <video
                                src={process.env.PUBLIC_URL + '/demo.mp4'}
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{
                                    width: '100%',
                                    borderRadius: '14px',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    display: 'block',
                                }}
                            >
                                Ваш браузер не підтримує відео.
                            </video>
                            <p style={{ color: '#888', fontSize: '0.82rem', marginTop: '12px', marginBottom: 0, textAlign: 'center' }}>
                                WayWake — демонстрація можливостей
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;