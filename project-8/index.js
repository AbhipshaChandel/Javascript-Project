    async function addItem(e){
    await randomNumber()
    let text2=document.querySelector(".div")
    text2.innerHTML=e
    }

     function randomNumber(){
        return new Promise((resolve,reject)=>{
            let x=Math.random()*12+5
            setTimeout(()=>{
              resolve()
            },x*1000)

        })
    }



    let text=["Initializing Hacking","Reading your files","Password files detected","Sending all passwords and personal files to server","Cleaning up"]
   
    async function start() {
       setTimeout(()=>{

         let t=setInterval(() => {
             let last=document.querySelector(".div")
 
             if(last.innerHTML.endsWith("...")){
               last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
             }
             else{
               last.innerHTML=last.innerHTML+"."
             }
             
         }, 1000);
        
       },5000)

        for (const element of text) {
           await addItem(element)
        }

        await randomNumber()
        clearInterval(t)

    }


    start()
