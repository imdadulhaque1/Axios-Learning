
document.getElementById("btn").addEventListener('click', dataShowBrowser);


//---------> Promises Then | Single Data
// function dataShowBrowser(){
//     config = {
//         params: {id:1}
//     }
//     console.log("Button Clicked!")
//     axios('https://jsonplaceholder.typicode.com/posts/',config)
//     .then((res) =>{
//         // console.log(res.data[0].title)
//         // document.getElementById('title').innerText = res.data[0]
//         // document.getElementById('title').innerText = res.data[0].title
//         // document.getElementById('id').innerText = res.data[0].id
//         // document.getElementById('body').innerText = res.data[0].body

//         data = res.data[0]
//         document.getElementById('title').innerText = data.title
//         document.getElementById('id').innerText = data.id
//         document.getElementById('body').innerText = data.body
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }


//---------> Promises Then | Multiple Data
function dataShowBrowser(){
    config = {
        params: {id:1}
    }
    console.log("Button Clicked!")
    axios('https://jsonplaceholder.typicode.com/posts/')
    .then((res) =>{
        let output = document.getElementById("allPost")
        console.log(res.data)
        res.data.forEach(element => {
            console.log("ID: ", element.id);
            output.innerHTML+=`
                <div class="bg-dark m-2 p-3 text-white">
                    <p>ID: ${element.id}</p>
                    <p>Title: ${element.title}</p>
                    <p>Body: ${element.body}</p>
                </div>
            `

            // document.getElementById('id').innerText = element.id;
            // document.getElementById('title').innerText = element.title;
            // document.getElementById('body').innerText = element.body;
            
        });
    })
    .catch((err) => {
        console.log(err);
    })
}