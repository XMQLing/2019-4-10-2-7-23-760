module.exports = function main(inputs) {
    // write your code here...
	var d=inputs.distance;
	var pt=inputs.parkTime;
	var price=0;
	if(d<=2){
		price=Math.round(6+0.25*pt);
	}
	else if(d>2 && d<=8){
		price=Math.round(6+(d-2)*0.8+0.25*pt);
	}
	else{
		price=Math.round(10.8+(d-8)*1.2+0.25*pt);
	}
    return price;
};
