# 🏆 Calculadora de Partidas Rankeadas | Ranked Match Calculator

Projeto desenvolvido como parte do segundo desafio da **DIO (Digital Innovation One)** com **Savegnago**. O objetivo era construir uma função para calcular o saldo de vitórias de um jogador e classificá-lo em um nível conforme seu desempenho. Para tornar o projeto mais interessante, também foi adicionada uma interface visual com **HTML** e **CSS**.

Project developed as part of the second **DIO (Digital Innovation One)** and **Savegnago** challenge. The goal was to build a function that calculates a player's win balance and classifies their level based on performance. To enhance the project, a visual interface using **HTML** and **CSS** was added.

---

<img width="733" height="691" alt="desafio" src="https://github.com/user-attachments/assets/79e1f3da-2f18-45fb-91d9-96218bfc4531" />

---

## 📌 Sobre o Projeto | About the Project

O desafio propôs a criação de uma função em JavaScript que calcula o saldo de partidas rankeadas de um jogador (vitórias - derrotas) e o classifica em níveis como **Ferro, Bronze, Prata**, entre outros. Aproveitando a proposta, foi criada uma aplicação completa com:

- `index.html` — interface para entrada de vitórias e derrotas
- `style.css` — visual agradável e responsivo
- `index.js` — lógica de cálculo e classificação com validação

The challenge required writing a JavaScript function that calculates a player’s ranked match balance (wins - losses) and classifies their level such as **Iron, Bronze, Silver**, and so on. A complete web app was built with:

- `index.html` — input interface for wins and losses
- `style.css` — clean and responsive styling
- `index.js` — calculation and classification logic with validation

---

## 🛠️ Tecnologias Utilizadas | Technologies Used

- `HTML5`
- `CSS3`
- `JavaScript`

---

## 📊 Regras de Classificação | Classification Rules

| Vitórias 🇧🇷          | Nível    | Wins 🇺🇸                   | Level     |
| -------------------- | -------- | ------------------------- | --------- |
| Menor que 10         | Ferro    | Less than 10              | Iron      |
| 11 a 20              | Bronze   | 11 to 20                  | Bronze    |
| 21 a 50              | Prata    | 21 to 50                  | Silver    |
| 51 a 80              | Ouro     | 51 to 80                  | Gold      |
| 81 a 90              | Diamante | 81 to 90                  | Diamond   |
| 91 a 100             | Lendário | 91 to 100                 | Legendary |
| Maior ou igual a 101 | Imortal  | Greater than or equal 101 | Immortal  |

---

## 🖥️ Exemplo de Saída | Output Example

**🇧🇷:** O Herói tem de saldo de **55** está no nível de **Ouro**  
**🇺🇸:** The Hero has a balance of **55** and is at the **Gold** level

---

## ▶️ Como Executar | How to Run

1. Clone o repositório / Clone the repository:

   ```bash
   git clone https://github.com/NiltonAtanasio/CalculadoraDePartidasRankeadas

   ```

2. Acesse a pasta do projeto / Navigate to the project folder:

   ```bash
   cd CalculadoraDePartidasRankeadas

   ```

3. Abra index.html no navegador ou use Live Server no VS Code / Open index.html in your browser or use Live Server in VS Code

---

## 🚀 O que foi acrescentado além do desafio | What Was Added Beyond the Challenge

Embora o desafio original solicitasse apenas a lógica em JavaScript, o projeto foi expandido com uma interface amigável e validação para entradas numéricas, tornando o uso mais intuitivo.

While the original challenge only required the JavaScript logic, this project was enhanced with a friendly interface and numeric input validation for a better user experience.

## 🔧 Melhorias implementadas | Improvements Implemented

### HTML:

Campos para entrada de vitórias e derrotas

Botão de cálculo com acionamento da função

Área de exibição do resultado

### CSS:

Estilo moderno e responsivo

Feedback visual para ações do usuário

Cores baseadas no nível alcançado

### JavaScript:

Função que calcula o saldo (vitórias - derrotas)

Lógica de classificação conforme as regras definidas

Validação para valores negativos ou inválidos

Exibição dinâmica da mensagem final

---

## 🧠 Aprendizados | What I Learned

Reforço no uso de funções com parâmetros

Validação e manipulação de inputs numéricos

Uso de estruturas condicionais e laços de repetição

Melhoria na organização e separação de responsabilidades (HTML/CSS/JS)

Aprendizado prático com DOM e eventos JavaScript

Feito com 💙 para o desafio da [Digital Innovation One](https://www.dio.me).  
**Obrigado por visitar! Espero que goste da versão expandida!!**
