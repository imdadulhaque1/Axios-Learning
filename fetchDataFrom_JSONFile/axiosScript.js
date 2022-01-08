
document.getElementById("btn").addEventListener('click', dataShowBrowser);

// ---------> Promise | Showing Data in Browser
// function dataShowBrowser(){
//     axios.get('data.json').then((res) =>{
//         // console.log(res.data)
//         document.getElementById("uName").innerText = res.data.name;
//         document.getElementById("uUni").innerText = res.data.uni;
//         document.getElementById("uSub").innerText = res.data.sub;
//         document.getElementById("uDesignation").innerText = res.data.designation;
//     })
// }


// ---------> Async and Await | Showing Data in Browser
// async function dataShowBrowser(){
//     console.log("Clicked on Button")
//     config = {
//         method: 'get',
//         url: 'data.json'
//     }
//     const res = await axios(config)
//     // console.log(res)
//     // console.log(res.data)
//     document.getElementById("uName").innerText = res.data.name;
//     document.getElementById("uUni").innerText = res.data.uni;
//     document.getElementById("uSub").innerText = res.data.sub;
//     document.getElementById("uDesignation").innerText = res.data.designation;
// }


// ---------> Async and Await | Try and Catch for error handling | Showing Data in Browser
async function dataShowBrowser(){
    try{
        // alert("Clicked the Button!");
        const res = await axios.get('data.json');
        // console.log(res.data.name);
        
        document.getElementById("uName").innerText = res.data.name;
        document.getElementById("uUni").innerText = res.data.uni;
        document.getElementById("uSub").innerText = res.data.sub;
        document.getElementById("uDesignation").innerText = res.data.designation;
        
    }
    catch(err){
        // console.log(err)
        document.getElementById("uName").innerText = err;
        document.getElementById("uUni").innerText = err;
        document.getElementById("uSub").innerText = err;
        document.getElementById("uDesignation").innerText = err;
    }
}