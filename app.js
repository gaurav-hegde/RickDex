let pagenr = 1;
const search = document.getElementById('search');
let rmChar = [];

search.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    // const filteredCharacters = rmChar.filter((json) => {
    //     return {
    //         json.name.includes(e.target.value);
    //         character.
    //     }
    // })
});


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

