function createCalculator(){
  return {
    display: document.querySelector('.display'),
    
    startCalc(){
      this.clickButtons()  
    },

    clearDisplay(){
      this.display.value = ''
    },

    makeAccount() {
      let account = this.display.value
      try{
        account = eval(account);
        
        if(!account) {
          alert('error');
          return;
        }
        this.display.value = String(account)
      } catch(e) {
        alert('error');
        return
      }
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1)
    },
    
    clickButtons() {
      document.addEventListener('click', e => {
        const el = e.target;
      
        if(el.classList.contains('btn-num')) {
          this.btnForDisplay(el.innerText)
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay()
        }

        if(el.classList.contains('btn-del')) {
          this.deleteOne()
        }

        if(el.classList.contains('btn-eq')){
          this.makeAccount()
        }
      });
    },

    btnForDisplay(valor) {
      this.display.value += valor
    },

  };
}

const calculator = createCalculator()
calculator.startCalc()