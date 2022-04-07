import "./index.css";
import * as url from "./logo.png";
let title = document.getElementById("title");
title.textContent = "Todo notes";

let img = document.createElement("img");

img.src = url.default;
console.log("imported", url);

document.getElementById("img_container").appendChild(img);

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
