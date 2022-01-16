document.getElementById("btn").addEventListener('click', dataShowBrowser);


// --------> Promise Then 
// function dataShowBrowser(){
//      const config={
//          method: 'POST',
//          url: 'https://reqres.in/api/users',
//          Headers:{
//              'Content-Type':'application/json'
//          },
//         //  data: '{"Name":"Imdadul Haque", "Designation":"Software Engineer", "University_name":"Daffodil International University"}'
//          data: {"Name":"Imdadul Haque", "Designation":"Software Engineer", "University_name":"Daffodil International University"}
//      }
//      axios(config).then((res) => {
//          console.log(res)
//          console.log(res.data)
//          console.log(res.data.Name)
//          console.log(res.data.Designation)
//          console.log(res.data.University_name)
//          console.log(res.data.createdAt)
//      })
//      .catch((err)=>{
//          console.log(err)
//      })
// }


function dataShowBrowser(){
    url='https://reqres.in/api/users'
    // data= '{"Name":"Imdadul Haque", "Designation":"Software Engineer", "University_name":"Daffodil International University"}'
    data= {"Name":"Imdadul Haque", "Designation":"Software Engineer", "University_Name":"Daffodil International University"}
    const config={
        Headers:{
            'Content-Type':'application/json'
        },
    }

    axios.post(url, data, config) 
    .then((res) =>{
        // console.log(res.data)
        console.log(res.data.Name)
        console.log(res.data.Designation)
        console.log(res.data.University_Name)
    })
    .catch((err) =>{
        coneole.log(err)
    })
}
