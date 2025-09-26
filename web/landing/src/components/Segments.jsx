import React from 'react';
import './Segments.css';

function Segments() {
    const segments = [
        {
            icon: 'fa-bus',
            title: 'Frota de ônibus',
            description: 'Cada ônibus com um kit de starlink e mikrotik, realizando vendas diariamente',
            highlight: 'Mais de R$ 165.000,00 faturados, desde o início das operações'
        },
        {
            icon: 'fa-calendar-alt',
            title: 'Eventos & Rodeios',
            description: 'Locais atendidos com pouca ou nenhuma cobertura de internet, vende em dias específicos',
            highlight: 'Mais de R$ 14.000,00 faturados, desde o início das operações'
        },
        {
            icon: 'fa-ship',
            title: 'Barcos & Embarcações',
            description: 'As vendas são realizadas a passageiros que precisam de conexão ao passarem por área sem conectividade.',
            highlight: 'Mais de R$ 30.000,00 faturados, desde o início das operações'
        },
        {
            icon: 'fa-building',
            title: 'Provedores',
            description: 'Com VLAN segmentada em toda rede, nossos parceiros disponiblizam Wifi em todas as áreas que possuem fibra',
            highlight: 'Mais de R$ 10.000,00 faturados, desde o início das operações'
        },
        {
            icon: 'fa-umbrella-beach',
            title: 'Balneários',
            description: 'Turistas = clientes garantidos. Praia + internet = combinação perfeita',
            highlight: 'Mais de R$ 45.000,00 faturados, desde o início das operações'
        },
        {
            icon: 'fa-wifi',
            title: 'Locais Remotos',
            description: 'Pouca cobertura = oportunidade. Starlink + sistema = solução completa',
            highlight: 'Mais de R$ 25.000,00 faturados, desde o início das operações'
        }
    ];

    return (
        <section id="segments" className="segments">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Temos clientes nesses segmentos </h2>
                    <p>Descubra abaixo onde nosso sistema gera mais resultados e receita automática</p>
                </div>
                <div className="segments-grid">
                    {segments.map((segment, index) => (
                        <div key={index} className="segment-card reveal">
                            <div className="segment-icon">
                                <i className={`fas ${segment.icon}`}></i>
                            </div>
                            <div className="segment-content">
                                <h3>{segment.title}</h3>
                                <p>{segment.description}</p>
                                <div className="segment-highlight">
                                    <span>{segment.highlight}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Segments; 