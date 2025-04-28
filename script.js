function fileDownloader(url, filename){
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${filename}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor); 
}

function exportToJSON() {
    const jsonContent = {
        "From": document.getElementById("from").value.toUpperCase(),
        "To": document.getElementById("to").value.toUpperCase(),
        "Date": document.getElementById("date").value.toUpperCase(),
        "Subject": document.getElementById("subject").value.toUpperCase(),
        "Body": document.getElementById("body").value.toUpperCase()
    }
    const jsonString = JSON.stringify(jsonContent, null, 4);
    const jsonBlob = new Blob([jsonString], { type: "application/json" });
    const jsonUrl = URL.createObjectURL(jsonBlob);

    fileDownloader(jsonUrl, document.getElementById("subject").value.replace(/[^a-zA-Z ]/g, "").toUpperCase());
};

document.getElementById("download").onclick = () => exportToJSON();