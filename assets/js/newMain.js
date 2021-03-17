function criaCalculadora(){
  return {
    display: document.querySelector('.display'),

    clearDisplay(){
      this.display.value = ''
    },

    inicia(){
      this.cliqueBotoes()
      
    },
    
    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;
      
        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay()
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },

  };
}

const calculadora = criaCalculadora()
calculadora.inicia()