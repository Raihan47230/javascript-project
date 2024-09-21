document.getElementById("add_manoy_from").addEventListener('click',function(e){
     e.preventDefault();

    const inputNum1 = getInputFrom('input-1')
    const inputNum2 = getInputFrom('input-2')
// const getBalance = getInputFromText("balance")
          // console.log(inputNum1,inputNum2,getBalance)
    
     if(inputNum2 === 1234){
         const mainBalance=getInputFromText("total_amount" )
         const newBalance = mainBalance + inputNum1
         const newAmount = document.getElementById("total_amount").innerText=newBalance
         return newAmount
     }
     else{
          alert('Worng input')
     }
 })
