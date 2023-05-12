// Over 300 lines of spaghetti code
// Yanderedev would be proud

function refreshPage(){
    window.location.reload();
} 

const media = [
	"Star Wars", 
	"Star Trek", 
	"Spongebob",
	"iCarly",
	"Victorious",
	"Breaking Bad",
	"Better Call Saul",
	"Drake and Josh",
	"Lizzy McGuire",
	"Zoey 101",
	"Sam and Cat",
	"Robot Jones",
	"Jimmy Neutron",
	"K-On",
	"Fairly Odd Parents",
	"Silence of The Lambs",
	"South Park",
	"Family Guy",
	"Steven Universe",
	"Craig of the Creek",
	"Neon Genesis Evangelion",
	"Avatar: The Last Airbender",
	"Sonichu",
	"Hey Arnold!",
	"CatDog",
	"Courage the Cowardly Dog",
	"Ren & Stimpy",
	"The Simpsons",
	"The Proud Family",
	"The Boondocks",
	"Bob's Burgers",
	"King of the Hill",
	"Daria",
	"Beavis and Butthead",
	"The Powerpuff Girls",
	"Foster's Home for Imaginary Friends",
	"Hilda",
	"My Life as a Teenage Robot",
	"Star vs. The Forces of Evil",
	"Bluey",
	"Hamilton",
	"Heathers",
	"Sonic",
	"Rick and Morty",
	"Moral Orel",
	"Warrior Cats",
	"Regular Show",
	"Danny Phantom",
	"Idiocracy",
	"Johnny Test",
	"Dexter's Laboratory",
	"Rozen Maiden",
	"Animaniacs",
	"Tiny Toons",
	"Gravity Falls",
	"The Owl House",
	"Aqua Teen Hunger Force",
	"Studio Ghibli"
];

const person = [
	" | HontraPoints",
	" | Philosophy Dude",
	" (ft. hbombergoy)"
];

const bs = [
	"Marxism",
	"Transgenderism",
	"Capitalism",
	"Late-Stage Capitalism",
	"The Alt-Right",
	"Bigotry",
	"Class-Based Oppression",
	"Race-Based Oppression",
	"The Far-Right",
	"Transphobia",
	"Homophobia",
	"Queerphobia",
	"Biphobia",
	"Fascism",
	"Bigotry",
	"Marxism-Leninism",
	"The Culture Wars",
	"Sexism",
	"Racism",
	"BIPOC",
	"Pronouns",
	"Colonialism",
	"Dehumanization",
	"Maoism",
	"Stalinism",
	"Eugenics",
	"Autism",
	"Slavery",
	"Neo-McCarthyism",
	"Adultification"
];

const celeb = [
	"J.K. Rowling",
	"Donald Trump",
	"Seth Rogan",
	"Jordan Peterson",
	"Ben Shapiro",
	"Abigail Shapiro",
	"Notch",
	"Kanye",
	"Chris-chan",
	"Dan Schneider",
	"Vladimir Putin",
	"Seth MacFarlane",
	"George Lucas",
	"Quentin Tarantino",
	"Elon Musk",
	"Joe Rogan",
	"JonTron",
	"StoneToss",
	"Tucker Carlson",
	"Ronald Reagan",
	"Dave Chapelle",
	"Matt Groening",
	"Weird Al",
	"John K.",
	"Mike Judge"
];

const adject = [
	"Good",
	"Problematic",
	"Pure Genius",
	"Disappointing",
	"Garbage",
	"Mediocre",
	"Important",
	"Revolutionary",
	"Surprisingly Mature",
	"Embarassing"
];

const token = [
	"Trans",
	"Gay",
	"Black",
	"Hispanic",
	"Queer",
	"Jewish",
	"Neurodivergent",
	"Asian",
	"Disabled",
	"Female",
	"Autistic"
];

const ebil = [
	"Landlord",
	"Nazi",
	"TERF",
	"Conservative",
	"Right Libertarian",
	"Neo-Nazi",
	"Republican",
	"4channer",
	"Incel"
];
		
let phrase;
var x;

mediaRan = Math.floor(Math.random() * media.length);
bsRan = Math.floor(Math.random() * bs.length);
personRan = Math.floor(Math.random() * person.length);
celebRan = Math.floor(Math.random() * celeb.length);
tokenRan = Math.floor(Math.random() * token.length);
adjectRan = Math.floor(Math.random() * adject.length);
ebilRan = Math.floor(Math.random() * ebil.length);

