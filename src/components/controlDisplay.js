export function displayControls(){
   const display = $('<div></div>').addClass('display','text-center');
   const controlOne=$('<p>Player One : Arrows</p>');
   const controlTwo=$('<p>Player Two : W, S, A, D</p>');
   display.append(controlOne).append(controlTwo);
   return display;
}