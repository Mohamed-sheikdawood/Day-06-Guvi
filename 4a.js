class UberPriceCalculator {
    constructor(base, perKm, perMin) {
      this.base = base;
      this.perKm = perKm;
      this.perMin = perMin;
    }
  
    calculatePrice(distance, duration) {
      const distanceCost = distance * this.perKm;
      const durationCost = duration * this.perMin;
      const totalCost = this.base + distanceCost + durationCost;
  
      return totalCost;
    }
  }
  
  const uberCalculator = new UberPriceCalculator(5, 1.5, 0.2);
  
  const distanceInKm = 10;
  const durationInMin = 15;
  
  const totalPrice = uberCalculator.calculatePrice(distanceInKm, durationInMin);
  
  console.log(`Uber Price: Rs.${totalPrice.toFixed(2)}`);
  