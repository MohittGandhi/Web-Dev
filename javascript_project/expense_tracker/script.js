document.addEventListener('DOMContentLoaded',(()=>{
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("expense-list");

  let expense = []

  let totalAmount = CalculateTotal()

  expenseForm.addEventListener("submit",(e) =>{
    e.preventDefault()
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    if(name !== "" && isNaN(amount) && amount >0){
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      }
      expense.push(newExpense);
      saveExpensesTolocal();
    }
  });
    
  function CalculateTotal() {

  }  

  function saveExpensesTolocal(){
    localStorage.setItem("expense ",JSON.stringify(expense))
  }

}))