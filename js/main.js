const adviceBtn= document.querySelector(".advice-btn")
const adviceId= document.querySelector(".advice-id")
const adviceText= document.querySelector(".advice-text")


// const baseUrl = 'https://api.adviceslip.com/advice'
const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    const {slip} = data
    adviceId.innerHTML = `#${slip.id}`
    adviceText.innerHTML = slip.advice
};

fetchData()

adviceBtn.addEventListener("click", fetchData);