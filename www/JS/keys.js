window.parts = [];

parts.push( {//DEAD
    number: 1,
    text: false,
    color: 'grey',
    power_type: false,
    power: false,
    power_need: 1,
    on_power: false,
    key: false,
    name: 'Dead',
});
parts.push( {//Power
    number: 2,
    text: 'direction',
    color: 'blue',
    power_type: 'direction',
    power: true,
    power_need: 1,
    on_power: false,
    key: false,
    name: 'Power',
});
parts.push( {//Line
    number: 3,
    text: 'direction',
    color: 'lightblue',
    power_type: 'direction',
    power: false,
    power_need: 1,
    on_power: {
        color: 'cyan',
        power: true,
    },
    key: false,
    name: 'Power Line',
});
parts.push( {
    number: 4,
    text: 'direction',
    color: 'teal',
    power_type: 'jump',
    power: false,
    power_need: 1,
    on_power: {
        color: 'orange',
        power: true,
    },
    key: false,
    name: 'Jump',
});
parts.push( {//AND
    number: 5,
    text: 'direction',
    color: 'darkblue',
    power_type: 'direction',
    power: false,
    power_need: 2,
    on_power: {
        power: true,
        color: 'darkgreen',
    },
    key: false,
    name: 'And Gate',
});
parts.push( {//reverse
    number: 6,
    text: 'direction',
    color: 'white',
    power_type: 'direction',
    power: true,
    power_need: 1,
    on_power: {
        power: false,
        color: 'lightgray',
    },
    key: false,
    name: 'Reverse',
});
parts.push( {//sensitive
    number: 7,
    text: 'direction',
    color: 'pink',
    power_type: 'all',
    power: false,
    power_need: 1,
    on_power: {
        power: true,
        color: 'red',
    },
    key: false,
    name: 'Sensitive',
});

parts.push( {//LIGHT
    number: 8,
    text: false,
    color: 'black',
    power_type: false,
    power: false,
    power_need: 1,
    on_power: {
        color: 'yellow',
        power: false,
    },
    key: false,
    name: 'Light',
});

parts.push( {
    number: 'A', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'a',
        color: 'green',
        power: true,
    }
});
parts.push( {//
    number: 'S', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 's',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'D', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'd',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'F', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'f',
        color: 'green',
        power: true,
    }
});
parts.push( {//
    number: 'G', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'g',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'H', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'h',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'J', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'j',
        color: 'green',
        power: true,
    }
});
parts.push( {//
    number: 'K', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'k',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'L', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'l',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: ':', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: ';',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'Q', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'q',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'W', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'w',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'E', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'e',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'R', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'r',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'T', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 't',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'U', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'u',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'I', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'i',
        color: 'green',
        power: true,
    }
});

parts.push( {
    number: 'O', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'o',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'P', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'p',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'Z', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'z',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'X', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'x',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'C', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'c',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'V', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'v',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'B', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'b',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'N', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'n',
        color: 'green',
        power: true,
    }
});
parts.push( {
    number: 'M', //Number to press
    text: 'key', //[key,direction,false] - key: 'states which key to press' direction: 'Shows arrow of power' false: Shows no text
    color: 'lime', //Color of cell
    power_type: false, //[all,direction,false] - all: 'Any power around cell activates it (Except for front)' direction: 'Power pointed towards activates cell' false: 'can't activate cell'
    power: false, //If gives off power
    power_need: 1, //How much power needs before does on_power
    on_power: false, //What it does when power is on
    key: { //What it does when key is pressed
        key: 'm',
        color: 'green',
        power: true,
    }
});