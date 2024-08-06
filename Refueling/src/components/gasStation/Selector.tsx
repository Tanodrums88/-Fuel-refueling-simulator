import React, { ReactNode, useState } from "react";

type SelectorProps = {
  children: ReactNode;
  valueSelected: number;
  onSelectValue: (value: number) => void;
};

function Selector({ children, onSelectValue, valueSelected }: SelectorProps) {
  const [value, setValue] = useState<number>(0);

  function valueSelect() {
    setValue(valueSelected);
    onSelectValue(value);
  }

  return (
    <div className="selctorContainer">
      <div className="selectorButton" onClick={valueSelect} />
      <p className="selectorText">{children}</p>
    </div>
  );
}

export default Selector;
