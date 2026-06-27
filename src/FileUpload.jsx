// SO APPARENTLY FILE SYSTEM ACCESS API DOESN'T WORK ON FIREFOX
// [https://developer.chrome.com/docs/capabilities/web-apis/file-system-access] <- REASON
function FileUpload() {
    async function fileClick() {
        console.log("'as been clicked");
        const [fileHandle] = await window.showOpenFilePicker();
        const file = fileHandle.getFile(); // file is of File
        console.log((await file).name); 
    }

    return (
    <>
        <button onClick={fileClick}>
            buttonson
        </button>
    </>
    );
}

export default FileUpload;