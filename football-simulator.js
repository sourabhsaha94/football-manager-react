
var playerArrays = require('./playerArrays.js');
var formations = require('./formations.js');

// Display the formations (home/away)
function displayFormation(side,formation){
	console.log(`Formation for ${side} team`)

	switch(formation) {
		case "2-2-1":
			console.log("2-2-1")
			console.log("\tST\t")
			console.log("LM\t\tRM")
			console.log("LB\t\tRB")
			console.log("\tGK\t\n")
		break;
		case "2-1-2":
			console.log("2-1-2")
			console.log("LS\t\tRS")
			console.log("\tCM\t")
			console.log("LB\t\tRB")
			console.log("\tGK\t\n")
		break;
		case "1-3-1":
			console.log("1-3-1")
			console.log("\tST\t")
			console.log("LM\tCM\tRM")
			console.log("\tCB\t")
			console.log("\tGK\t\n")
		break;
		case "3-1-1":
			console.log("3-1-1")
			console.log("\tST\t")
			console.log("\tCM\t")
			console.log("LB\tCB\tRB")
			console.log("\tGK\t\n")
		break;
	}
};

// assign players to formation-defined positions
function assignPlayersToPositions(players, formation){
	let team = [];

	for(numAtt = 0; numAtt < formation["numAttack"]; numAtt++){
		team.push(players.Attackers[Math.floor(Math.random() * players.Attackers.length)]);
	}

	for(numMid = 0; numMid < formation["numMid"]; numMid++){
		team.push(players.Midfielders[Math.floor(Math.random() * players.Midfielders.length)]);
	}

	for(numDef = 0; numDef < formation["numDef"]; numDef++){
		team.push(players.Defenders[Math.floor(Math.random() * players.Defenders.length)]);
	}

	team.push(players.GoalKeepers[Math.floor(Math.random() * players.GoalKeepers.length)]);	

	return team;
};

// assign pseduo-random positions to players in the team at this moment
function assignPositionsToPlayers(team, formation){

};

var homeTeamFormation = formations.formations[Math.floor(Math.random() * 4)];
displayFormation("home",homeTeamFormation["name"]);
var homeTeam = assignPlayersToPositions(playerArrays, homeTeamFormation);
console.log(homeTeam);


var awayTeamFormation = formations.formations[Math.floor(Math.random() * 4)];
displayFormation("away",awayTeamFormation["name"]);
var awayTeam = assignPlayersToPositions(playerArrays, awayTeamFormation);
console.log(awayTeam);


