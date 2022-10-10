export function menu() {
return createMenu();
}

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
    '<input type="text" class="form-control" id="recipient-name"/>' +
    "</div>" +
    '<div class="form-group">' +
    '<label for="recipient-name" class="col-form-label">Joueur 2:</label>' +
    '<input type="text" class="form-control" id="recipient-name"/>' +
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
