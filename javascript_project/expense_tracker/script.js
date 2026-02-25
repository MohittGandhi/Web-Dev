document.addEventListener("DOMContentLoaded",()=>{
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses =JSON.parse(localStorage.getItem("expense")) || [];

  let totalAmount = CalculateTotal();

  renderExpenses();

  expenseForm.addEventListener("submit",(e) =>{
    e.preventDefault(); 
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    if(name !== "" && !isNaN(amount) && amount >0){
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      }
      expenses.push(newExpense);
      saveExpensesTolocal();
      renderExpenses();
      uploadtotal();
      localStorage.getItem("expense");

      expenseNameInput.value = "";
      expenseNameInput.value = "";
    }
  });
    

  function renderExpenses(){
    expenseList.innerHTML= "";
    expenses.forEach((expense) =>{
      const li = document.createElement("li");
      li.innerHTML= `${expense.name} - $${expense.amount} <button data-id = "${expense.id}"> Delete </button>`;
      expenseList.append(li);
    })
  }
  

  function CalculateTotal() {
    return expenses.reduce((sum,expense) => sum + expense.amount,0);
  }  

  function saveExpensesTolocal(){
    localStorage.setItem("expense",JSON.stringify(expenses))
  }

  function uploadtotal(){
    totalAmount = CalculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  expenseList.addEventListener('click',(e) =>{
  if(e.target.tagName === "BUTTON"){
    const expenseid = parseInt(e.target.getAttribute("data-id"));
    expenses = expenses.filter((expense) =>expense.id !== expenseid );

    saveExpensesTolocal();
    renderExpenses();
    uploadtotal();
  }
  })

});