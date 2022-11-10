const arrayPlayers = [];

// Total Number of Player Selected list 

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

    select.setAttribute('onclick','selected(this)')
    select.setAttribute('class',"btn btn-light text-dark");
    select.innerText = "SELECTED"
    


}
        //if any player selected then Deselect Event..

function selected(select){
    select.setAttribute('onclick',"onSelect(this)")
    select.setAttribute('class',"btn btn-primary");
    select.innerText = "SELECT";

    const selectedPlayerName = select.parentNode.children[0].innerText;
    const totalSelectedPlayerNow = document.querySelector('#totalSelected');
    

    const orderList = document.querySelector('#orderList');
    const  orderListLength = orderList.children.length;

    
    
    for(let i = 0; i< orderListLength ; i++){
        let text = orderList.children[i].innerText;

        if(selectedPlayerName === text){

            orderList.removeChild(orderList.children[i]) //removed de-select order list item
            arrayPlayers.pop(selectedPlayerName);

            totalSelectedPlayerNow.innerText = orderList.children.length;
        }   
        
    }
    

}

// Calculate Per Player Expenses

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

// Calculate Total Player Cost //

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