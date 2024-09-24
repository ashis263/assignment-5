//smaller device blog button hyperlink
document.getElementById('blog-btn1').
    addEventListener('click', function(){
        window.location.href = './blog.html';
    });

//larger device blog button hyperlink
document.getElementById('blog-btn2').
    addEventListener('click', function(){
        window.location.href = './blog.html';
    });





//donation button clicking hannder
btnToggler('donation-btn', 'donation', 'history-btn', 'history');

//donation button clicking hannder
btnToggler('history-btn', 'history', 'donation-btn', 'donation');





//for noakhali section donation
donation('noakhali-amount', 'noakhali-btn', 'noakhali-bal', 'noakhali-heading');

//for feni section donation
donation('feni-amount', 'feni-btn', 'feni-bal', 'feni-heading');

//for quota section donation
donation('quota-amount', 'quota-btn', 'quota-bal', 'quota-heading');