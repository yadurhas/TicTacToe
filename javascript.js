document.addEventListener("DOMContentLoaded", () => {
	let flag = true, matchCompleted = false, count = 0;
	const cells = document.querySelectorAll(".cell");
	function click(e) {
		function checkVictory() {
			if (cells[0].textContent !== '') {
				if (cells[0].textContent === cells[1].textContent) {
					if (cells[0].textContent === cells[2].textContent) {
						return true;
					}
				}
			}
			if (cells[3].textContent !== '') {
				if (cells[3].textContent === cells[4].textContent) {
					if (cells[3].textContent === cells[5].textContent) {
						return true;
					}
				}
			}
			if (cells[6].textContent !== '') {
				if (cells[6].textContent === cells[7].textContent) {
					if (cells[6].textContent === cells[8].textContent) {
						return true;
					}
				}
			}
			if (cells[0].textContent !== '') {
				if (cells[0].textContent === cells[3].textContent) {
					if (cells[0].textContent === cells[6].textContent) {
						return true;
					}
				}
			}
			if (cells[1].textContent !== '') {
				if (cells[1].textContent === cells[4].textContent) {
					if (cells[1].textContent === cells[7].textContent) {
						return true;
					}
				}
			}
			if (cells[2].textContent !== '') {
				if (cells[2].textContent === cells[5].textContent) {
					if (cells[2].textContent === cells[8].textContent) {
						return true;
					}
				}
			}
			if (cells[4].textContent !== '') {
				if (cells[4].textContent === cells[0].textContent) {
					if (cells[4].textContent === cells[8].textContent){
						return true;
					}
				}
				if (cells[4].textContent === cells[2].textContent) {
					if (cells[4].textContent === cells[6].textContent){
						return true;
					}
				}
			}
			return false;
		}
		if (!matchCompleted) {
			if (this.textContent === '') {
				count++;
				if (flag === true) {
					this.textContent = "X";
					this.style.background = "pink";
					flag = false;
				}
				else {
					this.textContent = "O";
					this.style.background = "aqua";
					flag = true;
				}
				let t = checkVictory()
				if (t || count === 9) {
					matchCompleted = true;
					const stat = document.querySelector("h2");
					const article = document.querySelector("article");
					if (t === true) {
						let winner = flag === true? "2 (O)": "1 (X)";
						stat.textContent = `Player ${winner} won the game`;
						stat.style.color = "maroon";
					}
					else {
						stat.textContent = "Game tied";
					}
					article.innerHTML = "<button class = \"reload\">Restart the game</button>"
					const button = article.querySelector("button");
					button.addEventListener("click", (e) => {
						stat.textContent = '';
						article.innerHTML = '';
						flag = true;
						count = 0;
						matchCompleted = false;
						for (let cell of cells) {
							cell.textContent = "";
							cell.style.background = "";
						}
					});
				}
			}
		}
	}
	//console.log(cells);
	for (let cell of cells) {
		cell.addEventListener("click", click);
	}
});