import './App.css';
import './index.js'

function App() {

  function wordDNI(){

     let introducedNumber = document.getElementById("inpDni").value;
     let DniWordOperation = Math.trunc(introducedNumber%23);
     let DniWord = ""; 
     let htmlToIntroduce = "";

     if(introducedNumber !== "" && !isNaN(introducedNumber) && introducedNumber.toString().length === 8){
      if(DniWordOperation === 0)
        DniWord = "T"
      if(DniWordOperation === 1)
        DniWord = "R"
      if(DniWordOperation === 2)
        DniWord = "W"
      if(DniWordOperation === 3)
        DniWord = "A"
      if(DniWordOperation === 4)
        DniWord = "G"
      if(DniWordOperation === 5)
        DniWord = "M"
      if(DniWordOperation === 6)
        DniWord = "Y"
      if(DniWordOperation === 7)
        DniWord = "F"
      if(DniWordOperation === 8)
        DniWord = "P"
      if(DniWordOperation === 9)
        DniWord = "D"
      if(DniWordOperation === 10)
        DniWord = "X"
      if(DniWordOperation === 11)
        DniWord = "B"
      if(DniWordOperation === 12)
        DniWord = "N"
      if(DniWordOperation === 13)
        DniWord = "J"
      if(DniWordOperation === 14)
        DniWord = "Z"
      if(DniWordOperation === 15)
        DniWord = "S"
      if(DniWordOperation === 16)
        DniWord = "Q"
      if(DniWordOperation === 17)
        DniWord = "V"
      if(DniWordOperation === 18)
        DniWord = "H"
      if(DniWordOperation === 19)
        DniWord = "L"
      if(DniWordOperation === 20)
        DniWord = "C"
      if(DniWordOperation === 21)
        DniWord = "K"
      if(DniWordOperation === 22)
        DniWord = "E"
        htmlToIntroduce = `<h1>La letra es: <span id="letra">${DniWord}</span> </h1>`;
     } else {
        htmlToIntroduce = `<h3 id="error">Numero no valido.<h3>`;
     }

     document.getElementById("toChange").innerHTML = htmlToIntroduce;
  }

  return (
    <div className='App'>
      <div className="App-main">
        <h1>Introduce los numeros de tu <span>DNI</span>:</h1>
        <input id="inpDni" type="text"></input>
        <button onClick={wordDNI}>CALCULAR LETRA</button>
        <div id="toChange"></div>
      </div>
    </div>
  );
}

export default App;
