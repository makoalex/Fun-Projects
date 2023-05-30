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



*/
// get access to text input
const textInput = document.querySelector('#text-input');
// get access to speak button
const speakButton = document.querySelector('#speak-btn');
//get access to voice list
const voiceList = document.querySelector('#voice-list');
// get access to the voice button
const voicesButton = document.querySelector('#voice-btn');

// get access to the voice machine container
const voiceMachineContainer = document.querySelector(
  '#voice-machine-container'
);
// get access to the modal
const voiceModal = document.querySelector('#voice-modal');
// get access to the close button
const closeButton = document.querySelector('#close-modal');

//hide modal
const modalBox = (voiceModal.style.display = 'none');

function toggleVoiceModule() {
  if (voiceModal.style.display === 'none') {
    voiceModal.style.display = 'block';
  } else {
   voiceModal.style.display = 'none';
  }
}

voicesButton.addEventListener('click', toggleVoiceModule);
