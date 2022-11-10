const arrayPlayers = [];


function onSelect(select){
    const totalSelectedPlayer = document.querySelector('#totalSelected');
    const orderList = document.querySelector('#orderList');
    let playerName = select.parentNode.children[0].innerText;
    
    arrayPlayers.push(playerName); //to get players length
    const arrLength = arrayPlayers.length;
    totalSelectedPlayer.innerText = arrLength;

    const li = document.createElement('li');
    li.innerText = playerName;
    
    orderList.appendChild(li);


}

document.querySelector('#playerCostCalculate').addEventListener('click',function(){
    const playerExpenses = document.querySelector('#playerExpenses');

    const perPlayerCost = document.querySelector('#perPlayerCost').value;
    const perPlayerCostFloat = parseFloat(perPlayerCost);

    const totalSelectedPlayer = document.querySelector('#totalSelected').innerText;
    const totalSelectedFloat = parseFloat(totalSelectedPlayer);

    if(perPlayerCostFloat>0){

        const totalPlayerCost = perPlayerCostFloat * totalSelectedFloat;

        playerExpenses.innerText = totalPlayerCost;
    }


    document.querySelector('#perPlayerCost').value = ''; //input field value clear

})

document.querySelector('#totalCalculate').addEventListener('click', function(){
    const playerExpenses = document.querySelector('#playerExpenses').innerText;
    const playerExpensesFloat = parseFloat(playerExpenses); // 1

    const managerCost =document.querySelector('#manager').value;
    const managerCostFloat =parseFloat(managerCost); // 2

    const coachCost = document.querySelector('#coach').value;
    const coachCostFloat = parseFloat(coachCost); // 3

    const displayCost = document.querySelector('#displayCost');

    if(playerExpensesFloat>=0 && managerCostFloat>=0 && coachCostFloat>=0){
        const subTotalCost = playerExpensesFloat + managerCostFloat + coachCostFloat;

        displayCost.innerText = subTotalCost;
    };
    

    document.querySelector('#manager').value = ''; //reset input field
    
    document.querySelector('#coach').value = ''; //reset input field
})