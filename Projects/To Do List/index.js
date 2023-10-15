class task {
  constructor(title, description, deadline, addedDate) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.addedDate = addedDate;
  }
}
const tableWithHead = `
<table id="tasklist"><thead>
<tr>
<th>Title</th>
<th>Deadline</th>
<th>Date Added</th>
</tr></thead><tbody></tbody></table>`;
const addRow = (element) => {
  td=[]
  td1=document.createElement("td");
  text=document.createTextNode(element.title);
  td1.appendChild(text);
  td.push(td1);
  td2=document.createElement("td");
  deadline=new Date(element.deadline);
  text=document.createTextNode(deadline);
  td2.appendChild(text);
  td.push(td2);
  td3=document.createElement("td");
  addedDate=new Date(element.addedDate);
  text=document.createTextNode(addedDate);
  td3.appendChild(text);
  td.push(td3);
  return td;
}
//temp=new task("create Portfolio","a",'2023-10-14T15:23','2023-10-14T15:23');
//localStorage.setItem('tasks','{"hello":"hi"}');
var tasks = JSON.parse(
  localStorage.getItem("tasks") ? localStorage.getItem("tasks") : "[]"
);
function GenerateTable() {
  table = document.getElementById("tasklist");
  table.remove();
  div = document.getElementById("data");
  div.innerHTML=tableWithHead;
  tableList = document.querySelector("#tasklist tbody");
  //console.log(tableList);
  tasks.sort((a,b)=>{
    if(a.deadline>b.deadline){
      return 1;
    }
    if(a.deadline<b.deadline){
      return -1;
    }
    if(a.deadline==b.deadline){
      return 0;
    }
  })
  tasks.forEach(element => {
    tr=document.createElement("tr");
    row=addRow(element);
    row.forEach(element1=>{
      tr.appendChild(element1);
    })
    tableList.appendChild(tr);
  });
}
GenerateTable();
function addNewData(){
  title=document.getElementById("title").value;
  deadline=document.getElementById("deadline").value;
  description=document.getElementById("desc").value;
  dateAdded=new Date();
  obj=new task(title,description,deadline,dateAdded);
  tasks.push(obj);
  temp=JSON.stringify(tasks);
  localStorage.setItem('tasks',temp);
  GenerateTable();
}
//Old code copied from W3schools
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
