module.exports = class DepthCalculator {
  calculateDepth(arr, result = [1], count = 1) {
    
    arr.forEach((element) => {
      if (element instanceof Array) {
        result.push(count + 1);
        this.calculateDepth(element, result, count + 1);
      } 
    });
     
    return Math.max.apply(null, result);
  }
};