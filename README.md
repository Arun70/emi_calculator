# EMI Calculator

In a country of Coderland, EMI for Home loan is calculated based on interest rate, principal and loan tenure. The EMI calculates based on the below formula,

<p align="center">
  <img src="https://emicalculator.net/wp-content/uploads/emiformula.png">
</p>

where E is EMI and P is Principal Loan Amount

### **For example,**

If you borrow _₹10,00,000_ from the bank at _10.5%_ annual interest for a period of _10 years (i.e., 120 months)_, then _EMI = ₹10,00,000 * 0.00875 * (1 + 0.00875)120 / ((1 + 0.00875)120 -1) = ₹13,493_. i.e., you will have to pay _₹13,493_ for _120 months_ to repay the entire loan amount. The total amount payable will be _₹13,493 \* 120 = ₹16,19,220_ that includes _₹6,19,220_ as interest toward the loan.

Write a web application that can accept these as a user input,

`principal, interest rate, loan tenure`

The application shows **Loan EMI, Total Interest Payable & Total Payment**. The application also shows each year (Including months) payable/paid EMI breakup.

# EMI Calculator Output image

- <p align="center">
    <img src="https://github.com/Arun70/emi_calculator/blob/master/a1.png">
  </p>
- <p align="center">
    <img src="https://github.com/Arun70/emi_calculator/blob/master/a2.png">
  </p>

# How to run the project

- Clone the repo onto your local machine
- from inside the directory (i.e. emi_calculator) run "yarn install" to download dependencies
- from inside the directory (i.e. emi_calculator) run "yarn start" to run the project
- Open "http://localhost:8080/" into browser (prefer chrome) to see the running project
