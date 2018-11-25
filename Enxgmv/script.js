var input = document.querySelector("#key");

input.addEventListener("input", function(){
    var inputValue = input.value;
    if(inputValue.length = 6){
        if(input.value == "123456"){
            console.error("ACERTOU MISERAVI");
        }
    }
});