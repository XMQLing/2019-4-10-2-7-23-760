module.exports = function main(inputs) {
    // write your code here...
	
	var price=Math.round(parkTime * 0.25 +6 +Math.max(0, (distance - 2) * 0.8) +Math.max(0, (distance - 8) * 0.4))
	
    return price;
};
