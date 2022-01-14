let startBal1=parseInt(localStorage.getItem('inputValueLs'));
var currBalance =startBal1;
var currProfit = startBal1-currBalance;
var maxWonInRow=0;
var maxLossInRow=0;

var maxWonInRowCount=0;
var maxLossInRowCount=0;

var highestProfit=currProfit;

var tradeWon=0;
var tradeLost=0;

var noOfTrades=0;
var winRate=0;

var oldProfit=0;

var currLoss=0;


        //document.getElementById("submitButton").onclick = function () {
            //startBal=document.getElementById("startBal").value;
            
        //};

        // load the initial values on page load
        window.onload = function(){
            
            document.getElementById("noOfTrades").innerHTML = noOfTrades;
            document.getElementById("winRate").innerHTML = winRate;

            document.getElementById("tradeWon").value = tradeWon;
            document.getElementById("tradeLost").value = tradeLost;


            document.getElementById("showStartBal").innerHTML = startBal1;
            document.getElementById("currBalance").innerHTML = currBalance;
            document.getElementById("currProfit").innerHTML = currProfit;
            document.getElementById("maxWonInRow").innerHTML = maxWonInRow;
            document.getElementById("maxLossInRow").innerHTML = maxLossInRow;
            document.getElementById("highestProfit").innerHTML = highestProfit;



        };


        //when user adds profit
        function addProfit(){
            var profit=parseFloat(document.getElementById("profitInput").value);
            currBalance=currBalance+profit;
            
            //to find highest profit
            if (profit>oldProfit){
                highestProfit=profit;
                oldProfit=profit;
            }else{
                highestProfit=oldProfit;
            }

            tradeWon++;
            noOfTrades++;
           

            //maxWonInRowCount
            maxLossInRowCount=0;
            maxWonInRowCount++;
            
            //assigning max won count
            if(maxWonInRowCount>maxWonInRow){
                maxWonInRow=maxWonInRowCount;
            }

            updateBalance();
        }


        //when user adds loss
        function addLoss(){
            var loss=parseFloat(document.getElementById("lossInput").value);
            currBalance=currBalance-loss;

            tradeLost++;
            noOfTrades++;
            

            //maxLossInRowCount
            maxWonInRowCount=0;
            maxLossInRowCount++;
           

            //assigning max won count
            if(maxLossInRowCount>maxLossInRow){
                maxLossInRow=maxLossInRowCount;
            }


            updateBalance();

        }

        // updates the current balance
        function updateBalance(){
            document.getElementById("currBalance").innerHTML = currBalance;


            currProfit=currBalance-startBal1;
            document.getElementById("currProfit").innerHTML = currProfit;

            document.getElementById("tradeWon").value = tradeWon;
            document.getElementById("tradeLost").value = tradeLost;
            document.getElementById("highestProfit").innerHTML = highestProfit;
            document.getElementById("noOfTrades").innerHTML = noOfTrades;
            winRateFinder();
            document.getElementById("maxWonInRow").innerHTML = maxWonInRow;
            document.getElementById("maxLossInRow").innerHTML = maxLossInRow;


        }

        function winRateFinder(){
            winRate=(tradeWon/noOfTrades)*100;

            document.getElementById("winRate").innerHTML = winRate.toFixed(2);

        }


console.log("hi");
