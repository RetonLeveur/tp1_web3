/**
 * Classe timer pour le character.
 */
export default class timer {
  /**
     * construit le timer
     * @param {number} temps
     */
  constructor(temps) {
    this.duree = temps;
  }

  /**
   * active le timer.
   */
  start() {
    this.timer = setInterval(() => this.reduireTemps(), 1000);
  }

  /**
   * arrête le timer
   */
  stop() {
    clearInterval(this.timer);
  }
  /**
   * réduit le temps
   */
  reduireTemps() {
    this.duree--;
  }
}


