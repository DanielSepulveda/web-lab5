let ITEM_ID = 1;

const ITEM_HTML = (name, id) => `<li id="item-${id}">
  <div class="item">
    <p class="item-name">${name}</p>
    <div>
      <button class="btn btn-primary" data-id="item-${id}" onclick="checkItem(event)">check</button>
      <button class="btn btn-delete" data-id="item-${id}" onclick="deleteItem(event)">delete</button>
    </div>
  </div>
</li>`;

function addItem(e) {
	e.preventDefault();

	const input = document.querySelector("input");
	const list = document.querySelector("#list");
	list.innerHTML += ITEM_HTML(input.value, ITEM_ID++);

	input.value = "";
}

function checkItem(e) {
	if (e.target && e.target.dataset.id) {
		const id = e.target.dataset.id;
		const itemName = document.querySelector(`#${id} p`);
		itemName.classList.toggle("item--checked");
		const btnCheck = document.querySelector(`#${id} .btn-primary`);
		if (itemName.classList.contains("item--checked")) {
			btnCheck.innerHTML = "uncheck";
		} else {
			btnCheck.innerHTML = "check";
		}
	}
}

function deleteItem(e) {
	if (e.target && e.target.dataset.id) {
		const id = e.target.dataset.id;
		const item = document.querySelector(`#${id}`);
		const list = document.querySelector("#list");
		list.removeChild(item);
	}
}

function init() {
	document.querySelector("#form").addEventListener("submit", addItem);
}

window.onload = init;
