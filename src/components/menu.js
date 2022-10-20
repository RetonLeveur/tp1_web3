export function menu() {
return createMenu();
}
// code pour le modal
function createMenu() {
  const menuCode =
    '<div class="modal-dialog" id="menu" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header menu">' +
    '<h1 class="text-center bg-dark" id="playerNames">Jeux de TAG</h1>' +
    "</div>" +
    '<div class="modal-body menu">' +
    "<form>" +
    '<div class="form-group">' +
    '<label for="recipient-name" class="col-form-label">Joueur 1:</label>' +
    '<input type="text" class="form-control" id="playerOneName" required>' +
    "</div>" +
    '<div class="form-group">' +
    '<label for="recipient-name" class="col-form-label">Joueur 2:</label>' +
    '<input type="text" class="form-control" id="playerTwoName" required>' +
    "</div>" +
    "</form>" +
    "</div>" +
    '<div class=" text-center menu">' +
    '<button type="submit" id="startGame" class="btn btn-lg btn-success">Jouer</button>' +
    '<button type="submit" id="showLeader" class="btn btn-lg btn-warning">leaderBoard</button>' +
    "</div>" +
    "</div>" +
    "</div>";
    
  return menuCode;
}
// retourne le nom du joueur 1
export function getnNameOne(){
    return $('#playerOneName').val();
}
// retourne le nom du joueur 2
export function getnNameTwo(){
    return $('#playerTwoName').val();
}


 

