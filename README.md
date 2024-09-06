# Aplicação Express.js com Processamento Intensivo

Esta aplicação Node.js utiliza o framework [Express](https://expressjs.com/) para criar um servidor que simula um processamento intensivo, calculando números de Fibonacci com base em uma complexidade definida via query string.

## Requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [Express](https://expressjs.com/)

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
```

2. Instale as dependências:

```bash
npm install
```

## Uso

### Iniciar o Servidor

Para iniciar o servidor Express, execute o comando:

```bash
node app.js
```

O servidor será iniciado na porta `3000` e estará ouvindo requisições no endpoint `/process`.

### Endpoint `/process`

O endpoint `/process` simula um processamento intensivo, calculando a sequência de Fibonacci. Você pode customizar o nível de complexidade e o valor de Fibonacci a ser calculado utilizando parâmetros de query string.

#### Exemplo de Requisição

```bash
http://localhost:3000/process?n=10&complexity=5
```

- `n`: Define o número de Fibonacci a ser calculado (padrão é 30).
- `complexity`: Define o nível de complexidade da operação, aumentando o número de iterações (padrão é 1).

#### Exemplo de Resposta

```json
{
  "message": "Processamento concluído",
  "executionTime": 2500
}
```

- `executionTime`: Tempo total de execução da operação em milissegundos.

### Modificar Parâmetros

Você pode ajustar o comportamento do processamento alterando os parâmetros na URL, como no exemplo abaixo:

- Para calcular o 15º número de Fibonacci com uma complexidade de 3:

```bash
http://localhost:3000/process?n=15&complexity=3
```

# Teste de Carga com K6
Este repositório contém um script para realizar testes de carga utilizando a ferramenta K6. O teste faz requisições HTTP a uma URL especificada e gera um relatório HTML com o resumo dos resultados.

## Pré-requisitos
K6 instalado na sua máquina.
Servidor local (ou remoto) rodando em http://localhost:3000.
Configurações do Teste
O script executa um teste de carga simulando diferentes níveis de usuários virtuais (VUs) durante um período de tempo, conforme configurado nas opções abaixo:

## VUs (Virtual Users):
- Sobe para 10 VUs em 30 segundos.
- Reduz para 5 VUs em 15 segundos.
- Volta para 10 VUs em 15 segundos.
- Atinge 20 VUs em 60 segundos.

## Thresholds:
- 95% das requisições devem ter uma duração inferior a 1000 ms.
- 
##Instruções
### 1. Clonar o repositório
- bash
- Copiar código
- git clone <url-do-repositorio>
- cd <nome-do-repositorio>

### 2. Executar o servidor (opcional)
- Certifique-se de que o servidor na URL http://localhost:3000 está ativo e ouvindo requisições. No exemplo, o servidor recebe requisições no endpoint /process com parâmetros n e complexity.

### 3. Rodar o teste
- Execute o seguinte comando para rodar o teste de carga:
- bash
- Copiar código
- k6 run script.js

### 4. Gerar o relatório
- Após a execução do teste, um arquivo index.html será gerado com o relatório de resumo:
- bash
- Copiar código
- k6 run --summary-export=index.html script.js

### 5. Abrir o relatório
- Após a execução, abra o arquivo index.html em seu navegador para visualizar o resumo do teste.
- bash
- Copiar código
- open index.html

## Referências
- Documentação do K6
- k6-reporter
