import { useEffect } from 'react';
import '../styles/PacmanEmbed.css';

import startScreenImg from '../pacman/frontend/designs/pac_man_start_sc.PNG';
import endScreenDefaultImg from '../pacman/frontend/designs/pac_man_you_lost.PNG';
import michaelGhostImg from '../pacman/frontend/designs/michael_ghost.png';
import scottGhostImg from '../pacman/frontend/designs/scott_ghost.png';
import cursedGifImg from '../pacman/frontend/designs/cursed.gif';

export function PacmanGame() {
    useEffect(() => {
        let cleanup;

        (async () => {
            try {
                // Defer imports so DOM nodes exist for query selectors inside the game code.
                const [{ cancelAnimation, resetGame }, { resetWASD }] = await Promise.all([
                    import('../pacman/frontend/js/game.js'),
                    import('../pacman/frontend/js/input.js'),
                ]);

                // ui.js runs as part of main.js and wires up UI + leaderboard fetches.
                await import('../pacman/frontend/js/main.js');

                cleanup = () => {
                    try { cancelAnimation?.(); } catch (e) { console.error(e); }
                    try { resetWASD?.(); } catch (e) { console.error(e); }
                    try { resetGame?.(); } catch (e) { console.error(e); }
                };
            } catch (error) {
                console.error('Failed to load Pac-Man:', error);
            }
        })();

        return () => cleanup?.();
    }, []);

    return (
        <div id="pacmanRoot" className="pacman-shell">
            <div id="startScreen" className="pacman-layer pacman-start">
                <img src={startScreenImg} alt="Pac-Man start" />
                <div className="pacman-inputs">
                    <button id="startButton" className="pacman-button">start</button>
                </div>
            </div>
            <canvas id="gameCanvas" className="pacman-canvas" />
            <p className="pacman-role"><strong>frontend developer &amp; user interface designer</strong> in a team of 6</p>
            <p className="pacman-description">This is a recreation of the classic “Pac-Man” game using HTML, CSS, JavaScript with animation and frame support via Canvas API.</p>
            <em className="pacman-note">*This is the full game with some tweaks, please expect bugs! WASD to move & ESC to quit.</em>

            <div id="endScreen" className="pacman-layer pacman-end">
                <img id="endScImg" src={endScreenDefaultImg} alt="Game over" />
                <div id="endScButtons">
                    <button id="goHomeButton" className="pacman-button">home</button>
                </div>
            </div>
        </div>
    );
}
