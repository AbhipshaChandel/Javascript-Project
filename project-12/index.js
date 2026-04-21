function clock(){
    let now=new Date()
    let day=now.getDate()
    let month=now.getMonth()
    let year=now.getFullYear()
    let hours=now.getHours()
    let minutes=now.getMinutes()
    let seconds=now.getSeconds()

    hours=hours<10?"0"+hours:hours
    minutes=minutes<10?"0"+minutes:minutes
    seconds=seconds<10?"0"+seconds:seconds

    day=day<10?"0"+day:day
    month=month<10?"0"+month:month

    let time=hours +":"+minutes+":"+seconds
    let date =day +"-"+month+"-"+year

    document.querySelector(".date").innerHTML="DATE:"+date
    document.querySelector(".time").innerHTML="TIME:"+time
}

setInterval(clock,1000)
clock()
