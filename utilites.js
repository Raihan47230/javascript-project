function getInputFrom(id){
     const inputValue= document.getElementById(id).value;
     const inputValueNumber = parseFloat(inputValue)
     return inputValueNumber
}

function getInputFromText(id){
     const inputText= document.getElementById(id).innerText
     const inputTextNumber = parseFloat(inputText)
     return inputTextNumber
}
function showSectionId(id){
     document.getElementById('showAddMoney').classList.add('hidden')
     document.getElementById('showCushOut').classList.add('hidden')
     // show the section 

     document.getElementById(id).classList.remove('hidden')


}