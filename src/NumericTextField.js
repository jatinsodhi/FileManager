import React, { useState, useCallback, Profiler } from 'react';
import Styles from './styles.css';

export const NumericTextField = (props) => {
  const initialCounter = typeof props.defaultValue === "string" ? parseInt(props.defaultValue, 10) : props.defaultValue;
  const [counter, setCounter] = useState(initialCounter || "0");

  let inpt_class_name = `${props.className} ${props.control_type}`;
  let disabledOrNot = '';

  if (props.ff_read_only_for_edit_flag === "Y" && props.defaultValue) {
    disabledOrNot = 'readonly';
    inpt_class_name = `${inpt_class_name} readonly`;
  } else {
    if (props.disabled === 'disabled' || props.disabled === 'readonly') {
      disabledOrNot = 'readonly';
      inpt_class_name = `${inpt_class_name} readonly`;
    }
  }

  const negative_const = props?.datalabel?.fb_mst_fields_table?.fb_fb_mst_fields_add_attibutes_table;
  const negativeObject = negative_const ? negative_const?.find(obj => obj.add_attr_key === "enable_negative_value") : "";
  const negative = negativeObject ? negativeObject.add_attr_value : "";

  const step = 1;
  const min = parseInt(props?.min);
  const max = parseInt(props?.max);

  const validateValue = useCallback((value) => {
    console.log('validateValue');
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    }
    return value;
  }, [min, max]);

  const decreaseValue = useCallback(() => {
    console.log('decreaseValue');
    if (negative === "N" && counter === 0) {
      return;
    }
    const newValue = validateValue(counter - step);
    setCounter(newValue);
  }, [counter, negative, step, validateValue]);

  const increaseValue = useCallback(() => {
    console.log('increaseValue');
    const newValue = validateValue(counter + step);
    setCounter(newValue);
  }, [counter, step, validateValue]);

  const handleInputChange = useCallback((e) => {
    let value = e.target.value ? parseInt(e.target.value) : min;
    value = validateValue(value);
    setCounter(value);
  }, [validateValue, min]);

  const handleKeyDown = useCallback((e) => {
    console.log('handleKeyDown');
    if (negative === "N" && counter === 0 && e.key === "ArrowDown") {
      e.preventDefault();
    } else {
      const newValue = validateValue(counter - step);
      setCounter(newValue);
    }
  }, [counter, negative, step, validateValue]);

  const handleKeyUp = useCallback(() => {
    console.log("handleKeyUp");
    increaseValue();
  }, [increaseValue]);

  return (
    <div className={`${props.divClassName}`}>
      <div className={props.LabelAndInputWrapClassName}>
        <div className={`${props.InputFieldsLabelClassName} spd-form-title`}>
          <>
            <span className="spd-validation-symbol">
              {props.validationSymbol}
            </span>
            {props.fieldLabel}
          </>
        </div>

        <div className={`${Styles.form_field_section}`}>
          <div className={`${Styles.form_field_InputSection} ${Styles.form_field_controlTypeInput}`}>
            <div className={`${Styles.form_field_controlType}`}>
              <input
                value={counter}
                onChange={handleInputChange}
                type={props.type}
                name={props.filedName}
                id={props.fieldIdd}
                className={inpt_class_name}
                defaultValue={props.defaultValue}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                textmaskformat={props.textmaskformat}
                placeholder={props.placeholder}
                required={props.required}
                rows={props.rows}
                readOnly={disabledOrNot}
                max={props.max}
                min={props.min}
                autoComplete="off"
                onBlur={props?.onBlur}
                onFocus={props?.onFocus}
                ff_comp_type={props?.control_type}
                tabIndex="-1"
              />
              <div className={`${Styles.numeric_text_buttons}`}>
                <button onClick={increaseValue}><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.84668L5.93939 1.39412C6.52273 0.868282 7.47727 0.868282 8.06061 1.39412L13 5.84668" stroke="var(--ui-text-color)" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                <button className={`${Styles.numeric_text_down_btn}`} onClick={decreaseValue}><svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1.04395L8.06061 4.88934C7.47727 5.34347 6.52273 5.34347 5.93939 4.88934L1 1.04395" stroke="var(--ui-text-color)" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Wrap the component with a Profiler to measure performance
const ProfilerWrapper = (props) => {
  const profilerCallback = (id, phase, actualDuration) => {
    console.log(`ID: ${id}, Phase: ${phase}, Actual Duration: ${actualDuration}`);
  };

  return (
    <Profiler id="NumericTextField" onRender={profilerCallback}>
      <NumericTextField {...props} />
    </Profiler>
  );
};
export default ProfilerWrapper;
