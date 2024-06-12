const form=document.getElementById("home")
function handelevent(event){
    event.preventDefault()
    const f=new FormData(event.target)
    console.log(Object.fromEntries(f))
    const url = "http://localhost:3000"
    const response=fetch(url,{
       method:"post",
       mode:"no-cors",
       headers:{
        "Content-Type":"application/json"

       },
       body:JSON.stringify(Object.fromEntries(f)) 
    })
}
form.addEventListener("submit",(e)=>handelevent(e))

