import React, { useState } from 'react';
import data from './data';
import Breadcrumbs from './Breadcrumbs';
import DirectoryTree from './DirectoryTree';
import DirectoryContents from './DirectoryContents';
import './Styles.css'

const FileExplorer = () => {
  const [currentPath, setCurrentPath] = useState([data]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const findParentPath = (root, target, path = []) => {
    if (root === target) {
      return path;
    }

    if (root.contents) {
      for (let item of root.contents) {
        const foundPath = findParentPath(item, target, [...path, root.name]);
        if (foundPath) {
          return foundPath;
        }
      }
    }
    return null;
  };
  const navigateToDirectory = (directory) => {
    const parentPath = findParentPath(data, directory);
    setCurrentPath([...parentPath.map(name => findItemByName(data, name)), directory]);
    setBreadcrumbs([...parentPath, directory.name]);
    console.log('directory', directory);
  };
  const navigateUp = () => {
    if (currentPath.length > 1) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);
      setBreadcrumbs(breadcrumbs.slice(0, -1));
    }
  };
  
  const findItemByName = (root, name) => {
    if (root.name === name) {
      return root;
    }
    if (root.contents) {
      for (let item of root.contents) {
        const foundItem = findItemByName(item, name);
        if (foundItem) {
          return foundItem;
        }
      }
    }
    return null;
  };
  const currentDirectory = currentPath[currentPath.length - 1];
  console.log('currentDirectory', currentDirectory)

  return (
    <div className="file-explorer">
      <div className="left-pane">
        <DirectoryTree directory={currentPath[0]} navigateToDirectory={navigateToDirectory} />
      </div>
      <div className="right-pane">
      <Breadcrumbs path={breadcrumbs} navigateToDirectory={navigateToDirectory} navigateUp={navigateUp} />
        <DirectoryContents directory={currentDirectory} navigateToDirectory={navigateToDirectory} />
      </div>
    </div>
  );
};

export default FileExplorer;
