function getInputNumValById(id){
    const val = document.getElementById(id).value;
    const valInNum = Number(val);
    return valInNum;
}

function donation(inputtedAmount, bal, heading){
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

                const div = document.createElement('div');
                div.innerHTML = `
                <div class="p-2 sm:p-5 border-2 rounded-xl mb-2 sm:mb-2 space-y-2 sm:space-y-4">
                    <p class="text-sm sm:text-xl font-bold">${amount} Taka is Donated for "${document.getElementById(heading).innerText}"</p>
                    <p class="text-textSecondary text-xs sm:text-lg">Date: ${date}</p>
                </div>
                `;
                document.getElementById('history').appendChild(div);
            }
            
            document.getElementById('remaining-bal').innerText = remainingBal;

            document.getElementById(bal).innerText = balInNumber;
        } else {
            alert('Please Enter Valid Amount')
        }
        document.getElementById(inputtedAmount).value = '';
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

