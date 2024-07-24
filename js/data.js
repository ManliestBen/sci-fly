const bsgQuestions = [
	{
		question: 'Who is the commander of the Battlestar Galactica?',
		answers: [
			{ text: 'William Adama', correct: true },
			{ text: 'Saul Tigh', correct: false },
			{ text: 'Lee Adama', correct: false }
		],
		imagePath: '../assets/images/bsg/1.jpg'
	},
	{
		question: 'What is the name of the last remaining Battlestar?',
		answers: [
			{ text: 'Pegasus', correct: false },
			{ text: 'Galactica', correct: true },
			{ text: 'Atlantia', correct: false }
		],
		imagePath: '../assets/images/bsg/2.png'
	},
	{
		question: 'Who is the President of the Twelve Colonies?',
		answers: [
			{ text: 'Laura Roslin', correct: true },
			{ text: 'Gaius Baltar', correct: false },
			{ text: 'Tom Zarek', correct: false }
		],
		imagePath: '../assets/images/bsg/3.jpg'
	},
	{
		question: 'What are the robotic antagonists called?',
		answers: [
			{ text: 'Replicants', correct: false },
			{ text: 'Cylons', correct: true },
			{ text: 'Borg', correct: false }
		],
		imagePath: '../assets/images/bsg/4.jpg'
	},
	{
		question: 'What is the name of the Cylon model played by Tricia Helfer?',
		answers: [
			{ text: 'Number Six', correct: true },
			{ text: 'Sharon Valerii', correct: false },
			{ text: 'Leoben Conoy', correct: false }
		],
		imagePath: '../assets/images/bsg/5.png'
	},
	{
		question: 'What is the name of the pilot with the callsign "Starbuck"?',
		answers: [
			{ text: 'Kara Thrace', correct: true },
			{ text: 'Helo Agathon', correct: false },
			{ text: 'Boomer', correct: false }
		],
		imagePath: '../assets/images/bsg/6.jpg'
	},
	{
		question: 'Who is the XO (Executive Officer) of the Galactica?',
		answers: [
			{ text: 'Saul Tigh', correct: true },
			{ text: 'Felix Gaeta', correct: false },
			{ text: 'Karl Agathon', correct: false }
		],
		imagePath: '../assets/images/bsg/7.jpg'
	},
	{
		question: 'What is the name of the Battlestar that joins Galactica in season 2?',
		answers: [
			{ text: 'Pegasus', correct: true },
			{ text: 'Columbia', correct: false },
			{ text: 'Valkyrie', correct: false }
		],
		imagePath: '../assets/images/bsg/8.jpg'
	},
	{
		question: 'Which character becomes a Cylon collaborator?',
		answers: [
			{ text: 'Gaius Baltar', correct: true },
			{ text: 'Lee Adama', correct: false },
			{ text: 'Sam Anders', correct: false }
		],
		imagePath: '../assets/images/bsg/9.jpg'
	},
	{
		question: 'What is the ultimate destination for the fleet?',
		answers: [
			{ text: 'Earth', correct: true },
			{ text: 'New Caprica', correct: false },
			{ text: 'Tauron', correct: false },
			{ text: 'Kobol', correct: false }
		],
		imagePath: '../assets/images/bsg/10.png'
	}
]

