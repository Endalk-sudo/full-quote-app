const btn = document.querySelector(".btn");
const container = document.querySelector(".quotes-container");


btn.addEventListener("click",async ()=>{
    try {
        const response = await fetch("http://localhost:8000/quote");
        const data = await response.json();
        const {quote, author, category} = data;
    
        container.innerHTML = `
            <div class="quote">
                <div class="q"> <span>Author :  </span> ${author}</div>
                <div class="q"> <span>Category :  </span> ${category}</div>
                <div class="q"> <span>Quote :  </span> "${quote}"</div>
             </div>`;
    } catch (error) {
        console.error(error.message);
    }
})