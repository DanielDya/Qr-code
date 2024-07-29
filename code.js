function gerarqrCode(){

var inputText = document.querySelector("input")

if(inputText.value == ""){
    alert("Campo vazio, Digite algo")
}
else{
    var containerqrCode = document.querySelector(".qrcode");
    var config = {
        text: inputText.value,
        with:250,
        height:250
    }
    new QRCode(containerqrCode, config);
}
}

























// Objeto javascript
    //     var nome = "daniel"
//     var Matricula = 151524
//     var emailaluno = "joaodanielbernardin@gmail.com" 

//     // var aluno = ("daniel",151524,"joaodanielbernardin@gmail.com" )

//     var aluno = {
//         nome:"joao",
//         Matricula:151524,
//         emailaluno: "joaodanielbernardin@gmail.com"
//     }

//     alert(aluno.nome + " " + aluno.Matricula + " " + aluno.emailaluno);