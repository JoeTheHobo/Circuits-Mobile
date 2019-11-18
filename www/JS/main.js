var size = [20,20];

$('dirLeft').innerHTML = '<';
var selectCells = [];

var saves = [];
var auto = false;
var len1, len2;
var copyMap = [];
var lastCell = [];
var undoMax = 30;
var allKeys = [];
var mouseMoved = false;
var mouseDown = false, altDown = false;
document.body.ontouchstart = () => { mouseDown = true }
document.body.ontouchend = () => { mouseDown = false }
var mouseLast = [];


var select1;
var select = 1;
var old_direction;
var current_direction = 1;
var map = [];

function preventBehavior(e) {
    e.preventDefault(); 
};

document.addEventListener("touchmove", preventBehavior, {passive: false});

class componant {
    constructor(number,i,j) {
        this.i = i;
        this.j = j;
        this.reform(number);
    }
    reform(number) {
        let toGet = findType(number);
        this.parts = toGet;
        this.cpower = this.parts.power;
        this.powered = false;
        this.keyDown = false;
        this.direction = current_direction;
        $('i' + this.i + 'j' + this.j).style.background = this.parts.color;
        if (this.parts.text == 'direction') {
            if (this.direction == 1) $('i' + this.i + 'j' + this.j).innerHTML = '>';
            if (this.direction == 2) $('i' + this.i + 'j' + this.j).innerHTML = '<';
            if (this.direction == 3) $('i' + this.i + 'j' + this.j).innerHTML = '^';
            if (this.direction == 4) $('i' + this.i + 'j' + this.j).innerHTML = 'v';
        } else if (this.parts.text !== 'key') {
            $('i' + this.i + 'j' + this.j).innerHTML = '';
            this.direction = 0;
        }
        this.different = false;
        for (let i = 0; i < allKeys.length; i++) {
            if (allKeys[i].i == this.i && allKeys[i].j == this.j) {
                allKeys.remove(i);
            }
        }
        lastCell = [this.j,this.i];
    }
    saveUndo() {

        if (saves[saves.length - 1] !== getSave()) saves.push(getSave());
        if (saves.length > undoMax) saves.shift();
        
        if (auto) {
            let mouse_moved = current_direction;
            if (mouseLast[0] > this.j) mouse_moved = 2;
            if (mouseLast[0] < this.j) mouse_moved = 1;
            if (mouseLast[1] < this.i) mouse_moved = 4;
            if (mouseLast[1] > this.i) mouse_moved = 3;
            mouseLast = [this.j,this.i];
            
            current_direction = mouse_moved;
            if (mouseMoved) {
                if (current_direction == 1) map[this.i][this.j - 1].clicked();
                if (current_direction == 2) map[this.i][this.j + 1].clicked();
                if (current_direction == 3) map[this.i + 1][this.j].clicked();
                if (current_direction == 4) map[this.i - 1][this.j].clicked();
            }

            mouseMoved = true;
        }

        

        this.clicked();
    }
    clicked() {

        if (select !== 'delete' && select !== 'copy' && select !== 'cut' && select !== 'space' && select !== '`' && select !== '>' && select !== '<') {
            this.reform(select);
            this.different = true;
            this.updateComp();
        } else if (select == 'delete') {
            
            if (selectCells.length === 1) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 0) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 2) {
                let x1 = selectCells[0][1],
                    x2 = selectCells[1][1],
                    y1 = selectCells[0][0],
                    y2 = selectCells[1][0];
                

                select = 1;
                for (let i = 0; i < y2-y1 + 1; i++) {
                    for (let j = 0; j < x2-x1 + 1; j++) {
                        map[y1 + i][x1 + j].clicked(); //i - j
                    }
                }
                select = select1;
            }
        } else if (select == 'cut') {
            if (selectCells.length === 2) {
                selectCells.push( [this.i,this.j] );
                let x1 = selectCells[0][1],
                    x2 = selectCells[1][1],
                    y1 = selectCells[0][0],
                    y2 = selectCells[1][0];

                for (let i = 0; i < y2-y1 + 1; i++) {
                    copyMap.push([]);
                    for (let j = 0; j < x2 - x1 + 1; j++) {
                        copyMap[i].push( [map[y1 + i][x1 + j].parts.number, map[y1 + i][x1 + j].direction] );
                    }
                }
            }
            if (selectCells.length === 1) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 0) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 3) {
                let x1 = selectCells[0][1],
                    x2 = selectCells[1][1],
                    y1 = selectCells[0][0],
                    y2 = selectCells[1][0],
                    x3 = selectCells[2][1],
                    y3 = selectCells[2][0];

                select = 1;
                for (let i = 0; i < y2-y1 + 1; i++) {
                    for (let j = 0; j < x2-x1 + 1; j++) {
                        map[y1 + i][x1 + j].clicked(); //i - j
                    }
                }

                for (let i = 0; i < y2-y1 + 1; i++) {
                    for (let j = 0; j < x2-x1 + 1; j++) {
                        select = copyMap[i][j][0];
                        current_direction = copyMap[i][j][1];
                        map[y3 + i][x3 + j].clicked(); //i - j
                    }
                }
                
                
                select = select1;
                current_direction = old_direction;
            }
        } else if (select == 'copy') {
            if (selectCells.length === 2) {
                selectCells.push( [this.i,this.j] )
                let x1 = selectCells[0][1],
                    x2 = selectCells[1][1],
                    y1 = selectCells[0][0],
                    y2 = selectCells[1][0];

                for (let i = 0; i < y2-y1 + 1; i++) {
                    copyMap.push([]);
                    for (let j = 0; j < x2 - x1 + 1; j++) {
                        copyMap[i].push( [map[y1 + i][x1 + j].parts.number, map[y1 + i][x1 + j].direction] );
                    }
                }
            }
            if (selectCells.length === 1) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 0) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 3) {
                let x1 = selectCells[0][1],
                    x2 = selectCells[1][1],
                    y1 = selectCells[0][0],
                    y2 = selectCells[1][0],
                    x3 = selectCells[2][1],
                    y3 = selectCells[2][0];
                for (let i = 0; i < y2-y1 + 1; i++) {
                    for (let j = 0; j < x2-x1 + 1; j++) {
                        select = copyMap[i][j][0];
                        current_direction = copyMap[i][j][1];
                        map[y3 + i][x3 + j].clicked(); //i - j
                    }
                }
                
                select = 'copy';
                selectCells = [[y1,x1],[y2,x2]];
                current_direction = old_direction;
            }
        } else if (select === 'space') {
            select = select1;
            let x1 = lastCell[0],
                x2 = this.j,
                y1 = lastCell[1],
                y2 = this.i,
                uy1 = y1,uy2 = y2,ux1 = x1,ux2 = x2;
            if (y2 < y1) {
                uy2 = y1;
                uy1 = y2; 
            }
            if (x2 < x1) {
                ux2 = x1;
                ux1 = x2; 
            }

            for (let i = 0; i < uy2-uy1 + 1; i++) {
                for (let j = 0; j < ux2-ux1 + 1; j++) {
                    map[uy1 + i][ux1 + j].clicked(); //i - j
                }
            }
            lastCell = [this.j,this.i];
            
        } else if (select === '`') {
            select = this.parts.number;
        } else if (select === '>') {
            if (selectCells.length === 1) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 0) selectCells.push( [this.i,this.j] );
            if (selectCells.length === 2) {
                let a = setInterval(function() {
                    if (mouseDown == false) {
                        let x1 = selectCells[0][1],
                            x2 = selectCells[1][1],
                            y1 = selectCells[0][0],
                            y2 = selectCells[1][0];
                        
                        for (let i = 0; i < y2-y1 + 1; i++) {
                            copyMap.push([]);
                            for (let j = 0; j < x2 - x1 + 1; j++) {
                                copyMap[i].push( [map[y1 + i][x1 + j].parts.number, map[y1 + i][x1 + j].direction] );
                            }
                        }
                        let txt = copyMap.toString();
                        txt = (y2-y1+1) + ',' + (x2-x1+1) + ',' + txt;

                        let old = getArr('modules',[]);
                        
                        select = select1;
                        let ab = prompt('Name the Module');
                        if (ab) {
                            old.push(ab + ',' + txt)
                            saveArr(old,'modules');
                        }
                        mouseDown = false;
                        //
                        clearInterval(a);
                    }
                },0);
            }
        } else if (select === '<') {
            let posY = this.i;
            let posX = this.j;

            for (let i = 0; i <  len1; i++) {
                for (let j = 0; j < len2; j++) {
                    select = copyMap[i][j][0];
                    current_direction = copyMap[i][j][1];
                    map[posY + i][posX + j].clicked(); //i - j
                }
            }

            select = '<';
        }

    }
    updateComp() {
            /*
            DIRECTION:
            1 = right
            2 = left
            3 = up
            4 = down
            */
            let powered = 0;
            let all = [[0,1,1,2,0,2],[0,-1,2,1,0,-2],[-1,0,3,4,-2,0],[1,0,4,3,2,0]];//[i,j,location,direction]
            for (let i = 0; i < all.length; i++) {
                    //POWER TYPES
                    if (this.parts.power_type == 'all') {
                        all[i][3] = map[this.i + all[i][0]][this.j + all[i][1]].direction;
                    }
                    //SETTING POWER
                    if ($('i' +  (this.i + all[i][0]) + 'j' + (this.j + all[i][1]))) {
                        if (map[this.i + all[i][0]][this.j + all[i][1]].parts.power_type !== 'jump' || this.parts.power_type == 'all') {
                            if(map[this.i + all[i][0]][this.j + all[i][1]].powered && map[this.i + all[i][0]][this.j + all[i][1]].parts.on_power) {
                                map[this.i + all[i][0]][this.j + all[i][1]].cpower = map[this.i + all[i][0]][this.j + all[i][1]].parts.on_power.power;
                            } else {
                                if (map[this.i + all[i][0]][this.j + all[i][1]].keyDown) {
                                    map[this.i + all[i][0]][this.j + all[i][1]].cpower = map[this.i + all[i][0]][this.j + all[i][1]].parts.key.power;
                                } else
                                    map[this.i + all[i][0]][this.j + all[i][1]].cpower = map[this.i + all[i][0]][this.j + all[i][1]].parts.power;
                            }
                        }
                    }
                    if ($('i' +  (this.i + all[i][4]) + 'j' + (this.j + all[i][5]))) {
                        if (map[this.i + all[i][4]][this.j + all[i][5]].parts.power_type == 'jump') {
                            if(map[this.i + all[i][4]][this.j + all[i][5]].powered && map[this.i + all[i][4]][this.j + all[i][5]].parts.on_power) {
                                map[this.i + all[i][4]][this.j + all[i][5]].cpower = map[this.i + all[i][4]][this.j + all[i][5]].parts.on_power.power;
                            } else {
                                if (map[this.i + all[i][4]][this.j + all[i][5]].keyDown) {
                                    map[this.i + all[i][4]][this.j + all[i][5]].cpower = map[this.i + all[i][4]][this.j + all[i][5]].parts.key.power;
                                } else
                                    map[this.i + all[i][4]][this.j + all[i][5]].cpower = map[this.i + all[i][4]][this.j + all[i][5]].parts.power;
                            }
                        }
                    }
                    //CHECKING IF POWERED
                    if ($('i' +  (this.i + all[i][0]) + 'j' + (this.j + all[i][1]))) {
                        if (map[this.i + all[i][0]][this.j + all[i][1]].parts.power_type !== 'jump' || this.parts.power_type == 'all') {
                            if (this.direction != all[i][2] && map[this.i + all[i][0]][this.j + all[i][1]].direction == all[i][3]) {//If I'm not pointing at him and he is pointing at me
                                if (map[this.i + all[i][0]][this.j + all[i][1]].cpower) {  //If he has power
                                    powered++;
                                }
                            }
                        }
                    }
                    if ($('i' +  (this.i + all[i][4]) + 'j' + (this.j + all[i][5]))) {
                        if (map[this.i + all[i][4]][this.j + all[i][5]].parts.power_type === 'jump') {
                            if (this.direction != all[i][2] && map[this.i + all[i][4]][this.j + all[i][5]].direction == all[i][3]) {//If I'm not pointing at him and he is pointing at me
                                if (map[this.i + all[i][4]][this.j + all[i][5]].cpower) {  //If he has power
                                    powered++;
                                }
                            }
                        }
                    }  
            }
           
           
            if (powered >= this.parts.power_need) {
                if (this.powered == false) this.different = true;
                this.powered = true;
                if (this.parts.on_power)
                    if (this.parts.on_power.color) $('i' + this.i + 'j' + this.j).style.background = this.parts.on_power.color;
            } else {
                if (this.powered == true) this.different = true;
                this.powered = false;
                $('i' + this.i + 'j' + this.j).style.background = this.parts.color;
                if (this.keyDown) {
                    if (this.parts.key.color) $('i' + this.i + 'j' + this.j).style.background = this.parts.key.color;
                }
            }

            if (this.different) {
                this.different = false;
                if (map[this.i - 1][this.j]) map[this.i - 1][this.j].updateComp();
                if (map[this.i + 1][this.j]) map[this.i + 1][this.j].updateComp();
                if (map[this.i - 0][this.j - 1]) map[this.i][this.j - 1].updateComp();
                if (map[this.i - 0][this.j + 1]) map[this.i][this.j + 1].updateComp();

                if (map[this.i - 2][this.j]) map[this.i - 2][this.j].updateComp();
                if (map[this.i + 2][this.j]) map[this.i + 2][this.j].updateComp();
                if (map[this.i - 0][this.j - 2]) map[this.i][this.j - 2].updateComp();
                if (map[this.i - 0][this.j + 2]) map[this.i][this.j + 2].updateComp();
            }
    }
}


