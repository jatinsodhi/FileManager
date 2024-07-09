import React, { useState } from 'react';
import FolderTree from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';
import './filemanager.css';

const initialData = {
    name: 'root',
    isOpen: true,
    children: [
        {
            name: 'Folder 1',
            children: [
                { name: 'File 1-1' },
                { name: 'File 1-2' },
            ],
        },
        {
            name: 'Folder 2',
            children: [
                { name: 'File 2-1' },
                { name: 'File 2-2' },
            ],
        },
    ],
};

function Filemanager3() {
    const [treeState, setTreeState] = useState(initialData);
    const [selectedFile, setSelectedFile] = useState(null);
    // const onTreeStateChange = newState => {
    //     setTreeState(newState);
    // };
    const handleFileSelect = (node) => {
        if (!node.children) { // Make sure it's a file, not a folder
            setSelectedFile(node.name);
        }
    };
    const onTreeStateChange = (newState) => {
        setTreeState(newState);
        // Reset selectedFile if it's not in the new state
        if (selectedFile) {
            const flattenedNodes = flattenTree(newState);
            if (!flattenedNodes.find((node) => node.name === selectedFile)) {
                setSelectedFile(null);
            }
        }
    };

    const flattenTree = (node) => {
        let flattened = [node];
        if (node.children) {
            node.children.forEach(child => {
                flattened = flattened.concat(flattenTree(child));
            });
        }
        return flattened;
    };

    const handleDownload = () => {
        alert(`Downloading file: ${selectedFile}`);
    };
    return (
        <>
            <FolderTree
                data={initialData}
                onChange={onTreeStateChange}
                onClick={handleFileSelect}
            />
            {selectedFile && (
                <div>
                    Selected File: {selectedFile}
                    <button onClick={handleDownload}>Download</button>
                </div>
            )}
            <div>
                Live Tree State
                {/* <pre>
                    {JSON.stringify(treeState, null, 2)}
                </pre> */}
            </div>
        </>
    );
}


export default Filemanager3;
