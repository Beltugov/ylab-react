import React, {useCallback, useMemo, useState} from 'react';
import "./MyInput.scss"
import {debounce} from "../../utils/debounce";
import {validation} from "../../utils/validation";

const MyInput = ({getValue, getError, error= null, ...props}) => {
    const [value, setValue] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(error);

    const checkValidation = useCallback((type, value) => {
        const val = validation(type, value)

        setIsError(val.isError)
        getError(val.isError)
        setErrorMessage(val.message)
    }, []);

    const debouncedCheckValidation = useMemo(() => {
        return debounce(checkValidation, 1000);
    }, [checkValidation]);

    const onChange = (e) => {
        const value = e.target.value;
        setValue(value);
        getValue(value)
        debouncedCheckValidation(props.type, value);
    };

    return (
        <div>
            <input className={"my-input " + (isError ? "error" : "")} onChange={onChange} value={value} {...props}/>
            {isError && <div className="error-message">{errorMessage}</div>}
        </div>

    );
};

export default MyInput;