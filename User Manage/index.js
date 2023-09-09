console.log("run");

let store=[];

const onWindowLoad =() =>{
    let data =""
    for (let i=0 = 0; i< store.length; i++) {

        // const element = array[i=0];
        data += <div class="card" style="width: 18rem;">
            <h6 class="card-subtitle mb-2 text-body-secondary">First Name: ${store[i].fName}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">Last Name: ${store[i].lName}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">Age: ${store[i].age}</h6>
        <h6 class="card-subtitle mb-2 text-body-secondary">Address:${store[i].address}</h6>
        <button id="btn-${i}" type="button" class="btn btn-danger m-1">Delete</button>
    </div>
        
    }
    // document.getElementById('display').innerHTML=data;

function delete_user(val){
    detail.splice(val);
   OnWindowLoad();
   }

const clear = () => {
    document.getElementById('f-name').value = ''
    document.getElementById('l-name').value = ''
    document.getElementById('age').value = ''
    document.getElementById('address').value = ''

}


const saveUser=() =>{
    const name1=document.getElementById("f-name").value;
    const name2=document.getElementById("L-name").value;
    const age=document.getElementById("age").value;
    const address=document.getElementById("address").value;
    
    if(f_name !=='' && age !=='' && address !==''){
        store.push({
                name1:f_name,
                name2:L_name,
                age:age,
                address:address
              
    })
    clear();
    onWindowLoad();

}else{
    alert('Please fill the text...!!')
}
}

