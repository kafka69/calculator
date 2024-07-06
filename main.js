const num_buttons = document.querySelectorAll(".show-key")
const output = document.querySelector(".output")

let current_num = ""
let prev_num = ""
let operation = ""


num_buttons.forEach(button =>{
    button.addEventListener("click",function(){
        current_num += this.textContent;
        output.value = current_num
    })
})

const ac = document.querySelector(".calculator-key--clear")
ac.addEventListener("click",()=>{
    output.value = ''
    current_num = ""
    prev_num = ""
})

const del = document.querySelector(".calculator-key--del")
del.addEventListener("click",()=>{
    output.value = current_num  
    output.value = output.value.substring(0,Math.min(output.value.length,output.value.length-1));
    current_num = output.value
})

const op_buttons = document.querySelectorAll(".calculator-key--operator")
op_buttons.forEach(button =>{
    button.addEventListener("click",function(){
        operation = this.textContent.trim();
        prev_num = current_num
        current_num = ""
    })
})

function calculate() {
    let result;
    const num1 = parseFloat(prev_num);
    const num2 = parseFloat(current_num);
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '×':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }
    return result;
}

const equal_button = document.querySelector(".calculator-key--enter")
equal_button.addEventListener("click",function(){
    output.value = calculate()
})