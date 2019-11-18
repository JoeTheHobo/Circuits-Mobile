
/*
	Version 0.11
	The Man: JoeTheHobo
	Date: 11/1/2019
*/

String.prototype.letters = function(first,last) {
	let a = "";
	for (var i = 0; i < this.length; i++){
		if (i >= first && i <= last)
			a += this.charAt(i);
	}
	return a;
}
function $(id,from = document) {
	let use = id;
	if(id.charAt(0) != '#' && id.charAt(0) != '.' && id.charAt(0) != '<') use = '#' + use;
	if (id.charAt(0) == '<') {
		if (id.charAt(id.length-1) == '>') use = use.substring(1,use.length-1);
		else use = use.substring(1,use.length);
	}
	let toReturn = from.querySelectorAll(use);
	if (toReturn.length == 1) return toReturn[0];
	else {
		if (toReturn.length == 0) return false;
		else return toReturn;
	}
}

function rnd(num,num2) {
	if (num2) return Math.floor(Math.random() * (num2 - num + 1)) + num;
	else return Math.floor(Math.random() * num) + 1;
}

function trimStyle(string,also) {
	if (also)
		return Number(string.letters(0,string.length - 1).letters(0,string.length - 2));
	else
		return string.letters(0,string.length - 1).letters(0,string.length - 2);
}	

Object.prototype.addRow = function(x) {
	let newT = this.create('div',x);
	newT.style.display = 'table-row';
	return newT;
}
Object.prototype.addCell = function(x) {
	let newT = this.create('div',x);
	newT.style.display = 'table-cell';
	return newT;
}
Object.prototype.toTable = function() {
	this.style.display = 'table';
	return this;
}

Object.prototype.Rows = function(rows) {
	this.rows = rows;
	return this;
}
Object.prototype.Cols = function(cols) {
	this.cols = cols;
	return this;
}
Object.prototype.$P = function(x = 1) {
	let a = this
	for (var i = 0; i < x; i++) {
		a = a.parentNode;
	}
	return a;
}
Object.prototype.ID = function(id) {
	this.id = id;
	return this;
}
Object.prototype.CLASS = function(classn) {
	this.className = classn;
	return this;
}
Object.prototype.create = function(elem,x = null) {
	let ele = document.createElement(elem);
	if (x !== null) {
		this.insertBefore(ele,this.children[x]);
	} else this.appendChild(ele);
	return ele;
}
Object.prototype.$ = function(id) {
	return $(id,this);
}
Object.prototype.html = function(html) {
	if (this.tagName == 'INPUT' || this.tagName == 'TEXTAREA') {
		this.value = html;
	} else this.innerHTML = html;
	return this;
}
Object.prototype.show = function(what = 'block') {
	this.style.display = what;
	return this;
}
Object.prototype.hide = function() {
	this.style.display = 'none';
	return this
}
Object.prototype.centerX = function() {
	this.style.marginLeft = -(trimStyle(this.clientWidth,true) / 2) + 'px';
	return this;
}
Object.prototype.centerY = function() {
	this.style.marginTop = -(trimStyle(this.clientHeight,true) / 2) + 'px';
	return this;
}


Array.prototype.rnd = function() {
	return this[rnd(this.length) - 1];
}
Array.prototype.remove = function(num) {
	this.splice(num,1);
 	return this;
}
Array.prototype.tostr = function(how) {
	return this.toString();
}
Array.prototype.total = function(tot = 0) {
	for (var i = 0; i < this.length; i++) {
		tot += this[i];
	}
	return tot;
}
Array.prototype.avg = function() {
	return this.total() / this.length;
}
Array.prototype.highest = function(high = null) {
	for (var i = 0; i < this.length; i++) {
		if (high == null)
			high = this[i];
		else {
			if (this[i] > high)
				high = this[i];
		}
	}
	return high;
}
Array.prototype.lowest = function(low = null) {
	for (var i = 0; i < this.length; i++) {
		if (low == null)
			low = this[i];
		else {
			if (this[i] < low)
				low = this[i];
		}
	}
	return low;
}
Array.prototype.cut = function(num, toNum = num) {
	let newArr = [];
	for (var i = 0; i < this.length; i++) {
		if (i >= num && i <= toNum) {
			
		} else newArr.push(this[i]);
	}
	return newArr;
}



String.prototype.far = function(find,replace) {
	return this.split(find).join(replace);
}
String.prototype.rnd = function() {
	return this.charAt(rnd(this.length) - 1);
}
String.prototype.cut = function(num,toNum = num) {
	let newStr = "";
	for (var i = 0; i < this.length; i++) {
		if (i >= num && i <= toNum) {
		} else newStr += this.charAt(i);
	}
	return newStr;
}
String.prototype.toArray = function(how) {
	if (how) return this.split(how);
	else return this.split(",");
}
String.prototype.reverse = function() {
	let a = "";
	for (var i = this.length; i > -1; i--) {
		a += this.charAt(i);
	}
	return a;
}


function toJSON(obj) {
	return JSON.stringify(obj);
}
function toJS(obj) {
	return JSON.parse(obj);
}
function readFile(file,func) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			func(toJS(xhttp.responseText));
		}
	}
	xhttp.open("GET",file,true);
	xhttp.send();
}


let time = {
	second: function() {
		let date = new Date;
		return date.getSeconds();
	},
	minute: function() {
		let date = new Date;
		return date.getMinutes();
	},
	hour: function() {
		let date = new Date;
		return date.getHours();
	},
	year: function() {
		let date = new Date;
		return date.getFullYear();
	},
	month: function() {
		let date = new Date;
		let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		return months[date.getMonth()];
	},
	day: function() {
		let date = new Date;
		return date.getDate();
	},
	dayOfWeek: function() {
		let date = new Date;
		let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		return days[date.getDay()];
	},
	millisecond: function() {
		let date = new Date;
		return date.getMilliseconds();
	},
	daysInMonth: function(month) {
		var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if( (new Date(time.year, 1, 29)).getDate() == 29 ) days_in_month[1] = 29;
		if (typeof month == 'String') {
			let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			return days_in_months[months.indexOf(month)]
		} else {
			return days_in_months[month];
		}
	},
	daysInMonths: function() {
		var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if( (new Date(time.year, 1, 29)).getDate() == 29 ) days_in_month[1] = 29;
		return days_in_months;
	}	
}

class table {
    constructor(rows,cols,func = false,create = false) { 
        this.rows = rows;
        this.cols = cols;
        this.func = func;
        if (create) {
            this.create(create)
        }
    }
    create(ele) {
        ele.toTable();
        for (let i = 0; i < this.rows; i++) {
            let row = ele.addRow();
            for (let j = 0; j < this.cols; j++) {
                let cell = row.addCell();
                if (this.func) this.func(cell,i,j);
            }
        }
    }
}