import "./index.css";

let title = document.getElementById("title");
title.textContent = "Todo notes";

function addNote() {
  //   console.log("running");
  const inp_note = document.getElementById("note").value;
  console.log(inp_note);
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = inp_note;

  let pos = list.firstElementChild;
  if (pos === null) {
    list.append(li);
  } else {
    list.insertBefore(li, pos);
  }
}

document.getElementById("button").addEventListener("click", addNote);
