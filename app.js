//Selector
var input = document.getElementById('number');
var button = document.getElementById('cta');
var resultDiv = document.querySelector(".result")
var backButton = document.querySelector("svg")
var boxDiv = document.querySelector(".box")
//declare variables
let inputNumber;
let network;
let networkLogo;

//Event Listers
button.addEventListener("click", showResult)
backButton.addEventListener("click", hideResult)

//Functions
//add visible class to the div
//if input is empty -- go back and enter a valide mobile number 
//if number is incorect please enter a vlide nigeria number
//let tex show the carrer and the logo... if careier then logo

function showResult(e){
  e.preventDefault();
  //ensure the input fild has value
  if(!input.value){
    alert("Phone number cannot be empty")
  }else if(input.value.length !== 11){
    alert("Input the right phone number")
  }else{
    //show hidden div
    resultDiv.classList.toggle('hide-result')

    //create h2
    inputNumber = document.createElement('h2');
    let inputText = input.value
    inputNumber.innerText = inputText;
    // put h2 in the resultDiv
    resultDiv.appendChild(inputNumber);

    //create a paragraph
    network = document.createElement('p');
    networkLogo = document.createElement('img');
    let networkCarrier;
    let networkCarrierlogo;
    let inputTextFirstFour = inputText.substring(0 , 4)
    switch(inputTextFirstFour){
      case "0803": case "0703": case "0903": case "0806": case "0706":
      case "0813": case "0810": case "0814": case "0816":
        networkCarrier = "Your Network Carrier is MTN"
        networkCarrierlogo = './images/mtn.png'
        break;
      case "0802": case "0808": case "0708": case "0812": case "0701": 
      case "0902": case "0901": case "0904": case "0907": case "0912":
        networkCarrier = "Your Network Carrier is Airtel"
        networkCarrierlogo = './images/Airtel-logo.png'
        break;
      case "0809": case "0818": case "0817": case "0909": case "0908":
        networkCarrier = "Your Network Carrier is 9Mobile"
        networkCarrierlogo = './images/9mobile.png'
        break;
      case "0805": case "0807": case "0705": case "0815": case "0811": case "0905": case "0915":
        networkCarrier = "Your Network Carrier is Glo"
        networkCarrierlogo = './images/glo-logo.png'
        break;
      default:
        networkCarrier = "is not a valid Nigeria mobile number"
        networkCarrierlogo = "https://media.giphy.com/media/d68K4eApIUez3rkmcV/giphy.gif"
    }
    network.innerText = networkCarrier;
    networkLogo.src = networkCarrierlogo;
    
    // put p and img in the resultDiv
    resultDiv.appendChild(network);
    resultDiv.appendChild(networkLogo);
    
    //add style to the image
    networkLogo.classList.add("small")
    
    //reset the input to nothing after submition
    input.value = ""
    //hide the Network Carrier Checker interface after submition
    boxDiv.classList.toggle('hide-result');
  }
} 
//back button
function hideResult(e){
  resultDiv.classList.toggle('hide-result');
  boxDiv.classList.toggle('hide-result');

  // reset the result value
  resultDiv.removeChild(inputNumber);
  resultDiv.removeChild(network);
  resultDiv.removeChild(networkLogo);
}

// function change(e){
//   console.log(e.target.value)
// }