import React from 'react';
import './MercadoPagoSection.css';
import PaymentImage from '../assets/images/MercadoPago.png';

function MercadoPagoSection() {
    return (
        <section id="mercadopago" className="mp-section">
            <div className="container">
                <div className="mp-header reveal">
                    <h2>Integração nativa com Mercado Pago (PIX)</h2>
                </div>

                <div className="mp-content">
                    {/* Imagem à esquerda */}
                    <div className="mp-image reveal">
                        <img src={PaymentImage} alt="Integração Mercado Pago" />
                    </div>

                    {/* Cards à direita */}
                    <div className="mp-text reveal">
                        <div className="objection-breakers">
                            <div className="objection-item">
                                <h3>🏢 "Conta PJ ou PF"</h3>
                                <p>Não importa o tipo de conta, é possível utilizar qualquer uma das modalidades. Pessoa física ou jurídica, nossa plataforma se adapta.</p>
                            </div>

                            <div className="objection-item">
                                <h3>💰 "Receba na hora"</h3>
                                <p>Sua conta é vinculada diretamente em nossa plataforma. Você não precisa esperar dias para receber, o cliente pagou, você já recebe.</p>
                            </div>

                            <div className="objection-item">
                                <h3>⚙️ "Integração fácil e prática"</h3>
                                <p>Não precisa realizar várias configurações para integrar sua conta. Em poucos passos, você mesmo conseguirá vincular ao painel.</p>
                            </div>

                            <div className="objection-item">
                                <h3>📱 "PIX instantâneo 24/7"</h3>
                                <p>Pagamentos aprovados em segundos, sem horário bancário. Seus clientes pagam e acessam a internet imediatamente, a qualquer hora.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MercadoPagoSection;


