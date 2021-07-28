const smallCups = document.querySelectorAll('.cup-small');
const percentage = document.querySelector(".percentage");
const remained = document.querySelector(".remained");
const litres = document.getElementById("litres")

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCup(idx));
})

function highlightCup(idx) {
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
};

function updateBigCup(){
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 300}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    
    if(fullCups !== totalCups)
        litres.innerText = `${2 - (250 * fullCups / 1000)}L`

    if (percentage.style.height === "300px") {
        remained.style.height = "0px";
        remained.style.padding = "0px";
    }
}