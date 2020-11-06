var count = 0;



  function sound() {

      soundHit = new Audio('swish.mp3');
      soundHit.play();

  };

  function gett() {


    var cards2 = [
     ["bg9xXKi", 2], ["zptXFBO", 3], ["qzqR7UD", 4], ["yrFm5qz", 5] ["1lBsrfu", 6], ["fHjITaL", 7], ["Zv5GNvj", 8],["G4bIY2z", 9], ["h24mDAr", 10], ["9REmOzw", 10] ["akpgziS", 10], ["iKiil70", 10], ["noG2HYQ", 1] 
     ];


    var randomNum =  Math.floor(Math.random() * cards2.length);


    
    var cards3 = cards2[randomNum][0];
    var cards4 = cards2[randomNum][1];

    
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://i.imgur.com/" + cards3 + ".png");
    x.setAttribute("position", "absolute");
    x.setAttribute("width", "65");
    x.setAttribute("height", "80");
    x.setAttribute("position", "absolute");
    


    gettAppend = document.querySelector(".cardsPlayerDeck").appendChild(x);


    var displayScore = document.querySelector(".playerScore");
    sum = parseInt(displayScore.textContent) + cards4;
    displayScore.textContent = sum;

    player1 = sum;

    

      document.querySelector(".dealText").addEventListener('click', function() { 
      document.querySelector(".cardsPlayerDeck").removeChild(x);
      var displayScore = document.querySelector(".playerScore");
      var sum = 0;
      displayScore.textContent = sum;
      document.querySelector(".box").style.display = "none";
      document.querySelector(".message").style.display = "none";
      });
      
     if (sum > 21) {
          soundHit.pause();
          var soundAww = new Audio('aww.mp3');
          soundAww.play();
          var str = " BUST!";
          displayScore.textContent = sum + str;

        document.querySelector(".box").style.display = "block";
        document.querySelector(".message").style.display = "block";
        document.querySelector(".message").innerHTML = "Bot Won!!";
     };

        
  
};
  


function gett1() {
  
  sound();
  gett();
};

function gett2() {


  sound();

 var cards2 = [
     ["bg9xXKi", 2], ["zptXFBO", 3], ["qzqR7UD", 4], ["yrFm5qz", 5] ["1lBsrfu", 6], ["fHjITaL", 7], ["Zv5GNvj", 8],["G4bIY2z", 9], ["h24mDAr", 10], ["9REmOzw", 10] ["akpgziS", 10], ["iKiil70", 10], ["noG2HYQ", 1] 
     ];


    var randomNum =  Math.floor(Math.random() * cards2.length);
    var cards3 = cards2[randomNum][0];
    var cards4 = cards2[randomNum][1];

    
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://i.imgur.com/" + cards3 + ".png");
    x.setAttribute("position", "absolute");
    x.setAttribute("width", "65");
    x.setAttribute("height", "80");
    x.setAttribute("position", "absolute");


    gettAppend = document.querySelector(".cardsBotDeck").appendChild(x);


    var displayScore = document.querySelector(".botScore");
    var sum = parseInt(displayScore.textContent) + cards4;
    displayScore.textContent = sum;








    while (sum <= 21) {
    sound();

    var cards2 = [
     ["bg9xXKi", 2], ["zptXFBO", 3], ["qzqR7UD", 4], ["yrFm5qz", 5] ["1lBsrfu", 6], ["fHjITaL", 7], ["Zv5GNvj", 8],["G4bIY2z", 9], ["h24mDAr", 10], ["9REmOzw", 10] ["akpgziS", 10], ["iKiil70", 10], ["noG2HYQ", 1] 
     ];


    var randomNum =  Math.floor(Math.random() * cards2.length);
    var cards3 = cards2[randomNum][0];
    var cards4 = cards2[randomNum][1];

    
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://i.imgur.com/" + cards3 + ".png");
    x.setAttribute("position", "absolute");
    x.setAttribute("width", "65");
    x.setAttribute("height", "80");
    x.setAttribute("position", "absolute");

    gettAppend = document.querySelector(".cardsBotDeck").appendChild(x);
 

    var displayScore = document.querySelector(".botScore");
    var sum = parseInt(displayScore.textContent) + cards4;
    displayScore.textContent = sum; 

    
    


      document.querySelector(".dealText").addEventListener('click', function() { 
      document.querySelector(".cardsBotDeck").remove(x);
      var displayScore = document.querySelector(".botScore");
      var sum1 = 0;
      displayScore.textContent = sum1;
      document.querySelector(".box").style.display = "none";
      document.querySelector(".message").style.display = "none";

      });


    


    };

 

     if (sum > 21) {
          soundHit.pause();
          var soundCash = new Audio('cash.mp3');
          soundCash.play();
          var str = " BUST!";
          displayScore.textContent = sum + str;
          
        document.querySelector(".box").style.display = "block";
        document.querySelector(".message").style.display = "block";
        document.querySelector(".message").innerHTML = "You Won!!";

        
        
     };

      


};
/*
function gett21() {

       document.querySelector(".standText").addEventListener('click', function() { 
            if(sum > 2) {
                  document.querySelector(".box").style.display = "block";
                  document.querySelector(".message").style.display = "block";
                  document.querySelector(".message").innerHTML = "You Won!!";
            } else {
                  document.querySelector(".box").style.display = "block";
                  document.querySelector(".message").style.display = "block";
                  document.querySelector(".message").innerHTML = "Bot Won!!";
            };

       });


};
*/
