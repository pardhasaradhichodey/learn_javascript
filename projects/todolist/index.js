//class for creating task objects
class task {
  constructor(title, description, deadline, addedDate, status = false) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.addedDate = addedDate;
    this.status = status;
  }
}
//Header for Tasks Table
const tableWithHead = `
<table id="tasklist"><thead>
<tr>
<th>Title</th>
<th>Deadline</th>
<th>Date Added</th>
</tr></thead><tbody></tbody></table>`;

//function to add one task row
const addRow = (element, i) => {
  td = [];
  td1 = document.createElement("td");
  text = document.createTextNode(element.title);
  td1.appendChild(text);
  td.push(td1);
  td2 = document.createElement("td");
  deadline = new Date(element.deadline);
  text = document.createTextNode(deadline);
  td2.appendChild(text);
  td.push(td2);
  td3 = document.createElement("td");
  addedDate = new Date(element.addedDate);
  text = document.createTextNode(addedDate);
  td3.appendChild(text);
  td.push(td3);
  td4 = document.createElement("td");
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.setAttribute("id", i);
  span.appendChild(txt);
  td4.appendChild(span);
  td.push(td4);
  return td;
};

// Click on a close button to hide the current list item
function addOnclick() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      console.log(this.id);
      indexer = this.id;
      tasks.splice(indexer, 1);
      temp = JSON.stringify(tasks);
      localStorage.setItem("tasks", temp);
      GenerateTable();
    };
  }
  var list = document.querySelector("#tasklist tbody tr");
  console.log(list);
  list.addEventListener(
    "click",
    function (ev) {
      console.log('Hello');
      list.classList.toggle("checked");
      if (ev.target.tagName === "tr") {
        ev.target.classList.toggle("checked");
        console.log('Hello');
      }
    },
    false
  );
}

//Getting Tasks from local storage
var tasks = JSON.parse(
  localStorage.getItem("tasks") ? localStorage.getItem("tasks") : "[]"
);

//Generating Tasks Table
function GenerateTable() {
  table = document.getElementById("tasklist");
  table.remove();
  div = document.getElementById("data");
  div.innerHTML = tableWithHead;
  tableList = document.querySelector("#tasklist tbody");
  tasks.sort((a, b) => {
    if (a.deadline > b.deadline) {
      return 1;
    }
    if (a.deadline < b.deadline) {
      return -1;
    }
    if (a.deadline == b.deadline) {
      return 0;
    }
  });
  i = 0;
  tasks.forEach((element) => {
    tr = document.createElement("tr");
    row = addRow(element, i);
    row.forEach((element1) => {
      tr.appendChild(element1);
    });
    tableList.appendChild(tr);
    i++;
  });
  addOnclick();
}

//Calling Generate Table Function
GenerateTable();

//Function to add new data
function addNewData() {
  title = document.getElementById("title").value;
  deadline = document.getElementById("deadline").value;
  description = document.getElementById("desc").value;
  if (title == "") {
    alert("Title Needed");
    return;
  }
  if (deadline == "") {
    alert("Deadline Needed");
    return;
  }
  if (description == "") {
    alert("Description Needed");
    return;
  }
  dateAdded = new Date();
  obj = new task(title, description, deadline, dateAdded);
  tasks.push(obj);
  temp = JSON.stringify(tasks);
  localStorage.setItem("tasks", temp);
  GenerateTable();
}

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    console.log(this.id);
    indexer = this.id;
    tasks.splice(indexer, 1);
    temp = JSON.stringify(tasks);
    localStorage.setItem("tasks", temp);
    GenerateTable();
    //var div = this.parentElement;
    //div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item

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
