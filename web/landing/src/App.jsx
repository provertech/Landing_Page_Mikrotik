import React, { useEffect } from 'react';
import './App.css';

// Importar componentes
import Header from './components/Header';
import Hero from './components/Hero';
import StarlinkSection from './components/StarlinkSection';
import MikrotikSection from './components/MikrotikSection';
import MercadoPagoSection from './components/MercadoPagoSection';
import Segments from './components/Segments';
import PlanSelector from './components/PlanSelector';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Galaxy from './components/Galaxy';
// import Blur from './components/Blur';


function App() {
    useEffect(() => {
        // Função para revelar elementos ao rolar
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.reveal');

            reveals.forEach((reveal) => {
                const windowHeight = window.innerHeight;
                const elementTop = reveal.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                } else {
                    reveal.classList.remove('active');
                }
            });
        };

        // Função para destacar links de navegação com base na rolagem
        const highlightNavOnScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-menu a');

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        // Adicionar event listeners para scroll
        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('scroll', highlightNavOnScroll);

        // Inicializar
        revealOnScroll();
        highlightNavOnScroll();

        // Limpar event listeners
        return () => {
            window.removeEventListener('scroll', revealOnScroll);
            window.removeEventListener('scroll', highlightNavOnScroll);
        };
    }, []);

    return (
        <div className="landing-page">
            {/* Galaxy Background */}
            <div className="galaxy-background">
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={0.8}
                    glowIntensity={0.2}
                    saturation={0.1}
                    hueShift={220}
                    starSpeed={0.2}
                    twinkleIntensity={0.3}
                    rotationSpeed={0.03}
                    transparent={true}
                />
            </div>

            {/* Content */}
            <div className="content-overlay">
                <Header />
                <Hero />
                <StarlinkSection />
                <MikrotikSection />
                <MercadoPagoSection />
                <Segments />
                <PlanSelector />
                <FAQ />
                <Footer />
            </div>
        </div>
    );
}

export default App; 