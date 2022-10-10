export function menu() {
return createMenu();
}
// code pour le modal
function createMenu() {
  const menuCode =
    '<div class="modal-dialog" id="menu" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header bg-secondary">' +
    '<h1 class="text-center bg-dark" id="playerNames">Entrer le nom des joueurs</h1>' +
    "</div>" +
    '<div class="modal-body">' +
    "<form>" +
    '<div class="form-group bg-dark">' +
    '<label for="recipient-name" class="col-form-label">Joueur 1:</label>' +
    '<input type="text" class="form-control" id="playerOneName" required>' +
    "</div>" +
    '<div class="form-group">' +
    '<label for="recipient-name" class="col-form-label">Joueur 2:</label>' +
    '<input type="text" class="form-control" id="playerTwoName" required>' +
    "</div>" +
    "</form>" +
    "</div>" +
    '<div class=" text-center">' +
    '<button type="submit" id="startGame" class="btn btn-lg btn-success">Jouer</button>' +
    "</div>" +
    "</div>" +
    "</div>";
  return menuCode;
}
// retourne le nom du joueur 1
export function getnNameOne(){
    const nameOne = $('#playerOneName').val();
    return nameOne;
}
// retourne le nom du joueur 2
export function getnNameTwo(){
    const nameTwo = $('#playerTwoName').val();
    return nameTwo;
}
 

