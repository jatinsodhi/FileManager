import React, { useEffect, useState } from 'react';
import './DirectoryTree.css'; // Import your CSS file for styling

const DirectoryTree = ({ directory, navigateToDirectory }) => {
  const [expandedDirs, setExpandedDirs] = useState([]);

  const toggleDirectory = (dir) => {
    if (expandedDirs.includes(dir)) {
      setExpandedDirs(expandedDirs.filter(item => item !== dir));
    } else {
      setExpandedDirs([...expandedDirs, dir]);
    }
    navigateToDirectory(dir);
  };

  useEffect(() => {
    renderDirectory(directory);
  }, [directory]);

  const renderDirectory = (dir, level = 0) => (
    <ul className={`directory-tree ${level > 0 ? 'sub-directory' : ''} ${expandedDirs.includes(dir) ? 'expanded' : ''}`}>
      {dir.contents.map((item, index) => (
        <li key={index}>
          {item.type === 'directory' ? (
            <div className="directory-item">
              <button
                className={`directory-toggle ${expandedDirs.includes(item) ? 'expanded' : 'collapsed'}`}
                onClick={() => toggleDirectory(item)}
              >
                <span className={`directory-icon ${level === 0 ? 'super-folder-icon' : 'sub-folder-icon'}`}>
                  {level === 0 ? '📂' : '📁'}
                </span>
                {item.name}
              </button>
              {expandedDirs.includes(item) && renderDirectory(item, level + 1)}
            </div>
          ) : (
            <span className="file-item">
              <span className="directory-icon file-icon">📄</span>
              {item.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="directory-tree-container">
      <h2>Directory Hierarchy</h2>
      {renderDirectory(directory)}
    </div>
  );
};

export default DirectoryTree;
