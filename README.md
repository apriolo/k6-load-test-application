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
