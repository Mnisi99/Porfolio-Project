'use strict'

const doc = document.getElementById("cvDownload");

doc.addEventListener('click', () => {

    var answer = "";

    while(answer != "yes" && answer != "no") {

         answer = prompt("Are you sure you want to download the Cv?");

          if (answer === null) {
            event.preventDefault();
            break;
             
          }else if (answer.toLowerCase() === "yes") {
            alert("About to download Mnisi's Cv!!");
            break;

          }else if (answer.toLowerCase() === "no") {
            event.preventDefault();
            break;

          }else {
            alert("You entered an invalid input, please try again!!");
            event.preventDefault();
            continue;
          }

    }
});

const menu = document.querySelector('.navigation');
const navigation = document.querySelector('.navigation ul');

menu.addEventListener('click', () => {
  navigation.style.display = 'block';
});
