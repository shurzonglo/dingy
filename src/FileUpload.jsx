// SO APPARENTLY FILE SYSTEM ACCESS API DOESN'T WORK ON FIREFOX
// [https://developer.chrome.com/docs/capabilities/web-apis/file-system-access] <- REASON

function FileUpload() {
    // async function fileClick() {
    //     console.log("'as been clicked");
    //     const [fileHandle] = await window.showOpenFilePicker();
    //     const file = fileHandle.getFile(); // file is of File
    //     console.log((await file).name); 
    // }

    async function fileChange(event) {
        const fileList = event.target.files;
        const audio = document.getElementById("audio_player");
        audio.src = URL.createObjectURL(fileList[0]);
        audio.play();
        
    };

    return (
    <>
        <input type="file" id="file-selector" accept=".mp3" onChange={fileChange} multiple/>
        <audio id="audio_player"/>
    </>
    );
}



export default FileUpload;