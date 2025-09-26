import React from 'react';
import './Footer.css';
import Logo from '../assets/images/Logo2.png';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <div className="logo-container">
                            <img src={Logo} alt="ProverTech Logo" />
                            <h3>ProverTech</h3>
                        </div>
                        <p>Transformando seu negócio com soluções inteligentes de conectividade.</p>
                        <div className="company-info">
                            <p className="cnpj">CNPJ: 41.296.553/0001-10</p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-links-column">
                            <h4>Links Rápidos</h4>
                            <ul>
                                <li><a href="#home">Início</a></li>
                                <li><a href="#features">Recursos</a></li>
                                <li><a href="#case-study">Caso de Sucesso</a></li>
                                <li><a href="#benefits">Benefícios</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </div>
                        <div className="footer-links-column">
                            <h4>Plataforma</h4>
                            <ul>
                                <li><a href="/landing#plans">Planos</a></li>
                                <li><a href="#">Documentação</a></li>
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="footer-links-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Termos de Serviço</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Política de Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} ProverTech. Todos os direitos reservados.</p>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/waleson.xavier/" target="_blank" rel="noopener noreferrer" title="Instagram Waleson Xavier">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.instagram.com/prover.tech" target="_blank" rel="noopener noreferrer" title="Instagram ProverTech">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@ProverTech" target="_blank" rel="noopener noreferrer" title="YouTube ProverTech">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 