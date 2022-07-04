"Use strict";

const personalData = {
	name:"jone",
	surname:"jonson",
	age:28,
	profession:"programist",
	education:"the highest",
	 other:{
			height:"1,80",
			weight:"70",
			eyesColor:"black",
			hairColor:"black",
	 },
};
for (const key in personalData) {
		console.log(`property: ${key}; value:${personalData[key]}`);

			if(typeof personalData[key] === "object"){
				for(const nkey in personalData[key]){
					console.log(`   nested property: ${nkey}; value: ${personalData[key][nkey]}`);
				}
			}
}
//____________________________________________________________________________________________________

const arr = [
	"spring",
		[
			"march",
			"april",
			"may"
		],
		"summer",
		[
			"juny",
			"july",
			"august"
		],
		"autumn",
		[
			"september",
			"october",
			"november"
		],
		"winter",
		[
			"december",
			"january",
			"february"
		],
];
for(const key of arr ){
	console.log(key)
}
//______________________________________________________________________________________


const obj = {
cars:[
		{item1:"bmw"},
		{item2:"mercedes"},
		{item3:"audi"},
		{item4:"ferrari"},
		{item5:"lamborgini"},
			[
			"bmw",	"e34","e36","e46"
			],
			[
			"mercedes",	"w220","w221",["w222",
										"white",
										"black",
									     "gray"	]
			]

	]
};for(const key of obj.cars ){
	console.log(key)
}

//_____________________________________________________________________________________








