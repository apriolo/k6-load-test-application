# Utiliza a imagem oficial do Node.js 20.17.0 como base
FROM node:20.17.0-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos da aplicação para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Exporta a porta 3000 do container para a máquina host
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "main.js"]