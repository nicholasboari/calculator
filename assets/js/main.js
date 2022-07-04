function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    clickButton() {
      document.addEventListener(
        "click",
        function (event) {
          const el = event.target;

          if (el.classList.contains("btn-num")) {
            this.btnForDisplay(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.btnClearDisplay();
          }

          if (el.classList.contains("btn-del")) {
            this.deleteOne();
          }

          if (el.classList.contains("btn-eq")) {
            this.makeAccount();
          }

        }.bind(this)
      );
    },

    btnClearDisplay() {
      this.display.value = "";
    },

    btnForDisplay(valor) {
      this.display.value += valor;
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    makeAccount() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta invalida");
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("Conta invalida");
      }
    },

  };
}

const calculadora = criaCalculadora();
calculadora.clickButton();
