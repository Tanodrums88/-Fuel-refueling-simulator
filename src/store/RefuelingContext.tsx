import React, {
  createContext,
  type ReactNode,
  useContext,
  useReducer,
} from "react";

export type RefuelingData = {
  plateNumber: string;
  fuel: "PETROL" | "DIESEL" | "LPG" | "METHANE" | string;
  priceLitre: number;
  refuelingLitre: number;
  amount: number;
  date: string;
};

export type TankStatus = {
  type: "PETROL" | "DIESEL" | "LPG" | "METHANE" | string;
  fuelPresent: number;
};

type RefuelingState = {
  refuelingInProgress: boolean;
  refuelings: FuelSelection;
  registerData: RefuelingData[];
  tankStatus: TankStatus[];
};

export type FuelSelection = {
  name: "PETROL" | "DIESEL" | "LPG" | "METHANE" | string;
  price: number;
  fuelTank: number;
  fuelPresent: number;
  missingFuel: number;
  fuelInserted: number;
  refuelingComplete: boolean;
  amount: number;
};

const initialState: RefuelingState = {
  refuelingInProgress: false,
  refuelings: {
    name: "PETROL",
    price: 1.897,
    fuelTank: null,
    fuelPresent: null,
    missingFuel: null,
    fuelInserted: 0,
    refuelingComplete: false,
    amount: 0,
  },
  registerData: [],
  tankStatus: [
    { type: "PETROL", fuelPresent: 10000 },
    { type: "DIESEL", fuelPresent: 10000 },
    { type: "LPG", fuelPresent: 10000 },
    { type: "METHANE", fuelPresent: 10000 },
  ],
};

type RefuelingContextValue = RefuelingState & {
  startRefueling: () => void;
  stopRefueling: () => void;
  refuelingCount: (refuelingsData: FuelSelection) => void;
  addRegister: (data: RefuelingData) => void;
};

const RefuelingContext = createContext<RefuelingContextValue | null>(null);

export function useRefuelingContext() {
  const refuelingCtx = useContext(RefuelingContext);

  if (refuelingCtx === null) {
    throw new Error("RefuelingContext is null - that should not be the case!");
  }
  return refuelingCtx;
}

type RefuelingContextProviderProps = {
  children: ReactNode;
};

type StartRefuelingAction = {
  type: "START_REFUELING";
};

type StopRefuelingAction = {
  type: "STOP_REFUELING";
};

type RefuelingCountAction = {
  type: "COUNT_REFUELING";
  payload: FuelSelection;
};

type AddRegisterAction = {
  type: "ADD_REGISTER";
  payload: RefuelingData;
};

type Action =
  | StartRefuelingAction
  | StopRefuelingAction
  | RefuelingCountAction
  | AddRegisterAction;

function refuelingReducer(
  state: RefuelingState,
  action: Action
): RefuelingState {
  if (action.type === "START_REFUELING") {
    return {
      ...state,
      refuelingInProgress: true,
    };
  }
  if (action.type === "STOP_REFUELING") {
    return {
      ...state,
      refuelingInProgress: false,
    };
  }
  if (action.type === "COUNT_REFUELING") {
    return {
      ...state,
      refuelings: {
        name: action.payload.name,
        price: action.payload.price,
        fuelTank: action.payload.fuelTank,
        fuelPresent: action.payload.fuelPresent,
        missingFuel: action.payload.missingFuel,
        fuelInserted: action.payload.fuelInserted,
        refuelingComplete: action.payload.refuelingComplete,
        amount: action.payload.amount,
      },
    };
  }
  if (action.type === "ADD_REGISTER") {
    return {
      ...state,
      refuelingInProgress: false,
      registerData: [
        ...state.registerData,
        {
          plateNumber: action.payload.plateNumber,
          fuel: action.payload.fuel,
          priceLitre: action.payload.priceLitre,
          refuelingLitre: action.payload.refuelingLitre,
          amount: action.payload.amount,
          date: action.payload.date,
        },
      ],
    };
  }
  return state;
}

function RefuelingContextProvider({ children }: RefuelingContextProviderProps) {
  const [refuelingState, dispatch] = useReducer(refuelingReducer, initialState);
  const ctx: RefuelingContextValue = {
    refuelings: refuelingState.refuelings,
    refuelingInProgress: refuelingState.refuelingInProgress,
    registerData: refuelingState.registerData,
    tankStatus: refuelingState.tankStatus,
    startRefueling() {
      dispatch({ type: "START_REFUELING" });
    },
    stopRefueling() {
      dispatch({ type: "STOP_REFUELING" });
    },
    refuelingCount(refuelingsData) {
      dispatch({ type: "COUNT_REFUELING", payload: refuelingsData });
    },
    addRegister(data) {
      dispatch({ type: "ADD_REGISTER", payload: data });
    },
  };
  return (
    <RefuelingContext.Provider value={ctx}>
      {children}
    </RefuelingContext.Provider>
  );
}
export default RefuelingContextProvider;
