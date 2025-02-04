const fs = require('fs');


const data = JSON.parse(fs.readFileSync('content.json', 'utf8'));

// Gera o conteúdo do README
const readmeContent = `
<a id="readme-top"></a>
<script type="text/javascript" src="dados.json"></script>
<p align="center">
<img src ="assets\Traive_Logo_AI_Laranja.png"/>
</p>
<h1 align="center">${data.projectName}</h1> 

<p align="center">
  <h4> Version </h4>
  ${data.version}
  <h4> Framework </h4>
  ${data.framework}
</p>

  ### Summary 

:seedling: [Description](#Description)

:seedling: [Pre Requests](#requests)

:seedling: [How to run the Application](#How-to-run-the-application)

:seedling: [Developers](#developers)


## Description :writing_hand:

<p align="justify">
${data.description} 
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Requests

<p align="justify">
  ${data.preRequest} 
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How to run the application :gear:

<p align="justify">
  ${data.howToRun} 
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Developers :clap: 

| [<img src="https://avatars.githubusercontent.com/u/187814402?s=96&v=4" width=115><br><sub>Tayna Silva</sub>](https://github.com/Taykazuhiro) |  [<img src="https://avatars.githubusercontent.com/u/158075224?v=4" width=115><br><sub>Jaques Schroeder</sub>](https://github.com/jaquesschroedertraive) |  [<img src="https://avatars.githubusercontent.com/u/158075224?v=4" width=115><br><sub>Jaques Schroeder</sub>](https://github.com/jaquesschroedertraive) 
| :---: | :---: | :---: 

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`;

// Salva o conteúdo no README.md
fs.writeFileSync('README.md', readmeContent);

console.log('README.md gerado com sucesso!');