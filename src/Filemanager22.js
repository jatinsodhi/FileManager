import React, { useState } from "react";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";

import FileManager from "@nolesh/react-file-manager";
import "./custom-ui.css";

import { SimpleRoot } from "./SimpleRoot";
import { ComplexRoot } from "./ComplexRoot";
import { createMaterialUIFileItem } from "./FileItemMaterialUI";

const getErrorMessage = (error) => {
  return `${error.message} (${error.status})`;
};

const request = async (url, method = "GET", body = null) => {
  const response = await fetch(`/api/${url}`, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        ...(body ? { body: JSON.stringify(body) } : {})
    });
    if (!response.ok) {
        // gets error information from the response body
        const errorInfo = await response.json();
        return Promise.reject(getErrorMessage(errorInfo));
    }
    return await Promise.resolve(response);
};

const basicParams = {
  fetchRemoteFiles: () => {
    return request("fetchFiles").then((res) => res.json());
  },
  getUploadParams: (localFileData) => ({
    URL: `/api/singleFileUpload`,
    processResponse: () => localFileData,
    processError: getErrorMessage
  }),
  viewFile: (fileData) => {
    // Requests a blob from the server and handles the error if it exists
    return request(`file/${fileData.fileName}`).then((resp) => resp.blob());
  },
  downloadFile: (fileData) => {
    // Uses the default filename(description) and handles the error if it exists
    // return request(`file/${fileData.fileName}`).then((resp) => resp.blob());
    return Promise.reject(`Unable to download file ${fileData.fileName}`);
  }
};

const Filemanager2 = () => {
  const [complexRoot, setComplexRoot] = useState(true);
  const [lastError, setLastError] = useState("");

  const handleErrors = (err) => {
    if (!Array.isArray(err)) setLastError(err.message);
    else {
      const messages = err.reduce(
        (acc, val, indx) => acc.concat(`${indx + 1}. ${val.message}\n`),
        ""
      );
      setLastError(messages);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="body1" style={{ padding: 10 }}>
        An example of a custom container (root) and file item created with
        Material UI
      </Typography>
      <div className="checkbox-wrapper">
        <FormControlLabel
          control={
            <Checkbox
              checked={complexRoot}
              onChange={(e, value) => setComplexRoot(value)}
            />
          }
          label="Use complex container (root) with header and footer"
        />
      </div>

      <FileManager
        {...basicParams}
        onError={handleErrors}
        addFileDescription
        overrides={{
          Root: {
            component: complexRoot ? ComplexRoot : SimpleRoot
          },
          FileItem: {
            component: createMaterialUIFileItem()
          }
        }}
        accept="image/*"
      />

      <div style={{ padding: 10, color: "red" }}>{lastError}</div>
    </div>
  );
};

export default Filemanager2;
