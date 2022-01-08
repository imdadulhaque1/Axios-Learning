
document.getElementById("btn").addEventListener('click', dataShowBrowser);


//---------> Promises Then | Single Data
function dataShowBrowser(){
    console.log("Button Clicked!")
    axios('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) =>{
        console.log(res.data)
        document.getElementById('title').innerText = res.data.title
        document.getElementById('id').innerText = res.data.id
        document.getElementById('body').innerText = res.data.body
        // document.get('title').innerText = res.data.title
    })
    .catch((err) => {
        console.log(err);
    })
}