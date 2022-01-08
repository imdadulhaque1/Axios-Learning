// document.getElementById('btn').addEventListener('click', makerequest);
document.getElementById("btn").addEventListener('click', dataShowBrowser);

// function makerequest(){
//     // alert("Button Clicked!")
//     // config = {
//     //     method: 'get',
//     //     url: 'data.txt'
//     // }
//     // const promiseObj = axios(config);
//     // promiseObj.then((res) =>{
//     //     // console.log(res)
//     //     console.log(`Data: ${res.data}  Status: ${res.status}`);
//     // })

//     // axios(config)
//     //     .then((res) =>{
//     //         console.log(`Data: ${res.data}  Status: ${res.status}`);
//     // })

//     // Get data via axios using get method
//     axios.get('data.txt').then((res) =>{
//         console.log(res);
//         console.log(res.data);
//     }).catch((err) =>{
//         console.log(err)
//     })
//     .then(() =>{
//         console.log("Error Cleaned!")
//     })
// }


// ---------> Promise | Showing Data in Browser
// function dataShowBrowser(){
//     axios.get('data.txt').then((res) =>{
//         // console.log(res.data)
//         document.getElementById("divData").innerText = res.data;
//     })
// }


// ---------> Async and Await | Showing Data in Browser
// async function dataShowBrowser(){
//     console.log("Clicked on Button")
//     config = {
//         method: 'get',
//         url: 'data.txt'
//     }
//     const res = await axios(config)
//     // console.log(res)
//     // console.log(res.data)
//     document.getElementById("divData").innerText = res.data;
// }


// ---------> Async and Await | Try and Catch for error handling | Showing Data in Browser
async function dataShowBrowser(){
    try{
        alert("Clicked the Button!");
        const res = await axios.get('data.txt');
        // console.log(res.data);
        document.getElementById("divData").innerText = res.data;
        
    }
    catch(err){
        console.log(err)
    }
}