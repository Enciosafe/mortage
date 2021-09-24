# mortage_calculator_backend

##endpoints

- GET(https://agile-thicket-82517.herokuapp.com/api/banks/) - take all collection
- POST(https://agile-thicket-82517.herokuapp.com/api/banks/, body) - create new element in collection
- PATCH(https://agile-thicket-82517.herokuapp.com/api/banks/{id}, body) - change element by {id}
- DELETE(https://agile-thicket-82517.herokuapp.com/api/banks/{id}) - delete element by {id}
 
##MODEL OBJ BANK 

 {
  name: string,
  interestRate: %,
  maxLoan: number,
  minDownPayment: number,
  loanTerm: number,
 }
