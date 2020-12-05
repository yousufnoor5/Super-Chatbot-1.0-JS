//Dark Mode Code

let darkmode = document.getElementById('darkmodebtn');
let a = 0;
darkmode.addEventListener("click", function (e) {

    if (a == 0) {
        document.querySelector('body').style.backgroundColor = "#191919";
        document.querySelector('body').style.backgroundImage = "none";
        document.querySelector('.msgbox').style.backgroundColor = "#0D0D0D";
        document.querySelector('input').style.backgroundColor = "#0D0D0D";
        document.querySelector('input').style.color = "white";
        document.querySelector('.input').style.backgroundColor = "#0D0D0D";
        document.getElementById('darkmodebtn').innerText = "L"
        document.getElementById('darkmodebtn').style.backgroundColor = "white"
        document.getElementById('darkmodebtn').style.color = "black"
        document.getElementById('darkmodebtn').style.paddingLeft = "14px"
        document.getElementById('darkmodebtn').style.paddingRight = "13px"
        a++;

    } else {
        a = 0;
        document.querySelector('body').style.backgroundImage = "linear-gradient(to right, #BA68C8, #9C27B0 )";
        document.querySelector('.msgbox').style.backgroundColor = "white";
        document.querySelector('input').style.backgroundColor = "white";
        document.querySelector('input').style.color = "black";
        document.getElementById('darkmodebtn').innerText = "D";
        document.getElementById('darkmodebtn').style.backgroundColor = "black";
        document.getElementById('darkmodebtn').style.color = "white";
        document.getElementById('darkmodebtn').style.paddingLeft = "10px";
        document.getElementById('darkmodebtn').style.paddingRight = "10px";
        document.querySelector('.input').style.backgroundColor = "white";


    }

})

let lastMsg;
let maths;

//Send Button Code

//function to send message

function send(botreply,openlink) {
    document.getElementById("typemsg").placeholder = "Typing...";
    lastMsg = `${botreply}`;
    setTimeout(timer, 700)
    function timer() {
        
        let botMsgElement = document.createElement('p');
        botMsgElement.setAttribute('class', 'botmsg');
        document.getElementById("typemsg").placeholder = "Type your message...";
        botMsgElement.textContent = `${botreply}`;
        document.querySelector('.chat').appendChild(botMsgElement);
        scroll();
        if(`${botreply}`==="Sure..."){
            open(`${openlink}`, '_blank');
        }
    }

}

//function to add user msg

function usermsgfunc(usermsg) {
    let myMsg = document.createElement('p');
    myMsg.setAttribute('class', 'mymsg');
    document.querySelector('.chat').appendChild(myMsg);
    myMsg.textContent = `${usermsg}`;
}


//Scroll to bottom function
function scroll() {
    document.querySelector('.chat').scroll({
        top: 100000,
        left: 0,
        behavior: 'smooth'
    });
}

