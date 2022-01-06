document.getElementById('btn').addEventListener('click', makerequest);

function makerequest(){
    // alert("Button Clicked!")
    config = {
        method: 'get',
        url: 'data.txt'
    }
    const promiseObj = axios(config);
    promiseObj.then((res) =>{
        // console.log(res)
        console.log(`Data: ${res.data}  Status: ${res.status}`);
    })
}

