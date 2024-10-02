window.addEventListener("DOMContentLoaded", async () => {
    let response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json")
    console.log(response.data);
    
    document.querySelector("#name").innerHTML = `<li>Name: ${response.data.Name}</li>`;
    document.querySelector("#number").innerHTML = `<li>Mobile: ${response.data.Mobile}</li>`;
    document.querySelector("#currentAdd").innerHTML = `<li>: Current Adddress: ${response.data.Address["Permanent address"]}</li>`;
    document.querySelector("#permAdd").innerHTML = `<li>Permanent Address: ${response.data.Address["currrent address"]}</li>`;
  
})