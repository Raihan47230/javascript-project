document.getElementById("cushOut_from").addEventListener('click',function(e){
     e.preventDefault();
     
     const inputCush = getInputFrom("input-cushOut-1")
     const inuptPinNumber = getInputFrom("input-cushOut-2")
     // console.log(inputCush, inuptPinNumber)
     
     if(inuptPinNumber === 1234){
          const balanceBefor = getInputFromText('total_amount')
          const newAmount = balanceBefor - inputCush
          const newcush = document.getElementById('total_amount').innerText=newAmount
          return newcush;
     
     
     }
     else{
          alert('worng input')
     }
     
     })