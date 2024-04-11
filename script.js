//Função para mudar para o modo Oppenheimer
function toggleMode(){
  const html = document.documentElement
  //Procura na lista de classes da tag html a classe light
  if(html.classList.contains('light')){
    //Exclui a classe light e muda de modo
    html.classList.remove('light')
  }
  else{
    //Se não tiver a classe light, adiciona e muda de modo
    html.classList.add('light')
  }
}