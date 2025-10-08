'use strict'
const shortC = document.getElementById('shortCourse');
const edu = document.getElementById('qualification');
const shortCourse = document.getElementById('short');
const qual = document.getElementById('education');
const experience = document.getElementById('myExperience');
const hist = document.getElementById('experience');

shortC.style.display = 'none'; 
hist.style.display = 'none';

const element = document.querySelectorAll('.first-list a');

const sections = {
    education: edu,
    short: shortC,
    myExperience: hist
};


element.forEach(item => {
    item.addEventListener('click', () => {
        const selected = sections[item.id];
        
        // Hide all sections
        Object.values(sections).forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section if it exists
        if (selected) {
            selected.style.display = 'block';
        } else {
            console.log("No id found for such");
        }
    });
});



