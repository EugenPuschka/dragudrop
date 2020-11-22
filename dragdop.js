const dragAndDrop = () => {
	const card = document.querySelector('.js-card');
	const cells = document.querySelectorAll('.js-cell');

	const dragStart = function () {
		setTimeout(() => {
			this.classList.add('hide');
		}, 0)
	};
	
	
	const dragEnd = function () {
		console.log('hide');
		this.classList.remove('hide');
	};

	const dragOver = function (evt) {
		//console.log('over');
		evt.preventDefault();

	};

	const dragEnter = function () {
		console.log('enter');
		this.classList.add('hovered');
	};

	const dragLeave = function () {
		this.classList.remove('hovered');
	};

	const dragDrop = function() {
		this.append(card);
		this.classList.remove('hovered');
	};

	cells.forEach((cell) => {
		cell.addEventListener('dragover', dragOver);
		cell.addEventListener('dragenter', dragEnter);
		cell.addEventListener('dragleave', dragLeave);
		cell.addEventListener('drop', dragDrop);
	});


	card.addEventListener('dragstart', dragStart);
	card.addEventListener('dragend', dragEnd);
};

dragAndDrop();



/*let angle = 0;

function setup(){
	createCanvas(400, 400);
}

function draw(){
	translate(width/2, height / 2);
	rectMode(CENTER);
	fill(255);
	let h = map(sin(angle), -1, 1, 0, 100);
	rect(0,0, 10, h);
	angle+=0.1;
}

*/
var canvas = document.getElementById('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight/8;


var ctx = canvas.getContext('2d');
//ctx.fillRect(0,0,20,20);



draw();

var x = 50,
	y = 50,
	dx = 30,
	dy = 2,
	radius = 30;

function draw(){
	window.requestAnimationFrame(draw);

	ctx.clearRect(0,0,innerWidth, innerHeight);
	ctx.beginPath();
	ctx.arc(x,y, radius,0, Math.PI * 2, false);
	ctx.strokeStyle = "Red";
	ctx.stroke();

	if(x + radius > innerWidth || x -radius < 0){
		dx = -dx;
	}

	if(y + radius > innerHeight || y - radius < 0){
		dy = -dy;
	}

	x+=dx;
	y+=dy;

}



$(function() {
	var $tasksList = $("#tasksList");
	var $taskInput = $("#taskInput");
	var $notification = $("#notification");

	var displayNotification = function(){
		if (!$tasksList.children().length) {
			$notofication.fadeIn("fast");
		}else{
			$notofication.css("display", "none");
		}
	}

	$("#taskAdd").on("click", function(){
		if(!$taskInput.val()) {return false;}

		$taskList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li>")

		$taskInput.val("");

		displayNotification();

		$(".delete").on("click", function(){
			var $parent = $(this).parant();

			$parent.css("animation", "fadeOut .3s linear");

			setTimeout(function(){
				$parent.remove();
				displayNotification();
			}, 295);
			
		})
	})
})

//https://www.youtube.com/watch?v=BygJB_h5n2w


