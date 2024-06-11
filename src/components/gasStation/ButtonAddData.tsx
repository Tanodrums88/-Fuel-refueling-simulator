import React, { useState } from "react";
import { useRefuelingContext } from "../../store/RefuelingContext";
import usePlateNumberRandom from "../../hookCustom/usePlateNumberRandom";
import DialogConfirm from "../util/Dialog";

function ButtonAddData() {
  const { addRegister, refuelings, stopRefueling } = useRefuelingContext();
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  let plate = usePlateNumberRandom();
  let date = new Date().toLocaleString();

  function handleSaveData() {
    addRegister({
      plateNumber: plate,
      fuel: refuelings.name,
      priceLitre: refuelings.price,
      refuelingLitre: refuelings.fuelInserted,
      amount: refuelings.amount,
      date: date,
    });
    stopRefueling();
    setDialogIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        className="btnAddData"
        onClick={handleSaveData}>
        Pay
      </button>
      {dialogIsOpen && <DialogConfirm state={dialogIsOpen} />}
    </>
  );
}

export default ButtonAddData;
