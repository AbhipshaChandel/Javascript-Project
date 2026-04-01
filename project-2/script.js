// let saveBtn = document.getElementById("saveBtn");
// let list = document.getElementById("bookmarkList");

// // Load saved bookmarks when page opens
// window.onload = function () {
//   let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//   bookmarks.forEach(bookmark => addBookmarkToPage(bookmark.name, bookmark.url));
// };

// saveBtn.addEventListener("click", function () {
//   let name = document.getElementById("siteName").value;
//   let url = document.getElementById("siteURL").value;

//   if (name === "" || url === "") {
//     alert("Please enter both fields");
//     return;
//   }

//   addBookmarkToPage(name, url);

//   let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
//   bookmarks.push({ name, url });
//   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

//   document.getElementById("siteName").value = "";
//   document.getElementById("siteURL").value = "";
// });

// function addBookmarkToPage(name, url) {
//   let li = document.createElement("li");
//   let a = document.createElement("a");

//   a.href = url;        // 🔗 link stored here
//   a.innerText = name;
//   a.target = "_blank"; // open in new tab

//   li.appendChild(a);
//   list.appendChild(li);
// }


let saveBtn=document.getElementById("saveBtn")
let list=document.getElementById("bookmarkList")

window.onload=function(){
   let bookmarks=JSON.parse(localStorage.getItem("bookmarks")) || []
   bookmarks.forEach(bookmark => {
    addBookmarkToPage(bookmark.name,bookmark.url)
   });
}

   saveBtn.addEventListener("click", function () {
   let name=document.getElementById("siteName").value
   let url=document.getElementById("siteURL").value


   if(name === "" || url === ""){
    alert("Please enter both the values")
    return
   }

   addBookmarkToPage(name,url)

   let bookmarks=JSON.parse(localStorage.getItem("bookmarks")) || []
   bookmarks.push({name,url})
   localStorage.setItem("bookmarks",JSON.stringify(bookmarks))

   document.getElementById("siteName").value=""
   document.getElementById("siteURL").value=""
})

function addBookmarkToPage(name,url){
    let li=document.createElement("li")
    let a=document.createElement("a")

    a.href=url
    a.innerText=name
    a.target="_blank"

    li.appendChild(a)
    list.appendChild(li)

}
