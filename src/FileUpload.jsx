// SO APPARENTLY FILE SYSTEM ACCESS API DOESN'T WORK ON FIREFOX
// [https://developer.chrome.com/docs/capabilities/web-apis/file-system-access] <- REASON

function FileUpload() {
    async function fileChange(event) {
        const fileList = event.target.files;
        const audio = document.getElementById("audio-player");
        audio.src = URL.createObjectURL(fileList[0]);
        audio.play();
    };

    return (
    <>
        <input type="file" id="file-selector" accept=".mp3" onChange={fileChange} multiple/>
        <audio id="audio-player" controls loop/>
    </>
    );
}

export default FileUpload;