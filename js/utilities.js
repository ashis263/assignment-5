function getInputNumValById(id){
    const val = document.getElementById(id).value;
    const valInNum = Number(val);
    return valInNum;
}

function donation(inputtedAmount, clickedBtn, bal, heading){
    document.getElementById(clickedBtn).
    addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputNumValById(inputtedAmount);
        let remainingBalString = document.getElementById('remaining-bal').innerText;
        let remainingBal = parseFloat(remainingBalString);
        let balString = document.getElementById(bal).innerText;
        let balInNumber = parseFloat(balString);
        if (amount > 0) {
            if (remainingBal - amount < 0) {
                alert('Insufficient Balance')
            } else {
                remainingBal -= amount;
                balInNumber += amount;
                const date = new Date();
                document.getElementById(inputtedAmount).value = '';

                const div = document.createElement('div');
                div.innerHTML = `
                <div style="padding: 20px; border: 1px solid rgba(17, 17, 17, 0.1); border-radius: 10px; margin-bottom: 20px;">
                    <p style="font-size: 20px; color: rgb(17, 17, 17)"><b>${amount} Taka is Donated for "${document.getElementById(heading).innerText}</b>"</p>
                    <br>
                    <p style="color: rgba(17, 17, 17, 0.7)">Date: ${date}</p>
                </div>
                `;
                document.getElementById('history').appendChild(div);
            }
            
            document.getElementById('remaining-bal').innerText = remainingBal;

            document.getElementById(bal).innerText = balInNumber;
        } else {
            alert('Please Enter Valid Amount')
        }
    });
}

