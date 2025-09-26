import React from 'react';
import './Features.css';

function Features() {
    const features = [
        {
            icon: 'fa-money-bill-wave',
            title: 'Pagamento via PIX',
            description: 'Receba pagamentos instantâneos via PIX, sem necessidade de maquininhas ou dinheiro físico.'
        },
        {
            icon: 'fa-chart-line',
            title: 'Dashboard Completo',
            description: 'Acompanhe todas as vendas, receitas e status dos equipamentos em tempo real.'
        },
        {
            icon: 'fa-cogs',
            title: 'Planos Personalizáveis',
            description: 'Configure diferentes planos de acesso com duração e preços variados.'
        },
        {
            icon: 'fa-wifi',
            title: 'Compatível com Mikrotik',
            description: 'Integração perfeita com equipamentos Mikrotik para controle de acesso.'
        }
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Recursos Principais</h2>
                    <p>Nossa plataforma oferece tudo que você precisa para automatizar a venda de acesso à internet</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card reveal" key={index}>
                            <div className="feature-icon">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features; 