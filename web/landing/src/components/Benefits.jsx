import React from 'react';
import './Benefits.css';
import BenefitsImage from '../assets/images/2025-06-12 18 40 05.png';

function Benefits() {
    const benefits = [
        {
            icon: 'fa-money-bill-wave',
            title: 'Aumento de Receita',
            description: 'Transforme seu WiFi em uma fonte de renda adicional para seu negócio.'
        },
        {
            icon: 'fa-clock',
            title: 'Economia de Tempo',
            description: 'Automatize todo o processo de venda e liberação de acesso à internet.'
        },
        {
            icon: 'fa-chart-pie',
            title: 'Dados Valiosos',
            description: 'Colete informações importantes sobre seus clientes e seus hábitos de uso.'
        },
        {
            icon: 'fa-smile',
            title: 'Satisfação do Cliente',
            description: 'Ofereça uma experiência moderna e sem complicações para seus clientes.'
        }
    ];

    return (
        <section id="benefits" className="benefits">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Benefícios</h2>
                    <p>Veja como nosso sistema pode transformar seu negócio</p>
                </div>
                <div className="benefits-content">
                    <div className="benefits-image reveal">
                        <img src={BenefitsImage} alt="Benefícios do sistema" />
                    </div>
                    <div className="benefits-list reveal">
                        {benefits.map((benefit, index) => (
                            <div className="benefit-item" key={index}>
                                <div className="benefit-icon">
                                    <i className={`fas ${benefit.icon}`}></i>
                                </div>
                                <div className="benefit-text">
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits; 