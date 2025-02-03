const searchInput = document.getElementById('search-input');        
const searchInput2 = document.querySelectorAll('.cards');        

const  resulttArtist = document.getElementById ('result-artist');
const resultPlaylist = document.getElementById ('result-artist');

function requestApi (searchTerm){
        const url = 'http://locallhost:3000/artists?name_like=${searchTerm}'
        fetch (url)
        .then ((response) =>  response.json ( ))
        //.then ((result) => displayResults (result))
}

function displayResults(){
        resultPlaylist.classsicList.add('hidden');
        const artistName = document.getElementById('artist-name');
        const artisImage = document.getElementById('artist-img');
        
        result.forEach(element =>{
                artistName.innerText.name;
                artisImage.src = element.urlImg;
        });

        resulttArtist.remove('hidden');

}



document.addEventListener('input',function ()  {
        const searchTerm= searchInput.value.toLowerCase ();
        if (searchTerm === ''){
                resultPlaylist.classList.add('hidden');
                resulttArtist.classList.remove('hidden');
                return;
        }

        requestApi (searchTerm);

} )
