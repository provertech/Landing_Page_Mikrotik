import React from 'react';
import './StarlinkSection.css';
import StarlinkImage from '../assets/images/Starlink.png';

function StarlinkSection() {
    return (
        <section id="starlink" className="starlink-section">
            <div className="container">
                <div className="starlink-header reveal">
                    <h2>Você vende internet da Starlink?! Então nossa plataforma é para você!</h2>
                </div>

                <div className="starlink-content">
                    <div className="starlink-image reveal">
                        <img src={StarlinkImage} alt="Starlink - Internet via Satélite" />
                    </div>
                    <div className="starlink-text reveal">
                        <div className="objection-breakers">
                            <div className="objection-item">
                                <h3>🤖 "Automatize 100% das vendas"</h3>
                                <p>Sistema inteligente que vende acesso automaticamente via PIX, sem necessidade de atendimento manual. Seus clientes compram e o sistema libera sozinho.</p>
                            </div>

                            <div className="objection-item">
                                <h3>📊 "Controle total em um painel"</h3>
                                <p>Gerencie múltiplos pontos Starlink, monitore vendas em tempo real e tenha relatórios detalhados de cada localização.</p>
                            </div>

                            <div className="objection-item">
                                <h3>🌐 "Monetize quantas Starlink quiser"</h3>
                                <p>Gerencie múltiplas antenas Starlink simultaneamente. Cada nova instalação vira uma fonte de receita automática, sem precisar estar fisicamente presente.</p>
                            </div>

                            <div className="objection-item">
                                <h3>💰 "Elimine custos de funcionários"</h3>
                                <p>Com vendas automáticas e gestão remota, não precisa contratar funcionários para cada local. Economize em salários e maximize seu lucro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StarlinkSection; 