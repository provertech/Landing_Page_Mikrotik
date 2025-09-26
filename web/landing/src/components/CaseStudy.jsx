import React from 'react';
import './CaseStudy.css';
import CaseStudyImage from '../assets/images/2025-06-12 18 39 53.png';

function CaseStudy() {
    return (
        <section id="case-study" className="case-study">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Caso de Sucesso</h2>
                    <p>Veja como nossos clientes estão transformando seus negócios com nossa solução</p>
                </div>
                <div className="case-study-content">
                    <div className="case-study-text reveal">
                        <h3>Terminal Rodoviário de Manaus</h3>
                        <p className="case-highlight">
                            "Aumentamos nosso faturamento em 300% após implementar o sistema de Hotspot Automatizado."
                        </p>
                        <p>
                            O Terminal Rodoviário de Manaus enfrentava dificuldades para oferecer internet aos passageiros. Com a implementação do nosso sistema, conseguiram automatizar todo o processo de venda de acesso à internet, eliminando a necessidade de funcionários dedicados a essa função.
                        </p>
                        <ul className="case-results">
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Aumento de 300% no faturamento com internet</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Redução de custos operacionais</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Maior satisfação dos passageiros</span>
                            </li>
                        </ul>
                        <div className="case-author">
                            <div className="author-info">
                                <h4>Carlos Silva</h4>
                                <p>Gerente de Operações</p>
                            </div>
                        </div>
                    </div>
                    <div className="case-study-image reveal">
                        <img src={CaseStudyImage} alt="Terminal Rodoviário usando o sistema" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudy; 