switch (Math.floor(Math.random() * 40)) {
	case 0:
		phrase = "The Hidden Genius of " + media[mediaRan] + ".";
		break;
	case 1: 
		phrase = bs[bsRan] + person[personRan];
		break;
	case 2: 
		phrase = "Why " + celeb[celebRan] + " is a Neo-Nazi.";
		break;
	case 3: 
		phrase = "How " + celeb[celebRan] + "'s Spiteful Rhetoric is Killing " + token[tokenRan] + " People.";
		break;
	case 4:
		phrase = "Why " + media[mediaRan] + " is a Masterpiece.";
		break;
	case 5:
		phrase = media[mediaRan] + ": A Critique.";
		break;
	case 6:
		phrase = media[mediaRan] + " is " +  adject[adjectRan] + ", and here's why.";
		break;
	case 7:
		phrase = "How " + media[mediaRan] + " Subverts Expectations.";
		break;
	case 8:
 		phrase = "How " + media[mediaRan] + " Fails its Audience.";
		break;
	case 9:
		phrase = "The Not-So Secret Fascist Agenda of " + media[mediaRan] + ".";
		break;
	case 10:
		phrase = bs[bsRan] + ": A Measured Response.";
		break;
	case 11:
		phrase = "In Defense of " + media[mediaRan] + ".";
		break;
	case 12:
		phrase = "Exploring " + token[tokenRan] + " Identity through " + media[mediaRan] + ".";
		break;
	case 13:
		phrase = "Antisemitism in " + media[mediaRan] + ".";
		break;
	case 14:
		phrase = "How " + media[mediaRan] + " hides its Transphobia from you.";
		break;
	case 15:
		phrase = media[mediaRan] + ": The Fake Outrage.";
		break;
	case 16:
		switch(Math.floor(Math.random() * 2)) {
			case 0:
				x = media[mediaRan];
				break;
			case 1:
				x = bs[bsRan];
				break;
			case 2:
				x = celeb[celebRan];
				break;
		}
		phrase = x + ": An Analysis.";
		break;
	case 17:
		phrase = "How " + media[mediaRan] + " Propagates " + bs[bsRan] + ".";
		break;
	case 18:
		phrase = "Is " + media[mediaRan] + " a Feminist Franchise?";
		break;
	case 19:
		phrase = "How " + media[mediaRan] + " is Explicitly Anti-Capitalist.";
		break;
	case 20:
		phrase = "Untangling Bigotry in " + media[mediaRan] + ".";
		break;
	case 21:
		phrase = "Why " + token[tokenRan] + " Representation Matters in " + media[mediaRan] + ".";
		break;
	case 22:
		switch(Math.floor(Math.random() * 1)) {
			case 0:
				x = media[mediaRan];
				break;
			case 1:
				x = celeb[celebRan];
				break;
		}
		phrase = "How " + x + " Lies to you.";
		break;
	case 23:
		phrase = media[mediaRan] + " and " + bs[bsRan] + ": A Video Essay.";
		break;
	case 24:
		switch(Math.floor(Math.random() * 2)) {
			case 0:
				x = media[mediaRan];
				break;
			case 1:
				x = bs[bsRan];
				break;
			case 2:
				x = celeb[celebRan];
				break;
		}
		phrase = "The Alt-Right Playbook: " + x;
		break;
	case 25:
		switch(Math.floor(Math.random() * 1)) {
			case 0:
				x = media[mediaRan];
				break;
			case 1:
				x = bs[bsRan];
				break;
		}
		if ((media[mediaRan].startsWith("The") == true) {
			phrase = x + " Iceberg: A Deeper Look.";
		} else {
			phrase = "The " + x + " Iceberg: A Deeper Look.";
		}
		break;
	case 26:
		switch(Math.floor(Math.random() * 1)) {
			case 0:
				x = media[mediaRan];
				break;
			case 1:
				x = celeb[celebRan];
				break;
		}
		phrase = "The Ideology of " + x;
		break;
	case 27:
		phrase = "I watched all of " + media[mediaRan] + ": A Retrospective.";
		break;
	case 28:
		phrase = media[mediaRan] + " & " + bs[bsRan] + ": An Analysis.";
		break;
	case 29:
		phrase = celeb[celebRan] + " is a TERF and here's why.";
		break;
	case 30:
		phrase = "A Brief History on " + bs[bsRan] + ".";
		break;
	case 31:
		phrase = "Why " + celeb[celebRan] + "'s Speech is Dangerous to Democracy.";
		break;
	case 32:
		phrase = bs[bsRan] + " Explained.";
		break;
	case 33:
		phrase = "How " + media[mediaRan] + " Destroyed itself.";
		break;
	case 34:
		phrase = bs[bsRan] + ": An In-Depth Explanation."
		break;
	case 35:
		phrase = "How " + media[mediaRan] + " is an Allegory for " + bs[bsRan] + ".";
		break;
	case 36:
		phrase = "How " + media[mediaRan] + " promotes " + bs[bsRan];
		break;
	case 37:
		switch(Math.floor(Math.random() * 2)) {
			case 0:
				x = media[mediaRan];
				break;
			case 1:
				x = bs[bsRan];
				break;
			case 2:
				x = celeb[celebRan];
				break;
		}
		phrase = "Unpacking " + x + " and its Legacy."
		break;
	case 38:
		phrase = "This is why " + ebil[ebilRan] + "s are a Threat to Society.";
		break;
	case 39:
		phrase = "The Sexualization of " + media[mediaRan] + "'s Characters is a Serious Problem.";
		break;
	case 40:
		phrase = "The Solution to " + ebil[ebilRan] + "s Running Amok in The " + media[mediaRan] + " Fandom.";
		break;
} 

var hour = 0;
var min = 0;

while (min < 40 && hour < 1) {
	hour = Math.floor(Math.random() * 10);
	min = Math.floor(Math.random() * 59);
	var pluralHr;
	var pluralMin;

	if (hour == 1) {
		pluralHr = " Hour";
	} else {
		pluralHr = " Hours";
	}

	if (min == 1) {
		pluralMin = " Minute";
	} else {
		pluralMin = " Minutes";
	}

	var duration = hour + pluralHr + " and " + min + pluralMin + ".";
}

document.getElementById("phrase").innerHTML = phrase;
document.getElementById("time").innerHTML = "Video Duration: " + duration;
