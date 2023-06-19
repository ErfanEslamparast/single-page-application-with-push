document.querySelector("nav").addEventListener("click",(e)=>{
    if(e.target.nodeName != "I") return
    let data;
    switch (e.target.getAttributeNode("itemid").value) {
        case "home":
            data={title:"HOME",color:"red",itemid:"home"}
            update(data);
            history.pushState(data,"home","home")
            break;
        case "search":
                data={title:"SEARCH",color:"green",itemid:"search"}
                update(data);
                history.pushState(data,"search","search")
                break;
        case "likes":
            data={title:"LIKES",color:"yellow",itemid:"likes"}
            update(data);
            history.pushState(data,"likes","likes")
            break;
        default:
            data={title:"PROFILE",color:"pink",itemid:"profile"}
            update(data);
            history.pushState(data,"profile","profile")
            break;
    }
})

window.addEventListener("popstate",(e)=>{
    if(history.state){
        update(history.state)
    }else{
        update({title:"HOME",color:"red",itemid:"home"})
    }
})

function update(data){
    document.querySelector("h1").innerText=data.title;
    document.querySelector("main").style.backgroundColor=data.color;
    document.querySelectorAll("i").forEach(element =>
        element.style.color = "#444")
    document.querySelector(`i[itemid=${data.itemid}]`).style.color="#000"
}