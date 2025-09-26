import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui seria implementada a lógica de envio do formulário
        alert('Obrigado pelo contato! Retornaremos em breve.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Entre em Contato</h2>
                    <p>Tire suas dúvidas e solicite uma demonstração gratuita</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info reveal">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Endereço</h3>
                                <p>Av. Djalma Batista, 1661 - Chapada, Manaus - AM, 69050-010</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <h3>Telefone</h3>
                                <p>(92) 98123-4567</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>E-mail</h3>
                                <p>contato@mikrotiklucrativo.com.br</p>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="contact-form reveal">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact; 