function getSave() {
    var txt = '';
    for (let i = 0; i < size[1]; i++) {
        for (let j = 0; j < size[0]; j++) {
            txt += map[i][j].parts.number + ',' + map[i][j].direction + ',';
        }
    }
    return txt.slice(0,txt.length - 1);
}

for (let i = 0; i < size[1]; i++) {
    map.push( [] );
    for (let j = 0; j < size[0]; j++) {
        map[i].push( [] );
    }
}

let grid = new table(size[1],size[0],function(cell,i,j) {
    cell.className = 'gridChild';
    cell.i = i;
    cell.j = j;
    cell.draggable = false;
    cell.id = 'i' + i + 'j' + j;
    cell.type = select;
    map[i][j] = new componant(select,i,j);
    cell.ontouchstart = function() {
        map[this.i][this.j].saveUndo();
    }
},$('grid'));

$('grid').ontouchmove = function(e) {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            let ele = $('i' + i + 'j' + j);
            let pos = ele.getBoundingClientRect();
            let x2 = pos.x;
            let y2 = pos.y;
            if (x < x2 + pos.width) {
                if (x > x2) {
                    if (y > y2) {
                        if (y < y2 + pos.height) {
                            map[i][j].saveUndo();
                        }
                    }
                }
            }
        }
    }
}


