async function getJoke() {
    let signature; 
    let source; 
    const data = await fetch("https://api.waifu.im/search/?included_tags=waifu"); 
    const json = await data.json(); 
    signature = json.images[0].signature; 
    source = json.images[0].url; 
    console.log (signature)
    if (signature) {
        document.getElementById("signature").innerText = signature;
    }
 
    if (source) {
        document.getElementById("source").src = source;
    }
}
 
getJoke();