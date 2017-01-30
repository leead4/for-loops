for (var i = 5; i <= 120; i += 10) {
	console.log("current value is", i); 
};

for (var j = 4096; j >= 1; j /= 2) {
	console.log("current value is ", j);
}

var americanPres = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin van Buren","William Henry Harrison", "John Tyler", "James K Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S Grant", "Rutherford B Hayes", "James A Garfield", "Chester Arther", "Grover Cleveland", "Benjamin Harrison", "Grover CLeveland", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren G Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin D Roosevelt", "Harry S Truman", "Dwight D Eisenhower", "John F Kennedy", "Lyndon B Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan", "George Bush", "Bill Clinton", "George W Bush", "Barack Obama"];
var preNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44"];
 	


	for(var i = 0; i < 44; i++) { 	
  	console.log ("President # " + preNum[i] + " was " + americanPres[i]);
	};

// For..in 
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
 
	for (key in antSpecies) {
		console.log("keys", key);
	}







