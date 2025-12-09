import { useState } from 'react'

const curtainStyles = `
    @keyframes openCurtainLeft {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
    
    @keyframes openCurtainRight {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    .curtain-left {
        animation: openCurtainLeft 1s ease-in-out forwards;
    }
    
    .curtain-right {
        animation: openCurtainRight 1s ease-in-out forwards;
    }
    
    .button-fade {
        animation: fadeOut 1s ease-in-out forwards;
    }
`

export function WelcomeScreen({ showWelcome, setShowWelcome }) {
    const [curtainOpen, setCurtainOpen] = useState(false)

    const handleEnterClick = () => {
        setCurtainOpen(true)
    }

    return (
        <>
            {showWelcome && (
                <>
                    <style>{curtainStyles}</style>
                    {/* Left Curtain */}
                    <div 
                        className={curtainOpen ? 'curtain-left' : ''}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '100%',
                            backgroundColor: '#1a1a1a',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h1 style={{
                            fontSize: '4em',
                            color: 'white',
                            margin: 0,
                            textAlign: 'center',
                            userSelect: 'none',
                            fontFamily: "'SuperBubbly', system-ui, Avenir, Helvetica, Arial, sans-serif"
                        }}>Welcome!</h1>
                    </div>
                    {/* Right Curtain */}
                    <div 
                        className={curtainOpen ? 'curtain-right' : ''}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '50%',
                            height: '100%',
                            backgroundColor: '#1a1a1a',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <h1 style={{
                            fontSize: '4em',
                            color: 'white',
                            margin: 0,
                            textAlign: 'center',
                            userSelect: 'none',
                            fontFamily: "'SuperBubbly', system-ui, Avenir, Helvetica, Arial, sans-serif"
                        }}>Welcome!</h1>
                    </div>
                    {/* Enter Button */}
                    <button
                        className={curtainOpen ? 'button-fade' : ''}
                        onClick={handleEnterClick}
                        style={{
                            position: 'fixed',
                            padding: '15px 40px',
                            fontSize: '18px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                            zIndex: 2001,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, 50%)',
                            transition: 'background-color 0.3s ease',
                            fontFamily: "'SuperBubbly', system-ui, Avenir, Helvetica, Arial, sans-serif"
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                        onAnimationEnd={() => {
                            setTimeout(() => setShowWelcome(false), 300)
                        }}
                    >
                        Enter
                    </button>
                </>
            )}
        </>
    )
}
