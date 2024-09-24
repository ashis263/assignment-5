document.getElementById('blog-btn1').
    addEventListener('click', function(){
        window.location.href = './blog.html';
    });

document.getElementById('blog-btn2').
    addEventListener('click', function(){
        window.location.href = './blog.html';
    });

const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');

const donationSection = document.getElementById('donation');
const historySection = document.getElementById('history');

donationBtn.addEventListener('click', function(){
    historyBtn.classList.add('btn-outline');        
    historyBtn.classList.add('text-textSecondary');        
    historyBtn.classList.remove('bg-primary');        
    donationBtn.classList.remove('btn-outline');        
    donationBtn.classList.remove('text-textSecondary');        
    donationBtn.classList.add('bg-primary');
    donationSection.classList.remove('hidden'); 
    historySection.classList.add('hidden'); 
    
});

historyBtn.addEventListener('click', function(){
    donationBtn.classList.add('btn-outline');        
    donationBtn.classList.add('text-textSecondary');        
    donationBtn.classList.remove('bg-primary');        
    historyBtn.classList.remove('btn-outline');        
    historyBtn.classList.remove('text-textSecondary');        
    historyBtn.classList.add('bg-primary');        
    donationSection.classList.add('hidden'); 
    historySection.classList.remove('hidden'); 
    donationSection.classList.add('hidden'); 
});

//for noakhali section donation
donation('noakhali-amount', 'noakhali-btn', 'noakhali-bal', 'noakhali-heading');

//for feni section donation
donation('feni-amount', 'feni-btn', 'feni-bal', 'feni-heading');

//for quota section donation
donation('quota-amount', 'quota-btn', 'quota-bal', 'quota-heading');