function findType(num) {
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].number == num) return parts[i];
    }
}


let side_table = $('.leftBar2');
for (let i = 0; i < parts.length; i++) {
    let a = findType(i);
    if (a) {
        let cell = side_table.create('div');
        cell.className = 'sideTableCell';
        cell.style.background = a.color;
        cell.id = 'selector' + i;
        cell.innerHTML = a.name;
        if (a.name == 'Dead') {
            cell.secondName = 'Clear';
            cell.secondFunc = function() {
                clearMap();
            }
        }
        if (a.name == 'Light') {
            cell.secondName = 'Undo';
            cell.secondFunc = function() {
                if (saves.length > 0) {
                    loadMap('load' + ',' + saves[saves.length - 1]);
                    saves.pop();
                }
            }
        }
        cell.ontouchstart = function() {
            resetNames();
            if (select == this.id.letters(8,this.id.length)) {
                if (this.secondName) this.innerHTML = this.secondName;
                this.secondFunc();
            } else {
                if (this.secondName) this.innerHTML = this.secondName;
                select = this.id.letters(8,this.id.length);
            }
            this.style.opacity = 0.85;
        }
        cell.ontouchend = function() {
            this.style.opacity = 1;
        }
    }
}
let cell = side_table.create('div');
cell.innerHTML = '^';
cell.className = 'topRowMover';
cell.hiding = false;
cell.ontouchstart = function() {
    this.style.opacity = 0.75;
    if (this.hiding) { showTopRow(); this.hiding = false; this.innerHTML = '^'; }
    else { hideTopRow(); this.hiding = true; this.innerHTML = 'v'; }
}
cell.ontouchend = function() {
    this.style.opacity = 1;
}

