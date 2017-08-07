function makeArray(d1, d2) {
    var arr = [];
    for(i = 0; i < d2; i++) {
        arr.push(new Array(d1));
    }
    return arr;
}
let arr = makeArray(3, 2);

function display(arr) {
	// given a coordnate and x or o 
	// place that in here 
	let str = '';
	let myArr = arr || makeArray(3, 2);
	for (let i = 0 ; i < myArr.length; i++) {
		for (let j = 0; j <myArr[i].length; j++) {
			str += myArr[i][j]|| j===2? '  ': '   |'
		}
		str += '\n';
		i === 1? '':str += ' _________\n';	
	}
	return str;
}



function add(x, y, player) {
//	arr[x][y] = player;

}

// function ticTacToe() {
// // toggle between players 
// // display the board


// 	return 22
// }

// ticTacToe()
add(0, 0, 'O');

var res = display(arr)
console.log(res);