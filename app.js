let pagenr = 1;

async function rickChar(pagenr){
    const response = await fetch(`https://rickandmortyapi.com/api/character/${pagenr}`);
    const json = await response.json();
    console.log(json);

    const box = document.createElement("div");
        box.innerHTML=`
        <img src=${json.image}>
        <h2>${json.name}</h2>
        <p>Origin: ${json.origin.name}</p>
        
        `;
    document.querySelector(".box").appendChild(box);
    
}
for (i = 1 ; i < 100 ; i++)
{
    rickChar(pagenr);
    pagenr++;
}

function search_char() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let x = document.querySelectorAll('div > h2');

    for (i = 0 ; i < x.length ; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";  
    }
    }
}