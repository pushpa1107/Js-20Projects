
const videoElement = document.getElementById('video');
const buttonVideo = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch(error) {
        // Catch errors
        console.log('whoops, error here:', error);
    }
}

buttonVideo.addEventListener('click', async () => {
    // Disable Button
    buttonVideo.disabled = true;
    // Start Picture and Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    buttonVideo.disabled = false;
});

// On Load
selectMediaStream();