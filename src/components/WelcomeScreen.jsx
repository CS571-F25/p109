import { useState } from 'react'
import '../styles/WelcomeScreen.css'

export function WelcomeScreen({ showWelcome, setShowWelcome }) {
    const [curtainOpen, setCurtainOpen] = useState(false)

    const handleEnterClick = () => {
        setCurtainOpen(true)
    }

    return (
        <>
            {showWelcome && (
                <>
                    {/* Left Curtain */}
                    <div 
                        className={`welcome-curtain welcome-curtain-left ${curtainOpen ? 'curtain-left' : ''}`}
                    >
                        <h2 className="welcome-text">welcome to my portfolio!</h2>
                    </div>
                    {/* Right Curtain */}
                    <div 
                        className={`welcome-curtain welcome-curtain-right ${curtainOpen ? 'curtain-right' : ''}`}
                    >
                        <h2 className="welcome-text">left-click + drag & zoom!</h2>
                    </div>
                    {/* Enter Button */}
                    <button
                        className={`welcome-enter-button ${curtainOpen ? 'button-fade' : ''}`}
                        onClick={handleEnterClick}
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
