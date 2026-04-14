      
      function createCard(thumbnail,title,Wname,views,Months,duration){
    let viewsnum
      if(views<1000000 && views >999){
               viewsnum=views/1000 +"K"
      }
      else if(views>1000000){
               viewsnum=views/1000000 +"M"
      }
      else{
        viewsnum=views
      }

      let html=`<div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
            height="150px"
            alt=""
          />
            <div class="capsule">${duration}</div>
        </div>


        <div class="writeup">
          <div class="write-up-1">
            <h3>${title}</h3>
          </div>
          <div class="write-up-2">
            <p>${Wname} . ${viewsnum} views . ${Months} Month ago</p>
          </div>
        </div>
      </div>`

      document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
      }

      createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA","Introduction to Backend | Sigma Web Dev #Video 3","CodewithHarry",980000,3,"38:45")

      createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA","Introduction to Backend | Sigma Web Dev #Video 4","CodewithHarry",880000,1,"40:00")