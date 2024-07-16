async function fetchPoke(){
    try{
        let input = document.getElementById("searchBox").value;


        let fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)

        if(!fetching.ok){
            throw new Error("Could not find such Pokemon");
        }

        let data = await fetching.json();

        let pokeImage = data.sprites.front_default;
        let imageElement = document.getElementById("pokePhoto")

        imageElement.src = pokeImage;
        imageElement.style.display = "block";
    }
    catch(error){
        console.error(error)
    }
}