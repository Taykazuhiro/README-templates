const fs = require('fs');
const data = JSON.parse(fs.readFileSync('content.json', 'utf8'));


// Gera o conteúdo do README
const readmeContent = `
<a id="readme-top"></a>
<p align="center">
<img src ="assets/Traive_Logo_AI_Laranja.png"/>
</p>
<h1 align="center">${data.projectName}</h1> 

  <h4 align="center"> Version & Framework </h4>
  <p align="center">
  | <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FTaykazuhiro%2FREADME-templates%2Fmain%2Fcontent.json&query=%24.version&prefix=%5B&suffix=%5D&label=version"> | <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FTaykazuhiro%2FREADME-templates%2Fmain%2Fcontent.json&query=%24.framework&prefix=%5B&suffix=%5D&label=framework&color=%23faa61a
"> |
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
 ${data.devsName} 

<p align="right">(<a href="#readme-top">back to top</a>)</p>
`;

// Salva o conteúdo no README.md
fs.writeFileSync('README.md', readmeContent);

console.log('README.md gerado com sucesso!');