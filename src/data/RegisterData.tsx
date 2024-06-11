import { useRefuelingContext } from "../store/RefuelingContext";

const { registerData } = useRefuelingContext();
//const fuel = ["PETROL" , "DIESEL" , "LPG" , "METHANE"];
const petrolData = registerData.filter((d) => d.fuel === "PETROL");
const dieselData = registerData.filter((d) => d.fuel === "DIESEL");
const lpgData = registerData.filter((d) => d.fuel === "LPG");
const methaneData = registerData.filter((d) => d.fuel === "METHANE");

export const dataRegister = [
  {
    name: petrolData[0].fuel,
    numRefuelings: petrolData.length,
  },
  {
    name: dieselData[0].fuel,
    numRefuelings: dieselData.length,
  },
  {
    name: lpgData[0].fuel,
    numRefuelings: lpgData.length,
  },
  {
    name: methaneData[0].fuel,
    numRefuelings: methaneData.length,
  },
];
