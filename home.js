
 async function news(){
    let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f2165a898b94479097745d88d0fdf59a`)
    let data = await res.json()
    shownews(data.articles)

}
news()

function shownews(newsarticle){
        newsarticle.forEach(e => {
            let parent = document.getElementById("container")
            let div = document.createElement("button")
            div.addEventListener("click",show)
            function show(){
                let parent1 = document.getElementById("box")
                let divs = document.createElement("div")
                let author = document.createElement("h4")
                author.innerHTML = "Author : " + e.author
                let description = document.createElement("p")
                description.innerHTML = "Description : " + e.description
                //console.log(author,description);
                divs.append(author,description)
                parent1.append(divs)

               
               let anc = document.querySelector('a').href
               alert(anc)
               
               
                
                
            }
            

            

            let author = document.createElement("h4")
            author.innerHTML = "Author : " + e.author
            let description = document.createElement("p")
            description.innerHTML = "Description : " + e.description
            //console.log(author,description);
            div.append(author,description)
            parent.append(div)

        });
}