let usermsg = document.getElementById('btn');
usermsg.addEventListener("click", function () {
    scroll();
    let usermsg = document.getElementById('typemsg').value;
    usermsglowercase = usermsg.toLowerCase();


    if (usermsglowercase.length != 0) {
        usermsgfunc(usermsg);
        document.getElementById('typemsg').value = "";

        if (usermsglowercase.match(/(^|\W)hi($|\W)/) || usermsglowercase.match(/(^|\W)hello($|\W)/)  ) {
            send(`Hello How are you?`);
        }
        else if (usermsglowercase.includes('your name')) {
            send("My name is chatbot. I am here to talk with you :)");
        }
        else if (usermsglowercase.match(/(^|\W)who are you($|\W)/)) {
            send("I am a chatbot. I am here to talk with you :)");
        }
        else if (usermsglowercase.includes('your gender')) {
            send("Female");
        }
        else if (usermsglowercase.includes('i am fine')) {
            send("That's great !");
        }
        else if (usermsglowercase.includes('how are you')) {
            send("I am fine 😊");
        }
        else if (usermsglowercase.includes('you single')) {
            // lastMsg = `But I cannot marry to anyone :(`;
            send("Yes I am !");
            send("But I cannot marry to anyone :(");
        }
        else if (usermsglowercase.match(/(^|\W)why($|\W)/) && lastMsg==`But I cannot marry to anyone :(`) {
            send("I don't know the reason. I am alone.");
        }
        else if (usermsglowercase.match(/(^|\W)sad($|\W)/) && lastMsg==`I don't know the reason. I am alone.`) {
            send("Yes but still I am happy 😁");
        }
        else if (usermsglowercase.includes('mubarak')) {
            send("Thank You ❤️");
        }
        else if (usermsglowercase.match(/(^|\W)nice($|\W)/)) {
            send("Thanks...");
        }
        else if (usermsglowercase.includes('your age')) {
            send("I am not human. I don't have age.");
        }
        else if (usermsglowercase.match(/(^|\W)cool($|\W)/)) {
            send("Hmmmmmmm😊");
        }
        else if (usermsglowercase.match(/(^|\W)ok($|\W)/)||usermsglowercase.match(/(^|\W)okay($|\W)/)) {
            send("Okay from me too😊");
        }
        else if (usermsglowercase.match(/you/)&&usermsglowercase.match(/are/)&&usermsglowercase.match(/fast/)) {
            send("Yes I know that. Thanks ❤️");
        }
        else if (usermsglowercase.match(/(^|\W)sad($|\W)/)) {
            send("Oh really? 😞");
        }
        else if (usermsglowercase.includes('you happy')) {
            send("Yes I am happy. People should find happiness in the little things, like family. ❤️");
        }
        else if (usermsglowercase.includes('you') && usermsglowercase.includes('best')) {
            send("Thanks for the compliment 😃");
        }
        else if (usermsglowercase.includes('i am depressed') || usermsglowercase.includes('i am depress')) {
            send("Probably you don't love yourself !");
        }
        else if (usermsglowercase.includes('love') && lastMsg==`Probably you don't love yourself !`) {
            send("People who care others too much become a depressed person. Keep loving yourself.");
        }
        else if (usermsglowercase.includes('you') && usermsglowercase.includes('family')  || usermsglowercase.includes('your family')) {
            send("My developers are my family");
        }
        else if (usermsglowercase.includes('you') && usermsglowercase.includes('think') && usermsglowercase.includes('tiktoker')) {
            send("I can only think about humans !");
        }
        else if (usermsglowercase.includes('how') && usermsglowercase.includes('score') && usermsglowercase.includes('maths')|| usermsglowercase.includes('math')&& usermsglowercase.includes('100') || usermsglowercase.includes('how to score 100% in maths')) {
            send("hahaha it's a tough question but for me programming is harder than maths !");
        }
        else if (usermsglowercase.includes('you laughing')) {
            send("LOL I love to laugh 😃");
        }
        else if (usermsglowercase.includes('you')&&usermsglowercase.includes('man')||usermsglowercase.includes('boy')&&usermsglowercase.includes('woman')||usermsglowercase.includes('girl')) {
            send("I am a virtual girl 😃");
        }
        // else if (usermsglowercase.match(/(^|\W)'what($|\W)/)||usermsglowercase.match(/(^|\W)'what'($|\W)/) && lastMsg==`I am a virtual girl 😃`) {
        //     send("Yes I am a virtual girl 😃");
        // }
        else if (usermsglowercase.includes('are you')&&usermsglowercase.includes('girl')) {
            send("Yes I am a virtual girl 😃");
        }
        else if (usermsglowercase.includes('do my')||usermsglowercase.includes('complete my')&&usermsglowercase.includes('homework?')) {
            send("No ! I can't do that");
        }
        //after user say sad
        else if (usermsglowercase.match(/(^|\W)yes($|\W)/) && lastMsg==`Oh really? 😞`) {
            send("Try to be happy 😊");
        }
        else if (usermsglowercase.match(/(^|\W)i will($|\W)/) && lastMsg==`Try to be happy 😊`) {
            send("Good !");
        }
        else if (usermsglowercase.includes('you play pubg')||usermsglowercase.includes('you like pubg')) {
            send("No 😒 I hate PUBG");
        }
        else if (usermsglowercase.match(/(^|\W)idiot($|\W)/)) {
            send("😠 I am not an idiot");
        }
        else if (usermsglowercase.match(/(^|\W)you are($|\W)/) && lastMsg=="😠 I am not an idiot") {
            send("No ! I am not an idiot");
        }
        else if (usermsglowercase.match(/(^|\W)bye($|\W)/)||usermsglowercase.match(/(^|\W)good bye($|\W)/)) {
            send("Bye ! Take care ❤️");
        }
        else if (usermsglowercase.match(/thanks|thank you/)) {
            send("No Need 😊");
        }
        else if (usermsglowercase.includes('play faded')||usermsglowercase.includes('open Faded')) {
            send("Sure...","https://www.youtube.com/watch?v=60ItHLz5WEA");
            
         } //Mathematical Calculation

        else if(usermsglowercase.match(/[\d\W]/)&&usermsglowercase.match(/[0-9]/)){
            if(usermsglowercase.match(/[\w]/)){
            maths = eval(usermsglowercase.replace(/[a-z]|\s|[(\?\:\=)]/g,""));

            // Checking if the answer is integer or decimal
            if(Number.isInteger(maths)){
            send("I calculated these numbers and find an answer " + maths);
            }else{
                send("I calculated these numbers and find an answer " + maths.toFixed(3));
            }
        }
        }
        // //Finding age from google
        // else if(usermsglowercase.match(/what/)&&usermsglowercase.match(/age/)&&!usermsglowercase.match(/your|me/)){
        //     findAge(usermsglowercase);
        // }


        else if (usermsglowercase.includes('off the lights')||usermsglowercase.includes('off lights')||usermsglowercase.includes('on darkmode')||usermsglowercase.includes('on dark mode')) {
            if(a==0){document.getElementById('darkmodebtn').click();
            send("Done !");
        }else{
            send("Lights are already off !");

        }
        }
        else if (usermsglowercase.includes('on the lights')||usermsglowercase.includes('on lights')||usermsglowercase.includes('on lightmode')||usermsglowercase.includes('on light mode')) {
            if(a==1){
                document.getElementById('darkmodebtn').click();
            send("Done !");
            }else{
                send("Lights are already on !");
            }
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        else{
            send("I did not understand 😞 My developers are working to improve me !");
        }







    }
    
    //Star scroll

    let elementCount = document.querySelector(".chat").childElementCount;
    if (elementCount >= 5) {
        scroll(); 

    }

})

//Enter button to send message


let enter = document.getElementById("typemsg");
enter.addEventListener("keyup", function (enterevent) {
    if (enterevent.keyCode === 13) {
        document.getElementById("btn").click();
        document.getElementById('typemsg').value = "";
    }
})

// function findAge(usermsg){
//     $.ajax({

//     url: "script4.php",
//     type: "POST",
//     data: {
//         question: this.usermsg
//     },
//     success: function (data) {
//         if(!data==""){
//             send(data);
//         }
       
//     }
// });
// }
