# Landing Page Mikrotik Lucrativo

Landing page independente para o sistema Mikrotik Lucrativo.

## 🚀 Funcionalidades

- Seleção de planos
- Redirecionamento para checkout
- Design responsivo
- Integração com checkout ASAAS

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🌐 Produção

```bash
npm start
```

## 📁 Estrutura

```
web/landing/
├── src/
│   ├── components/
│   ├── pages/
│   └── index.jsx
├── public/
│   └── index.html
└── assets/
```

## 🔗 Integração

Esta landing page redireciona para o sistema de checkout principal:
- **Checkout URL:** `https://checkout.mikrotik.com.br/`
- **Parâmetros:** `?plan={id}&cycle={monthly|annual}&price={valor}&name={nome}`

## 📝 Licença

ISC
