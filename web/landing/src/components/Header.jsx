import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../assets/images/Logo2.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const maxScroll = 200; // Distância máxima para o efeito completo
                    const progress = Math.min(scrollTop / maxScroll, 1);
                    setScrollProgress(progress);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Calcular valores baseados no progresso do scroll
    const backgroundOpacity = scrollProgress * 0.15; // 0 a 0.15
    const backdropBlur = scrollProgress * 25; // 0 a 25px
    const borderOpacity = scrollProgress * 0.2; // 0 a 0.2
    const shadowOpacity = scrollProgress * 0.1; // 0 a 0.1
    const padding = 15 - (scrollProgress * 5); // 15px a 10px

    const headerStyle = {
        background: `rgba(255, 255, 255, ${backgroundOpacity})`,
        backdropFilter: `blur(${backdropBlur}px)`,
        WebkitBackdropFilter: `blur(${backdropBlur}px)`,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
        boxShadow: `0 4px 15px rgba(0, 0, 0, ${shadowOpacity})`,
        padding: `${padding}px 0`,
    };

    return (
        <header className="header" style={headerStyle}>
            <nav className="navbar">
                <div className="header-grid container">

                    <div className="logo">
                        <img src={Logo} alt="Mikrotik Lucrativo Logo" />
                        <span>ProverTech</span>
                    </div>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" className="active">Início</a></li>
                        <li><a href="#results">Resultados</a></li>
                        <li><a href="#segments">Segmentos</a></li>
                        <li><a href="#investment">Investimento</a></li>
                        <li><a href="#faq">Dúvidas</a></li>
                        <li className="menu-login-btn">
                            <a href="/checkout" className="btn btn-login">
                                <span>Começar Agora</span>
                                <i className="fas fa-rocket"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="header-actions">
                        {/* Botão removido - agora temos "Fazer Login" no menu mobile */}
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header; 