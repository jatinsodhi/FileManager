import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
import './filemanager.css'

function Filemanager() {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    // React.useEffect(() => {
    //     // Function to hide the license validation message
    //     const replaceText = (oldText, newText) => {
    //         const bodyHTML = document.body.innerHTML;
    //         console.log('bodyHTML:', bodyHTML); // Log the entire body HTML

    //         if (bodyHTML.includes(oldText)) {
    //             console.log('Found old text in bodyHTML:', oldText); // Confirm the old text is found
    //             document.body.innerHTML = bodyHTML.replace(oldText, newText);
    //             console.log('Replaced old text with new text'); // Confirm replacement
    //         } else {
    //             console.log('Old text not found in bodyHTML'); // Indicate if the old text was not found
    //         }
    //     };

    //     // The specific text to replace
    //     const licenseMessage = "This application was built using a trial version of Syncfusion Essential Studio. To remove the license validation message permanently, a valid license key must be included";

    //     // Replace the text after the component mounts
    //     replaceText(licenseMessage, "");
    // }, []);
    return (
        <div className="control-section">
            <FileManagerComponent 
                id="file" 
                ajaxSettings={{
                    url: hostUrl + "api/FileManager/FileOperations",
                    getImageUrl: hostUrl + "api/FileManager/GetImage",
                    uploadUrl: hostUrl + "api/FileManager/Upload",
                    downloadUrl: hostUrl + "api/FileManager/Download"
                }} 
                allowMultiSelection={true}
                toolbarSettings={{ items: ['NewFolder', 'Upload', 'Delete', 'Download', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details'] }}
                contextMenuSettings={{
                    layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', 'NewFolder', 'Upload', '|', 'Details', '|', 'SelectAll'],
                    visible: true
                }}
            />
        </div>
        );
}
export default Filemanager;