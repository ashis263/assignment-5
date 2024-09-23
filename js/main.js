document.getElementById('blog-btn').
    addEventListener('click', function(){
        window.location.href = './blog.html';
    });

const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

donationBtn.addEventListener('click', function(){
    historyBtn.classList.remove('btn-outline');        
    historyBtn.classList.remove('text-textSecondary');        
    historyBtn.classList.add('bg-primary');        
    donationBtn.classList.add('btn-outline');        
    donationBtn.classList.add('text-textSecondary');        
    donationBtn.classList.remove('bg-primary');        
});

historyBtn.addEventListener('click', function(){
    donationBtn.classList.remove('btn-outline');        
    donationBtn.classList.remove('text-textSecondary');        
    donationBtn.classList.add('bg-primary');        
    historyBtn.classList.add('btn-outline');        
    historyBtn.classList.add('text-textSecondary');        
    historyBtn.classList.remove('bg-primary');        
});