function showTopRow() {
    for (let i = 0; i < parts.length; i++) {
        let a = findType(i);
        if (a) {
            $('selector' + i).show('inline-flex');
        }
    }
}
function hideTopRow() {
    for (let i = 0; i < parts.length; i++) {
        let a = findType(i);
        if (a) {
            $('selector' + i).hide();
        }
    }
}
function resetNames() {
    for (let i = 0; i < parts.length; i++) {
        let a = findType(i);
        if (a) {
            $('selector' + i).innerHTML = a.name;
        }
    }
}

function loadMap(exe) {
    let newMap;
    if (exe) newMap = exe.split(',');
    else newMap = prompt('Paste in your map:').split(',');

    let useMap = [];
    let char = 1;
    for (let i = 0; i < size[1]; i++) {
        useMap.push([]);
        for (let j = 0; j < size[0]; j++) {
            useMap[i].push([newMap[char],newMap[char + 1]]);
            char += 2;
        }
    }
    //For when I add a title
    let title = newMap[0];
     
    map = [];
    for (let i = 0; i < size[1]; i++) {
        map.push( [] );
        for (let j = 0; j < size[0]; j++) {
            map[i].push( [] );
        }
    }

    $('grid').innerHTML = '';
    let grid = new table(size,size,function(cell,i,j) {
        cell.className = 'gridChild';
        cell.i = i;
        cell.j = j;
        cell.draggable = false;
        cell.id = 'i' + i + 'j' + j;
        cell.type = useMap[i][j][0];
        map[i][j] = new componant(useMap[i][j][0],i,j);
        map[i][j].direction = useMap[i][j][1];
        let oldInfo = current_direction;
        current_direction = useMap[i][j][1];
        map[i][j].reform(useMap[i][j][0]);
        current_direction = oldInfo;
        cell.onmousedown = function() {
            map[this.i][this.j].saveUndo();
        }
        cell.onmouseover = function() {
            if (mouseDown) map[this.i][this.j].saveUndo();
        }
    },$('grid'));

    for (let i = 0; i < size[1]; i++) {
        for (let j = 0; j < size[0]; j++) {
            map[i][j].updateComp();
        }
    }
}

