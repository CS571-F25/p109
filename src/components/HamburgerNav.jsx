import { useState } from 'react'
import '../styles/HamburgerNav.css'

export function HamburgerNav({ onNavigate }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleNavClick = (path) => {
        onNavigate(path)
        setIsOpen(false)
    }

    return (
        <div 
            className="hamburger-container"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button 
                className="hamburger"
                aria-label="Menu"
            >
                <span style={{ backgroundColor: 'white' }}></span>
                <span style={{ backgroundColor: 'white' }}></span>
                <span style={{ backgroundColor: 'white' }}></span>
            </button>

            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <button onClick={() => handleNavClick('/')}>
                            home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavClick('/about-me')}>
                            about me
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavClick('/projects')}>
                            projects
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavClick('/experience')}>
                            experience
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
