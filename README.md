#sitepessoal
# Criar um site parece uma tarefa fácil não é?
## Mas só parece mesmo!
- - - -

### **Motivação do projeto**
Quando comecei a desenvolver este site, *pensei que seria um projeto rápido*. Aquele tipo de coisa que você começa hoje e termina semana que vem, mas esse simples web site *me provou que eu estava muito errado*. 
Claro, dentro do período que levei para “terminar” ~~eu de fato ainda não o terminei, pretendo ir aprimorando aos poucos conforme meu desenvolvimento~~, eu **aprendi várias outras coisas** e **linguagens** de programação.  Hoje não me considero um expert, mas não mais estou na estaca zero!
* SASS
* NPM
* HTML 5
* CSS 3
* Git e GitHub
São algumas das tecnologias que aprendi até agora nessa caminhada de criação da minha página pessoal “fácil”. 
Enquanto escrevo este *Readme* eu penso em tornar ou não publico o código do meu site, mesmo que você possa inspeciona-lo através do *dev tools*, fazê-lo público pode dar uma noção de **quantas vezes** escrevi, apaguei, exclui tudo e comecei do zero.
- - - -
### **Explicando o projeto**
Mas em fim, vamos ao que realmente nos interessa, vou explicar a você caro leitor sobre como construí este site, tecnologia e metodologias. 

1. **Classes CSS**
O projeto até então (19/07/2020) não possui códigos Java Script, as animações são feitas todas com CSS3, sendo assim, utilizei algo que com o tempo percebi ser mais fácil e ágil para o front-end, várias “mini classes” que possuem uma ou mais funções. 
Por exemplo, para *box shadow*, eu criei uma classe que comporta apenas códigos referentes a esta propriedade, e no HTML eu apenas chamo essa classe em elementos que devem receber este estilo. 
Pode parecer óbvio, mas demorei um bocado até perceber a utilidade disso.
Desta forma, separando cada função para pequenas classes, eu obtenho:
* Padronização,
* Organização,
* Fácil manutenção;
- - - -
2. **Mais organização com SASS/SCSS**
Por um tempo, utilizei apenas CSS puro para criação da página, mas era frustrante usar uma folha de estilo para todo o site, ou não poder aninhar o código, não ter mixins, funções etc etc. Quando descobri o SASS, descobri com ele um mar de possibilidades para organização do meu código. Resumindo o que fiz:
* Criei pastas baseadas em contextos,
* Utilizei folhas separadas e unidas através de `@import` numa única folha.

O método de organização foi tido como base através do canal [Desenvolvimento para Web DPW](https://desenvolvimentoparaweb.com). 

- - - -
3. **Compatibilidade com browsers antigos**
Infelizmente, até o presente momento da escrita deste Readme, não tenho pretenção de utilizar códigos ou abrir mão do desenvolvimento com Grid ou Flex, ou ainda com variáveis nativas do próprio CSS3, para abraçar browsers antigos. Creio que atualmente na era digital, browsers antigos sejam apenas uma questão de suporte e infelizmente de dor de cabeça 😧
- - - -