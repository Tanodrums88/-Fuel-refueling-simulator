import React, { ReactNode, useRef } from "react";

type SelectorProps = {
  children: ReactNode;
  valueSelected: number;
  onSelectValue: (value: number) => void;
};

function Selector({ children, onSelectValue, valueSelected }: SelectorProps) {
 const valueRef = useRef<number>(0)

  function valueSelect() {
    valueRef.current = valueSelected    
    onSelectValue(valueRef.current);
  }

  return (
    <div className="selctorContainer">
      <div className="selectorButton" onClick={valueSelect} />
      <p className="selectorText">{children}</p>
    </div>
  );
}

export default Selector;
