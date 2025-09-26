import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "O que é preciso pra começar a vender?",
            answer: "Você tem que ter um bom local com potencial de vendas, preferencialmente com pouca ou nenhuma cobertura de internet, uma Starlink, Mikrotik e APs."
        },
        {
            question: "Vocês fornecem algum equipamento?",
            answer: "Não, fornecemos apenas acesso ao sistema para realização de vendas, a estrutura de rede é sua."
        },
        {
            question: "O que está incluso no serviço?",
            answer: "Acesso ao sistema de vendas, suporte para tirar dúvidas sobre o sistema e a integração do seu mikrotik."
        },
        {
            question: "Vocês configuram o AP?",
            answer: "Tanto o AP quanto qualquer outro equipamento da sua rede, não está incluso no serviço."
        },
        {
            question: "Prestam consultoria em outros serviços de rede?",
            answer: "Não, nosso foco é apenas em vendas de hotspot."
        },
        {
            question: "Funciona com outras internets ou somente Starlink?",
            answer: "Funciona com qualquer internet, desde que não existam bloqueios na rede que impeçam a conexão com nosso servidor."
        },
        {
            question: "Qual o valor do investimento mensal?",
            answer: "Cada projeto tem suas peculiaridades, entre em contato para verificar o valor."
        },
        {
            question: "Como funciona o pagamento dos clientes?",
            answer: "Os clientes pagam via PIX diretamente no seu Mercado Pago. O dinheiro cai na sua conta e o acesso é liberado automaticamente."
        },
        {
            question: "Preciso estar no local para liberar o acesso?",
            answer: "Não! O sistema é 100% automatizado. Cliente paga → Sistema libera → Você recebe o dinheiro, tudo sem sua intervenção."
        },
        {
            question: "Posso gerenciar múltiplos pontos de venda?",
            answer: "Sim! Você pode ter quantos pontos quiser, cada um com seu próprio painel de controle, mas gerenciados centralmente."
        },
        {
            question: "Há garantia de funcionamento?",
            answer: "Oferecemos suporte técnico para questões do sistema. A disponibilidade da internet e equipamentos fica por conta do cliente."
        }
        
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Dúvidas Frequentes</h2>
                    <p>Respostas para as principais dúvidas sobre nosso sistema de hotspot automatizado</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                <h3>{faq.question}</h3>
                                <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ; 