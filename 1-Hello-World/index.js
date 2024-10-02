window.addEventListener("DOMContentLoaded", async () =>  {
    let response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");
    console.log(response.data);
    document.querySelector("body").innerHTML = response.data;
})
