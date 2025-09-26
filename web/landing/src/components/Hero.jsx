import React, { useState, useRef } from 'react';
import './Hero.css';

function Hero() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [showOverlay, setShowOverlay] = useState(true);
    const iframeRef = useRef(null);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
        setIsMuted(false);
        setShowOverlay(false);
        
        // Reiniciar o vídeo do começo com áudio
        if (iframeRef.current) {
            const iframe = iframeRef.current;
            const newSrc = iframe.src.replace('&mute=1', '&mute=0').replace('&autoplay=1', '&autoplay=1');
            iframe.src = newSrc;
        }
    };


    return (
        <section id="home" className="hero">
            <div className="container">
                {/* Texto Principal - Acima do Vídeo */}
                <div className="hero-main-text reveal">
                    <h1>Transforme seu <span className="highlight">WiFi</span> em uma <span className="highlight">máquina de fazer dinheiro</span></h1>
                </div>

                {/* Vídeo YouTube - Centro */}
                <div className="hero-video reveal">
                    <div className="video-container">
                        <iframe 
                            ref={iframeRef}
                            width="800" 
                            height="450" 
                            src="https://www.youtube.com/embed/DdqT6f_4SPo?si=ZuPcZZbUK0QRap_I&autoplay=1&mute=1&loop=1&playlist=DdqT6f_4SPo" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                        
                        {/* Overlay Interativo */}
                        {showOverlay && (
                            <div className="video-overlay" onClick={handlePlayVideo}>
                                <div className="overlay-content">
                                    <div className="overlay-text">
                                        <h3>Seu vídeo já começou</h3>
                                        <p>Clique para ouvir</p>
                                    </div>
                                    <div className="audio-icon">
                                        <i className="fas fa-volume-mute"></i>
                                        <div className="sound-waves">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Controles removidos - vídeo limpo após iniciar */}
                    </div>
                </div>

                {/* Texto Secundário - Abaixo do Vídeo */}
                <div className="hero-secondary-text reveal">
                    <p>Venda acesso à internet via PIX automaticamente e de forma simplificada. E faça como nossos parceiros, que chegam a faturar até R$ 1000/dia sem precisar de atendentes. Ideal para locais com pouca ou nenhuma cobertura de internet.</p>
                </div>
            </div>
        </section>
    );
}

export default Hero; 