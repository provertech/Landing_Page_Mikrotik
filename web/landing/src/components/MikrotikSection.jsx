import React from 'react';
import './MikrotikSection.css';
import MikrotikImage from '../assets/images/Mikrotik.png';

function MikrotikSection() {
    return (
        <section id="mikrotik" className="mikrotik-section">
            <div className="container">
                <div className="mikrotik-header reveal">
                    <h2>Compatível com seus Mikrotiks v6, Integre quantos você precisar</h2>
                </div>

                <div className="mikrotik-content">
                    {/* Cards à esquerda */}
                    <div className="mikrotik-text reveal">
                        <div className="objection-breakers">
                            <div className="objection-item">
                                <h3>🧩 "Integração nativa com o sistema"</h3>
                                <p>Utilizamos Mikrotik como parte do fluxo. Toda liberação, bloqueio e renovação acontece de forma automática e sincronizada.</p>
                            </div>

                            <div className="objection-item">
                                <h3>🖥️ "Acesso remoto ao Mikrotik"</h3>
                                <p>Mesmo usando Starlink, acesse seu Mikrotik via Winbox pela plataforma, com túnel seguro e conexão estável.</p>
                            </div>

                            <div className="objection-item">
                                <h3>📈 "Mikrotiks que mais vendem"</h3>
                                <p>Visualize quais pontos de venda faturam mais e acompanhe o desempenho por local de instalação.</p>
                            </div>

                            <div className="objection-item">
                                <h3>📊 "Monitoramento de consumo"</h3>
                                <p>Saiba se o usuário já utilizou a internet e quanto consumiu, com acompanhamento direto pelo painel.</p>
                            </div>
                        </div>
                    </div>

                    {/* Imagem à direita */}
                    <div className="mikrotik-image reveal">
                        <img src={MikrotikImage} alt="Mikrotik integrado ao sistema" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MikrotikSection;


