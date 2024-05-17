# Usar uma imagem base oficial do Node.js
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependência (package.json e package-lock.json)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código-fonte para o container
COPY . .

# Porta que a aplicação vai escutar dentro do container
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"] 