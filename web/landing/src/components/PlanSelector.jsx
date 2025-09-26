import React from 'react';
import './PlanSelector.css';

function PlanSelector() {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para o sistema de hotspot. Pode me ajudar?");
        const whatsappUrl = `https://wa.me/5592984729297?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="plan-selector" className="plan-selector">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Solicite seu orçamento personalizado</h2>
                    <p>Cada projeto é único. Vamos criar a solução ideal para seu negócio</p>
                </div>

                <div className="quote-content">
                    {/* Benefícios */}
                    <div className="benefits-grid reveal">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <i className="fas fa-robot"></i>
                            </div>
                            <h3>Vendas 100% Automáticas</h3>
                            <p>Sistema vende e libera acesso via PIX sem intervenção manual</p>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <i className="fas fa-building"></i>
                            </div>
                            <h3>Infraestrutura Completa</h3>
                            <p>Plataforma estável com alta disponibilidade e segurança</p>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <h3>Recebimento Imediato</h3>
                            <p>PIX aprovado = acesso liberado instantaneamente</p>
                        </div>

                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <h3>Painel Unificado</h3>
                            <p>Gerencie múltiplos pontos de venda em um só lugar</p>
                        </div>
                    </div>

                    {/* CTA Principal */}
                    <div className="quote-cta reveal">
                        <div className="cta-content">
                            <h3>Pronto para começar a faturar?</h3>
                            <p>Entre em contato e receba seu orçamento personalizado em até 24h</p>
                            
                            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                                <i className="fab fa-whatsapp"></i>
                                Solicitar Orçamento via WhatsApp
                            </button>

                            <div className="contact-info">
                                <p><i className="fas fa-phone"></i> (92) 98472-9297</p>
                                <p><i className="fas fa-envelope"></i> comercial@provertech.tec.br</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlanSelector; 