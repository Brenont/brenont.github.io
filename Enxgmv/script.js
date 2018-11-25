var input = document.querySelector("#key");

var lengthKeyStepOne = 6;
var firstKey = "123456";

input.addEventListener("input", function () {
    var inputValue = input.value;

    if (inputValue.length = lengthKeyStepOne) {

        if (input.value == firstKey) {
            console.error("ACERTOU MISERAVI");

            var containerInputOne = document.querySelector(".container-step-one");

            if (containerInputOne.classList.contains("show")) {

                containerInputOne.classList.remove("show");
                containerInputOne.classList.remove("content");

                containerInputOne.classList.add("hideSlow");
                setTimeout(function () {
                    containerInputOne.classList.add("hide");
                }, 1000);
            }
        }
    }
});