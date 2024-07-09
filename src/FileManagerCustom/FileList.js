import React, { useEffect, useState } from 'react';

const FileList = ({ currentDirectory, treeData, onUpdateTreeData }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (treeData[currentDirectory]) {
      const currentFiles = treeData[currentDirectory].children || [];
      setFiles(currentFiles);
    } else {
      setFiles([]);
    }
  }, [currentDirectory, treeData]);

  const handleRenameFile = (fileName) => {
    const newFileName = prompt(`Enter the new name for ${fileName}:`);
    if (newFileName) {
      const updatedTreeData = { ...treeData };
      const filePath = `${currentDirectory}/${fileName}`;
      
      // Check if the file node exists in the treeData
      if (updatedTreeData[filePath]) {
        // Update the name of the file node
        updatedTreeData[filePath].name = newFileName;
        
        // Construct the new file path with the updated name
        const newFilePath = `${currentDirectory}/${newFileName}`;
        
        // Update the treeData with the new file path
        updatedTreeData[newFilePath] = updatedTreeData[filePath];
        
        // Delete the old file path from treeData
        delete updatedTreeData[filePath];
        
        // Update the state with the new treeData
        onUpdateTreeData(updatedTreeData);
      }
    }
  };
  

  const handleDeleteFile = (fileName) => {
    if (window.confirm(`Are you sure you want to delete ${fileName}?`)) {
      const updatedTreeData = { ...treeData };
      const filePath = `${currentDirectory}/${fileName}`;
      delete updatedTreeData[filePath];
      onUpdateTreeData(updatedTreeData);
    }
  };

  return (
    <div style={{ flex: '1', padding: '10px' }}>
      <h3>Files in {currentDirectory}</h3>
      <ul>
        {files.map((item) => (
          <li key={item}>
            {item}
            {/* <button onClick={() => handleRenameFile(item)}>Rename</button>
            <button onClick={() => handleDeleteFile(item)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
