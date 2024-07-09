import React, { Profiler } from "react";
import ReactDOM from "react-dom";

import Color_picker from "./color_picker";
import SpeechToText from "./Stotext";
import Rating from "./rating.js";
import DropDownModal from "./dropdownmodal.js";
// import Numeric_text_field from "./numeric_text_field.js"
import ProfilerWrapper, { NumericTextField } from "./NumericTextField.js";
import Filemanager from "./Filemanager.js";
import Filemanager3 from "./Filemanager3.js";
// import FileManager from "./FileManagerCustom/FileManager.js";
import FileManager from "./FileManager/FileManager.js";
// import { Filemanager2 } from "./Filemanager2.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <Color_picker
      initialColor="#ff0000"
      inputType="text"
      maxLength="7"
    /> */}
    {/* <SpeechToText></SpeechToText> */}
    {/* <Rating></Rating> */}
    {/* <dropdownmodal></dropdownmodal> */}
    {/* <DropDownModal></DropDownModal> */}
    {/* <Numeric_text_field></Numeric_text_field> */}
    {/* <NumericTextField></NumericTextField> */}
    {/* <Profiler id="NumericTextField" onRender={profilerCallback}>
      <NumericTextField />
    </Profiler> */}
    {/* <ProfilerWrapper
      className="your-classname"
      control_type="your-control-type"
      ff_read_only_for_edit_flag="N"
      defaultValue="10"
      min="0"
      max="100"
      type="text"
      fieldLabel="Numeric Field"
      validationSymbol="*"
      placeholder="Enter number"
      divClassName="div-classname"
      LabelAndInputWrapClassName="label-and-input-wrap-classname"
      InputFieldsLabelClassName="input-fields-label-classname"
      filedName="numeric_field"
      fieldIdd="numeric_field_id"
      datalabel={{
        fb_mst_fields_table: {
          fb_fb_mst_fields_add_attibutes_table: [
            { add_attr_key: "enable_negative_value", add_attr_value: "Y" }
          ]
        }
      }}
    /> */}
    {/* <Filemanager></Filemanager> */}
    {/* <Filemanager2></Filemanager2> */}
    {/* <Filemanager3></Filemanager3> */}
    {/* <FileManager></FileManager> */}
    {/* Mine */}
    <FileManager></FileManager>
  </React.StrictMode>,
  rootElement
);
