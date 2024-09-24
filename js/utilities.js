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

function btnToggler(btn1, section1, btn2, section2) {
    const ownBtn = document.getElementById(btn1);
    const ownSection = document.getElementById(section1);
    const otherBtn = document.getElementById(btn2);
    const otherSection = document.getElementById(section2);
    ownBtn.addEventListener('click', function () {
        otherBtn.classList.add('btn-outline');
        otherBtn.classList.add('text-textSecondary');
        otherBtn.classList.remove('bg-primary');
        ownBtn.classList.remove('btn-outline');
        ownBtn.classList.remove('text-textSecondary');
        ownBtn.classList.add('bg-primary');
        ownSection.classList.remove('hidden');
        otherSection.classList.add('hidden');
    });
}