function switchDir(dir,id) {
    $(id).className = 'opt2';
    $(id).ontouchend = function() {
        this.className = 'opt1';
    }
    if (dir == 'up') current_direction = 3;
    if (dir == 'down') current_direction = 4;
    if (dir == 'left') current_direction = 2;
    if (dir == 'right') current_direction = 1;

    if (dir == 'auto') {
        if (auto) {
            auto = false;
            $('#dirUp').show();
            $('#dirRight').show();
            $('#dirLeft').show();
            $('#dirDown').show();
            $('dirAuto').style.background = 'lightskyblue';
        } else {
            auto = true;
            $('#dirUp').hide();
            $('#dirRight').hide();
            $('#dirLeft').hide();
            $('#dirDown').hide();
            $('dirAuto').style.background = 'lightgreen';
        }
    }
}

function clearMap() {
    $('grid').innerHTML = '';
    grid = new table(size[1],size[0],function(cell,i,j) {
        cell.className = 'gridChild';
        cell.i = i;
        cell.j = j;
        cell.draggable = false;
        cell.id = 'i' + i + 'j' + j;
        cell.type = select;
        map[i][j] = new componant(select,i,j);
        cell.ontouchstart = function() {
            map[this.i][this.j].saveUndo();
        }
    },$('grid'));
}