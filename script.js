document.querySelector("#SI-form").addEventListener("submit", function (e) {
  document.querySelector("#results").style.display = "none"

  document.querySelector("#loading").style.display = "block"

  setTimeout(calculateInterests, 1000)

  e.preventDefault()
})

function calculateInterests() {

  // Variables for the UI
  const UIamount = document.querySelector("#amount")
  const UIrate = document.querySelector("#rate")
  const UIyears = document.querySelector("#years")
  const UIMonthlyInterest = document.querySelector("#monthly-interest")
  const UITotalInterest = document.querySelector("#total-interest")
  const UITotalAmount = document.querySelector("#total-amount")
  let UITotalAmountInYears =  document.querySelector("#total-amount-years")

  // Grabbing the input value
  const principal = parseFloat(amount.value)
  const calculatedRate = parseFloat(UIrate.value) / 100
  const calculatedYear = parseFloat(UIyears.value)

   // Performing calculations
  const totalInterest = (principal * calculatedRate * calculatedYear)
  const monthlyInterest = (principal * calculatedRate * calculatedYear) / 12
  const totalAmount = principal + totalInterest


  if (isFinite(totalInterest)) {
    UITotalInterest.value = totalInterest.toFixed(2)
    UIMonthlyInterest.value = monthlyInterest.toFixed(2)
    UITotalAmount.value = totalAmount.toFixed(2)

    if(calculatedYear <= 1){
      UITotalAmountInYears.textContent = `Amount In ${calculatedYear} Year`
    }else{
      UITotalAmountInYears.textContent = `Amount In ${calculatedYear} Years`
    }

    document.querySelector("#loading").style.display = "none"
    document.querySelector("#results").style.display = "block"
 
  } else {
    displayError("Please check your entries")
  }
}

function displayError(error) {
  document.querySelector("#results").style.display = "none"

  document.querySelector("#loading").style.display = "none"

  const errorDiv = document.createElement("div")
  const UIcard = document.querySelector(".card")
  const UIheading = document.querySelector(".heading")

  errorDiv.className = "alert alert-danger"
  errorDiv.appendChild(document.createTextNode(error))

  UIcard.insertBefore(errorDiv, UIheading)

  setTimeout(clearError, 2000)
}

function clearError() {
  document.querySelector(".alert").remove()
      

}

