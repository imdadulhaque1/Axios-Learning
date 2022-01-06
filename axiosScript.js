document.getElementById('btn').addEventListener('click', makerequest);

function makerequest(){
    // alert("Button Clicked!")
    // config = {
    //     method: 'get',
    //     url: 'data.txt'
    // }
    // const promiseObj = axios(config);
    // promiseObj.then((res) =>{
    //     // console.log(res)
    //     console.log(`Data: ${res.data}  Status: ${res.status}`);
    // })

    // axios(config)
    //     .then((res) =>{
    //         console.log(`Data: ${res.data}  Status: ${res.status}`);
    // })

    // Get data via axios using get method
    axios.get('data.txt').then((res) =>{
        console.log(res);
        console.log(res.data);
    }).catch((err) =>{
        console.log(err)
    })
    .then(() =>{
        console.log("Error Cleaned!")
    })
}

