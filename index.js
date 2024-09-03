import LaraDumps, { _LaraDumps } from "./src/LaraDumps";

globalThis.ds = (...params) => {
    const instance = LaraDumps.generateIds();
    
    params.forEach((param) => instance.dump(param));

    return instance;
};

globalThis.dsd = (...params) => ds(...params).die();