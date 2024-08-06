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

export type SelectorActive = {
  active: boolean;
  amountSelected: number;
};

export type TankStatus = {
  type: "PETROL" | "DIESEL" | "LPG" | "METHANE" | string;
  fuelPresent: number;
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

type RefuelingState = {
  refuelingInProgress: boolean;
  selectorIsActive: SelectorActive;
  refuelings: FuelSelection;
  registerData: RefuelingData[];
  tankStatus: TankStatus[];
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
  selectorIsActive: {
    active: false,
    amountSelected: 0,
  },
  registerData: [],
  tankStatus: [
    { type: "PETROL", fuelPresent: 5000 },
    { type: "DIESEL", fuelPresent: 5000 },
    { type: "LPG", fuelPresent: 5000 },
    { type: "METHANE", fuelPresent: 5000 },
  ],
};

type RefuelingContextValue = RefuelingState & {
  startRefueling: () => void;
  stopRefueling: () => void;
  selectorActive: (selectorState: SelectorActive) => void;
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

type SelectorActiveAction = {
  type: "SELECTOR_ACTIVATION";
  payload: SelectorActive;
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
  | SelectorActiveAction
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
  if (action.type === "SELECTOR_ACTIVATION") {
    return {
      ...state,
      selectorIsActive: {
        active: action.payload.active,
        amountSelected: action.payload.amountSelected,
      },
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
    selectorIsActive: refuelingState.selectorIsActive,
    refuelingInProgress: refuelingState.refuelingInProgress,
    registerData: refuelingState.registerData,
    tankStatus: refuelingState.tankStatus,
    startRefueling() {
      dispatch({ type: "START_REFUELING" });
    },
    stopRefueling() {
      dispatch({ type: "STOP_REFUELING" });
    },
    selectorActive(selectorState) {
      dispatch({ type: "SELECTOR_ACTIVATION", payload: selectorState });
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