const swQuestions = [
	{
		question: 'Who is Luke Skywalker’s father?',
		answers: [
			{ text: 'Obi-Wan Kenobi', correct: false },
			{ text: 'Darth Vader', correct: true },
			{ text: 'Yoda', correct: false }
		],
		imagePath: '../assets/images/sw/1.jpeg'
	},
	{
		question: 'What is the name of Han Solo’s ship?',
		answers: [
			{ text: 'Millennium Falcon', correct: true },
			{ text: 'Star Destroyer', correct: false },
			{ text: 'X-Wing', correct: false }
		],
		imagePath: '../assets/images/sw/2.jpg'
	},
	{
		question: 'Which planet is Princess Leia’s home?',
		answers: [
			{ text: 'Tatooine', correct: false },
			{ text: 'Alderaan', correct: true },
			{ text: 'Hoth', correct: false }
		],
		imagePath: '../assets/images/sw/3.png'
	},
	{
		question: 'Who trained Luke Skywalker in "The Empire Strikes Back"?',
		answers: [
			{ text: 'Obi-Wan Kenobi', correct: false },
			{ text: 'Yoda', correct: true },
			{ text: 'Mace Windu', correct: false }
		],
		imagePath: '../assets/images/sw/4.jpg'
	},
	{
		question: 'Who is the bounty hunter that captures Han Solo?',
		answers: [
			{ text: 'Greedo', correct: false },
			{ text: 'Boba Fett', correct: true },
			{ text: 'Jango Fett', correct: false }
		],
		imagePath: '../assets/images/sw/5.png'
	},
	{
		question: 'What is the name of the ice planet in "The Empire Strikes Back"?',
		answers: [
			{ text: 'Hoth', correct: true },
			{ text: 'Dagobah', correct: false },
			{ text: 'Endor', correct: false }
		],
		imagePath: '../assets/images/sw/6.jpeg'
	},
	{
		question: 'Who is the leader of the Rebel Alliance?',
		answers: [
			{ text: 'Mon Mothma', correct: true },
			{ text: 'Leia Organa', correct: false },
			{ text: 'Admiral Ackbar', correct: false }
		],
		imagePath: '../assets/images/sw/7.png'
	},
	{
		question: 'What is the name of the Ewok who befriends Princess Leia?',
		answers: [
			{ text: 'Wicket', correct: true },
			{ text: 'Chief Chirpa', correct: false },
			{ text: 'Logray', correct: false }
		],
		imagePath: '../assets/images/sw/8.jpeg'
	},
	{
		question: 'Who is Luke Skywalker’s sister?',
		answers: [
			{ text: 'Padmé Amidala', correct: false },
			{ text: 'Leia Organa', correct: true },
			{ text: 'Ahsoka Tano', correct: false }
		],
		imagePath: '../assets/images/sw/9.png'
	},
	{
		question: 'What is the name of the first Death Star’s commanding officer?',
		answers: [
			{ text: 'Grand Moff Tarkin', correct: true },
			{ text: 'Darth Vader', correct: false },
			{ text: 'Admiral Piett', correct: false },
			{ text: 'General Veers', correct: false }
		],
		imagePath: '../assets/images/sw/10.png'
	}
]

const tngQuestions = [
	{
		question: 'Who is the captain of the USS Enterprise-D?',
		answers: [
			{ text: 'Jean-Luc Picard', correct: true },
			{ text: 'James T. Kirk', correct: false },
			{ text: 'Benjamin Sisko', correct: false }
		],
		imagePath: '../assets/images/tng/1.png'
	},
	{
		question: 'What species is Worf?',
		answers: [
			{ text: 'Vulcan', correct: false },
			{ text: 'Klingon', correct: true },
			{ text: 'Romulan', correct: false }
		],
		imagePath: '../assets/images/tng/2.png'
	},
	{
		question: "Who is the ship's counselor?",
		answers: [
			{ text: 'Beverly Crusher', correct: false },
			{ text: 'Deanna Troi', correct: true },
			{ text: 'Tasha Yar', correct: false }
		],
		imagePath: '../assets/images/tng/3.png'
	},
	{
		question: 'What is the name of the android crew member?',
		answers: [
			{ text: 'Data', correct: true },
			{ text: 'Lore', correct: false },
			{ text: 'B-4', correct: false }
		],
		imagePath: '../assets/images/tng/4.png'
	},
	{
		question: 'Which character is the chief engineer?',
		answers: [
			{ text: 'Geordi La Forge', correct: true },
			{ text: "Miles O'Brien", correct: false },
			{ text: 'Reginald Barclay', correct: false }
		],
		imagePath: '../assets/images/tng/5.jpg'
	},
	{
		question: "What is the name of the ship's doctor?",
		answers: [
			{ text: 'Julian Bashir', correct: false },
			{ text: 'Leonard McCoy', correct: false },
			{ text: 'Beverly Crusher', correct: true }
		],
		imagePath: '../assets/images/tng/6.jpg'
	},
	{
		question: 'Which episode features the first appearance of the Borg?',
		answers: [
			{ text: 'Q Who', correct: true },
			{ text: 'The Best of Both Worlds', correct: false },
			{ text: 'The Measure of a Man', correct: false }
		],
		imagePath: '../assets/images/tng/7.png'
	},
	{
		question: 'Who is the first officer on the USS Enterprise-D?',
		answers: [
			{ text: 'William Riker', correct: true },
			{ text: 'Hikaru Sulu', correct: false },
			{ text: 'Tuvok', correct: false }
		],
		imagePath: '../assets/images/tng/8.jpg'
	},
	{
		question: 'What is the name of the bartender in Ten Forward?',
		answers: [
			{ text: 'Guinan', correct: true },
			{ text: 'Neelix', correct: false },
			{ text: 'Quark', correct: false }
		],
		imagePath: '../assets/images/tng/9.png'
	},
	{
		question: 'What is the title of the series finale?',
		answers: [
			{ text: 'All Good Things...', correct: true },
			{ text: 'Encounter at Farpoint', correct: false },
			{ text: 'The Inner Light', correct: false },
			{ text: "Yesterday's Enterprise", correct: false }
		],
		imagePath: '../assets/images/tng/10.jpg'
	}
]

export {
  bsgQuestions,
  swQuestions,
  tngQuestions
}