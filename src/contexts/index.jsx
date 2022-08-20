import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
    useCallback,
    useEffect,
} from "react";

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload
    }
}
// 56  BSC
// 1   Ethereum

const INIT_STATE = {
    Loading: true,
    signer: {},
    provider: {},
    balance: "0",
    isDark: false,
    networkID: 56,
    Network: [],
};


export default function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const updateAll = async () => {
        // supportedNFTs.map((supportedNFT) => {
        //     updateNFTContents(supportedNFT);
        // })
    }

    /* ------------ get data ------------- */

    useEffect(() => {
        updateAll();
    }, [state.signer])



    return (
        <GlobalContext.Provider
            value={useMemo(
                () => [
                    state,
                    {
                        updateAll,
                        dispatch
                    }
                ],
                [state]
            )}
        >
            {children}
        </GlobalContext.Provider>
    );
}