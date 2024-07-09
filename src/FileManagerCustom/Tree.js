import React, { useState } from 'react';

const Tree = ({ currentDirectory, onDirectoryChange, treeData }) => {
  const [expandedFolders, setExpandedFolders] = useState([]);

  const toggleFolder = (folder) => {
    if (expandedFolders.includes(folder)) {
      setExpandedFolders(expandedFolders.filter((f) => f !== folder));
    } else {
      setExpandedFolders([...expandedFolders, folder]);
    }
  };

  const handleItemClick = (itemPath) => {
    if (treeData[itemPath]) {
      const node = treeData[itemPath];
      if (node.children && node.children.length > 0) {
        toggleFolder(itemPath);
      }
      onDirectoryChange(itemPath);
    } else {
      console.log('File clicked:', itemPath);
    }
  };

  const renderTree = (node, path) => {
    if (!node || !node.children) return null;

    return (
      <ul>
        {node.children.map((child) => {
          const childPath = `${path}/${child}`;
          const isFolder = treeData[childPath]?.children?.length > 0;

          return (
            <li key={childPath}>
              <span
                style={{ cursor: isFolder ? 'pointer' : 'default', fontWeight: isFolder ? 'bold' : 'normal' }}
                onClick={() => handleItemClick(childPath)}
              >
                {/* {isFolder && expandedFolders.includes(childPath) ? '📁 ' : '📂 '} */}
                {isFolder ? treeData[childPath]?.name : <span style={{ marginLeft: '10px' }}>📄 {child}</span>}
                {/* Display folder name or file icon */}
              </span>
              {isFolder && expandedFolders.includes(childPath) && renderTree(treeData[childPath], childPath)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div style={{ flex: '0 0 200px', borderRight: '1px solid #ccc', padding: '10px' }}>
      <h3>File Tree</h3>
      <ul>
        {/* Render the root folders */}
        {treeData['/'].children.map((rootChild) => {
          const rootChildPath = `/${rootChild}`;
          const isRootFolder = treeData[rootChildPath]?.children?.length > 0;

          return (
            <li key={rootChildPath}>
              <span
                style={{ cursor: isRootFolder ? 'pointer' : 'default', fontWeight: isRootFolder ? 'bold' : 'normal' }}
                onClick={() => handleItemClick(rootChildPath)}
              >
                {isRootFolder && expandedFolders.includes(rootChildPath) ? '📁 ' : '📂 '}
                {treeData[rootChildPath]?.name}
              </span>
              {isRootFolder && expandedFolders.includes(rootChildPath) && renderTree(treeData[rootChildPath], rootChildPath)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tree;
