import React, { useState } from 'react';
import Tree from './Tree';
import FileList from './FileList';

const FileManager = () => {
  const [currentDirectory, setCurrentDirectory] = useState('/');
  
  // Example static tree structure
  const [treeData, setTreeData] = useState({
    '/': {
      name: '/',
      children: ['folder1', 'folder2', 'folder3'],
    },
    '/folder1': {
      name: 'folder1',
      children: ['file1.txt', 'file2.txt'],
    },
    '/folder2': {
      name: 'folder2',
      children: ['subfolder'],
    },
    '/folder2/subfolder': {
      name: 'subfolder',
      children: ['file3.txt'],
    },
    '/folder3': {
      name: 'folder3',
      children: ['subfolder'],
    },
    '/folder3/subfolder': {
      name: 'subfolder3',
      children: ['file4.txt'],
    },
  });

  const handleDirectoryChange = (directory) => {
    setCurrentDirectory(directory);
  };

  const handleUpdateTreeData = (updatedTreeData) => {
    setTreeData(updatedTreeData);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Tree currentDirectory={currentDirectory} onDirectoryChange={handleDirectoryChange} treeData={treeData} />
      <FileList currentDirectory={currentDirectory} treeData={treeData} onUpdateTreeData={handleUpdateTreeData} />
    </div>
  );
};

export default FileManager;
