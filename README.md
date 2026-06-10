# 💱 Conversor de Moedas

Aplicação web para conversão de moedas em tempo real, com cotações atualizadas via API externa. Desenvolvida durante minha transição de carreira para a área de tecnologia.

---

## 🖥️ Demonstração

![Tela Principal - Dólar](./assets/main%20screen%20-%20dolar.png)
![Tela Principal - Euro](./assets/main%20screen%20-%20euro.png)

---

## ✨ Funcionalidades

- 🔄 Conversão entre **5 moedas**: Real, Dólar, Euro, Libra e Bitcoin
- 📡 Cotações em **tempo real** via [AwesomeAPI](https://economia.awesomeapi.com.br/)
- 🔁 Conversão **bidirecional** — escolha qualquer moeda de origem e destino
- 🏳️ Exibição de **bandeiras e nomes** das moedas selecionadas
- 💰 Formatação de valores no **padrão de cada país** (Intl.NumberFormat)

---

## 🛠️ Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e layout responsivo |
| JavaScript (ES6+) | Lógica de conversão e manipulação do DOM |
| Fetch API | Consumo da API de cotações |
| Intl.NumberFormat | Formatação de moedas por locale |
| [AwesomeAPI](https://economia.awesomeapi.com.br/) | Cotações em tempo real |

---

## 🧠 Como Funciona

A lógica de conversão usa o **Real Brasileiro (BRL) como moeda base**, pois a API retorna todas as cotações em BRL. O cálculo segue o fluxo:

```
Valor na moeda de origem
        ↓  × cotação da origem (→ BRL)
   Valor em BRL
        ↓  ÷ cotação do destino
  Valor na moeda de destino
```

Isso permite converter **qualquer combinação de moedas** sem precisar de uma cotação direta entre elas.

---

## 🚀 Como Rodar o Projeto

Não precisa instalar nada! É um projeto de HTML, CSS e JavaScript puro.

```bash
# Clone o repositório
git clone https://github.com/GiulianoMarrocco/Projeto-ConversorMoedas.git

# Entre na pasta
cd Projeto-ConversorMoedas

# Abra o arquivo no navegador
# Clique duas vezes no index.html
# ou use a extensão Live Server no VS Code
```

> ⚠️ **Requisito:** conexão com internet para buscar as cotações em tempo real.

---

## 📂 Estrutura do Projeto

```
Projeto-ConversorMoedas/
├── index.html       # Estrutura da página
├── style.css        # Estilização
├── scripts.js       # Lógica de conversão e consumo de API
└── assets/          # Imagens das bandeiras e ícones
```

---

## 📡 API Utilizada

[AwesomeAPI - Economia](https://economia.awesomeapi.com.br/)

Endpoint utilizado:
```
GET https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL
```

Retorna as cotações mais recentes de Dólar, Euro, Libra e Bitcoin em relação ao Real.

---

## 👨‍💻 Sobre o Projeto

Este projeto foi desenvolvido como parte da minha jornada de transição de carreira para a área de tecnologia. O principal desafio foi implementar a **conversão bidirecional entre moedas**, que exigiu entender como usar uma moeda base como intermediária para calcular qualquer par de conversão.

---

## 📬 Contato

Feito por **Giuliano Marrocco**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GiulianoMarrocco)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)

---

## 📝 Licença

Este projeto está sob a licença MIT.