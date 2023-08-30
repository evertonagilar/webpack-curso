[![Webpack Version](https://img.shields.io/badge/webpack-v5.0.0-blue.svg)](https://webpack.js.org/)


# aula 1 - Configuração básica do webpack


- Criado o arquivo package.json
- Adicionado a dependência do webpack em devDependencies
- Criado o arquivo webpack.config.js



1. Compilar o projeto

```sh
npm start
```

2. Executar o projeto
   
```sh
node dist/main.js
```


# aula 2 - Funcionamento dos módulos

- Criado pasta modulos e dois módulos
- Ver como adicionar os módulos no radar do webpack
- Configurando a saída do webpack para dist/principal.js


1. Compilar e executar o projeto
   
```sh
npm start && node dist/principal.js
```


# aula 3 - Configurar loaders de css e criar página index.html

- Adicionado loaders de css (style-loader e css-loader)
- Criado arquivo assets/estilo.css e adicionado import em principal.js
- Criado public/index.html fazendo referência para principal.js
- Configurado webpack para usar a pasta public como saída



1. Depois de compilar, abra o arquivo public/index.html para testar


# aula 4 - Externalizar o arquivo css

- Adicionado dependencia nova: **mini-css-extract-plugin**
- Informado o nome do arquivo css a ser gerado
- Comentado o módulo style-loader e adicionado o MiniCssExtractPlugin
- Ajuste na página index.html para referenciar o principal.css

1. Depois de compilar, abra o arquivo public/index.html para testar

# aula 5 - Carregando arquivo .scss (SASS)

- Adicionado as dependências: node-sass e sass-loader
- Ajustado o teste da rule do css para tratar scss:  **'/\.s?[ac]ss$/'**
- Criado alguns scss de exemplo
- Incluído referência index.js da pasta assets no principal.js

1. Depois de compilar, abra o arquivo public/index.html para testar


