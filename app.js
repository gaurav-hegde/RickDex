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

