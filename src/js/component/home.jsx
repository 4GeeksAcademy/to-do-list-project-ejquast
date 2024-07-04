import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const inputField = document.getElementById("addToDo");
const todoList = document.querySelector("ul");

function addTask() {
const taskText = inputField.value.trim(); // Get the input value and remove leading/trailing spaces

if (taskText !== "") {
	// Only add a task if it's not empty
	const listItem = document.createElement("li");
	listItem.innerHTML = `<span><i class="fa-solid fa-x"></i></span> ${taskText}`;
	todoList.appendChild(listItem);
	inputField.value = ""; // Clear the input field
}
}

function deleteTask(event) {
const clickedElement = event.target;
if (clickedElement.classList.contains("fa-x")) {
	const listItem = clickedElement.parentElement.parentElement;
	todoList.removeChild(listItem);
}
}

inputField.addEventListener("keypress", function (e) {
if (e.key === "Enter") {
	addTask();
}
});

todoList.addEventListener("click", deleteTask);

const Home = () => {
	return (
		<div className="bg-light">
			<div className="text-center">
				<p className="mt-5 fs-1">To Do List</p>
			</div>
			<div className="bg-white text-dark align-items-center justify-contents-center m-auto w-25 border border-opacity-25 shadow">
				<input id="addToDo" className="form-control fs-4" type="text" placeholder="What needs to be done?" />
				<ul id="myList" className="list-group fs-4">
					<li className="border-bottom list-group-item">Make the bed<span><i class="fa-solid fa-x"></i></span></li>
					<li className="border-bottom list-group-item">Wash my hands<span><i class="fa-solid fa-x"></i></span></li>
					<li className="border-bottom list-group-item">Eat<span><i class="fa-solid fa-x"></i></span></li>
					<li className="border-bottom list-group-item">Walk the dog<span><i class="fa-solid fa-x"></i></span></li>
				</ul>
				<p className="p-3 fs-6">Items Left</p>
			</div>
		</div>
	);
};

export default Home;
