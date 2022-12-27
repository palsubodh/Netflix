
    let id;
    let y=document.getElementById('movies')
    let box=document.getElementById('box')
    async function getmovies(query){

        try{
        // let url = `http://www.omdbapi.com/?s=${query}&apikey=d806bd70`
        let url =` http://www.omdbapi.com/?s=${query}&apikey=5f7811dc`
        let res = await fetch(url)
        let data=await res.json();
        console.log(data)
        return data.Search;
        // 
    }catch(error){
        console.log('error',error)
    }
}

function appendM(movies){
    y.innerText=null;
    box.innerText=null;
    if(movies===undefined)
    {
        return false;
    }
    // console.log(movies)
    movies.forEach(function(el){
        
        let p= document.createElement("p")
        p.innerText=el.Title
        p.style.color="white"
        let image=document.createElement("img")
        image.src=el.Poster;
        let name= document.createElement("h2")
        name.innerText=el.Title;
        name.style.color="white"
        let type =document.createElement("h3");
        type.innerText="Type :"+el.Type;
        type.style.color="white"
        let year=document.createElement("h3")
        year.innerText="Year :"+el.Year;
        year.style.color="white"
        let imdb=document.createElement("p")
        imdb.innerText="Imdb :"+el.imdbID;
        imdb.style.color="white"
        y.append(p);

        box.append(image,name,type,year,imdb)
    });
}



   async function main(){
        let query = document.getElementById('query').value;
        let x=  getmovies(query)
        let data= await x;
        appendM(data)
        // console.log('data:',data)
    }

function deboucing(func,delay){
    if(id)
    {
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay)
}


