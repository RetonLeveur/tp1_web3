import { menu } from "./components/menu.js";
import { stage } from "./components/stage.js";
$('body').append(menu());
$('#startGame').click(function (){
    $('#menu').remove();
    $('body').append(stage());
})
