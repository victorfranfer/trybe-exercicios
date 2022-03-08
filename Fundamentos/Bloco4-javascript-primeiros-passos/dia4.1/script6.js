//let piece = ['Bishop', 'Knight', 'King', 'Queen', 'Rook', 'Pawn'];
//piece.toLowerCase();

let bishop = 'Bishop';
bishop.toLowerCase();

let knight = 'KNIGHT';
knight.toLowerCase();

switch(piece) {
    case 'Bishop':
        console.log('diagonals');
        break;
    case 'Knight':
        console.log('L-shape');
        break;
    case 'King':
        console.log('one square in any direction');
        break;
    case 'Queen':
        console.log('straight or diagonal line');
        break;
    case 'Rook':
        console.log('straight');
        break;
    case 'Pawn':
        console.log('one square forward');
        break;
}
