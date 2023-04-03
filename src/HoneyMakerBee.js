class HoneyMakerBee extends Bee {
  // TODO..
  constructor () {
    super()
    this.age = 10
    this.job = 'make honey'
    this.honeyPot = 0
    this.makeHoney = function () {
      this.honeyPot ++
    }
    this.giveHoney = function () {
      this.honeyPot --
    }
  }
};
