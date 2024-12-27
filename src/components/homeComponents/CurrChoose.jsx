import React, {useState, memo, useRef} from "react";
import arrow_down from "../../assets/img/arrow_down.svg";
import QuickCurrDrop from "./QuickCurrDrop";

import {useSelector, useDispatch} from "react-redux";
import {setSendNum} from "../../redux/actions";

function CurrChoose({img, txt, number, symb, status, input}) {

    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);

    const inputRef = useRef(null);

    const num = useSelector((state) => state.sendNumReducer.num);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const validInput = /^\d*\.?\d*$/.test(inputValue);

        if (validInput) {
            dispatch(setSendNum(inputValue));
        }
    };

    const handleFocus = () => {
        if (!inputRef.current) return;
        const value = inputRef.current.value;
        const selectionStart = inputRef.current.selectionStart;
        if (selectionStart) return;
        inputRef.current.focus();
        inputRef.current.setSelectionRange(value.length, value.length);
    };

    const showDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className="quick__curency_box">
            <div className="quick__curency_box_side1" onClick={showDropdown}>
                <img src={img} alt="" className="quick__curency_box_currency_img"/>
                <div className="quick__curency_box_currency__container">
                    <p className="quick__curency_box_currency_send">{status}</p>
                    <p className="quick__curency_box_currency_name">{txt}</p>
                </div>
                <img src={arrow_down} alt="" className="quick__curency_arr"/>
                {dropdown && <QuickCurrDrop type={status}/>}
            </div>
            <div className="quick__curency_box_line"></div>
            <div className="quick__curency_box_side2">
                {number && (
                    <div className="quick__curency_box_currency_value quick__curency_box_currency_value2">
                        {number}
                    </div>
                )}
                {input && (
                    <input
                        ref={inputRef}
                        className="quick__curency_box_currency_value quick__curency_box_currency_value_input"
                        type="text"
                        placeholder="0.05"
                        onClick={handleFocus}
                        onChange={handleChange}
                        value={num}
                    />
                )}
                &nbsp;
                <div className="quick__curency_box_currency_init">{symb}</div>
            </div>
        </div>
    );
}

export default memo(CurrChoose);
