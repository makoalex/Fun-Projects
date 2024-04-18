/* 
MILESTONES
==========

check if speech is in browser- compatibility

get access to the voice button
get access to the voice machine container
get access to the modal
get access to the close button
get access to text input
get access to speak button

access to voice list
add voices to the voice list
make the browser speak 



// */
// // get access to text input
// const textInput = document.querySelector('#text-input');
// // get access to speak button
// const speakButton = document.querySelector('#speak-btn');
// //get access to voice list
// const voiceList = document.querySelector('#voice-list');
// // get access to the voice button
// const voicesButton = document.querySelector('#voice-btn');

// // get access to the voice machine container
// const voiceMachineContainer = document.querySelector(
//   '#voice-machine-container'
// );
// // get access to the modal
// const voiceModal = document.querySelector('#voice-modal');
// // get access to the close button
// const closeButton = document.querySelector('#close-modal');

// // //hide modal
// // const modalBox = (voiceModal.style.display = 'none');
// if (!('speechSynthesis' in window)) {
// 	alert("This app doesn't have access to robot voices 🥲");
// } else {
// 	// - get access to the text input
// 	const textInput = document.getElementById('text-input');
// 	// - get access to the speak button
// 	const speakButton = document.getElementById('speak-button');
// 	// - get access to the voice list
// 	const voiceList = document.getElementById('voice-list');
// 	// - get access to the voice button
// 	const voicesButton = document.getElementById('voices-button');
// 	// - get access to the voice machine container
// 	const voiceMachineContainer = document.getElementById(
// 		'voice-machine-container'
// 	);
// 	// - get access to the modal
// 	const voiceModal = document.getElementById('voice-modal');
// 	// - get access to the close button on modal
// 	const closeButton = document.getElementById('close-modal');

// 	// - hide modal
// 	voiceModal.style.display = 'none';

if (!('speechSynthesis' in window)) {
	alert("This app doesn't have access to voices");
} else {
	// - get access to the text input
	const textInput = document.getElementById('text-input');
	// - get access to the speak button
	const speakButton = document.getElementById('speak-button');
	// - get access to the voice list
	const voiceList = document.getElementById('voice-list');
	// - get access to the voice button
	const voicesButton = document.getElementById('voices-button');
	// - get access to the voice machine container
	const voiceMachineContainer = document.getElementById(
		'voice-machine-container'
	);
	// - get access to the modal
	const voiceModal = document.getElementById('voice-modal');
	// - get access to the close button on modal
	const closeButton = document.getElementById('close-modal');
  function closeModal() {
    voiceModal.style.display = 'none';
}
closeButton.addEventListener('click', closeModal);
speakButton.addEventListener('click', speakText);

	// - hide modal
	voiceModal.style.display = 'none';

const toggleVoiceModule = () => {
  if (voiceModal.style.display === 'none') {
    voiceModal.style.display = 'block';
    voiceMachineContainer.style.display = 'none';
  } else {
    voiceModal.style.display = 'none';
    voiceMachineContainer.style.display = 'block';
  }
};

voicesButton.addEventListener('click', toggleVoiceModule);

//check if speech is in browser- compatibility
if (!speechSynthesis in window) {
  alert("This app doesn't have access to voices :(!");
} // Array of voices or empty if none are installed

window.speechSynthesis.onvoiceschanged = function () {
  const voices = window.speechSynthesis.getVoices();
  console.log(' voices',voices);
};

// add voices to the voice list
// - add voices to the voice list
function populateVoiceList() {
  // - get voices from browser
  const voices = speechSynthesis.getVoices();
  // - get all the english voices
  const enUSVoices = voices.filter((voice) => voice.lang === 'en-US');
  console.log(' voices in populateVoiceList ',enUSVoices);

  // - add voices to select
  enUSVoices.forEach((voice, index) => {
    // create a new option
    const option = document.createElement('option');
    // set the text and language for the option
    option.textContent = `${voice.name} (${voice.lang})`;
    // save the voice's name as extra info
    option.setAttribute('data-name', voice.name);
    // add the option to voice list
    voiceList.appendChild(option);
    // choose zorvox as the default
    if (voice.name === 'Zarvox') {
      voiceList.selectedIndex = index;
    }
  });
}
// run function once voices have loaded
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

// run the populateVoiceList function
populateVoiceList();
console.log('yo mama', voiceList)

//get access to browser voice
// get access to browser voice
const utterance = new SpeechSynthesisUtterance();

// - make the browser speak what I wrote with the selected voice
function speakText() {
  // - get the name of the voice we chose
  const selectedVoiceName =
    voiceList.selectedOptions[0].getAttribute('data-name');
    console.log('---->',selectedVoiceName)
  // - get all the voices inside of the browser
  const voices = speechSynthesis.getVoices();
  // - find the voice that matches the one we chose
  const selectedVoice = voices.find(
    (voice) => voice.name === selectedVoiceName
   
  );
  console.log('who da daddy', selectedVoice)

  // - set the the voice
  utterance.voice = selectedVoice;
  utterance.text = textInput.value;

  // - make the computer talk
  speechSynthesis.speak(utterance);
}
}
