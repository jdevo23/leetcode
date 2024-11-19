/* 
	gasStations: [1,2,3,4,5],
	costsOfDriving: [3,4,5,1,2],
	output: 3,

	if gas[i] >= cost[i]
		begin check
		amountGas = gas[i]
		amountGas -= cost[i]
		i++
		if (amountGas + gas[i]) >= cost[i]
			continue process
		else
			increment i until gas[i] >= cost[i]

		if all elements have been tried unsuccessfully
			return -1
		
		set the start and the end
		if end < start, we need to begin the loop from the start of the array when i reaches the end of the array
*/

function canCompleteCircuit(gas: number[], cost: number[]): number {
	let totalGas = 0;
	let totalCost = 0;
	let currGas = 0;
	let start = 0;

	for (let i = 0; i < gas.length; i++) {
		totalGas += gas[i];
		totalCost += cost[i];

		currGas += gas[i] - cost[i];
		if (currGas < 0) {
			start = i + 1;
			currGas = 0;
		}
	}

	return totalGas >= totalCost ? start : -1;
};

export default canCompleteCircuit;