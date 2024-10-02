import LaraDumps from "./src/LaraDumps";

export function ds(...params) {
    const instance = {...LaraDumps}.generateIds();
    
    params.forEach((param) => instance.dump(param));

    return instance;
};

export function dsq(...params) {
    return ds(...params).die();
};

export default LaraDumps;

globalThis.ds = ds;
globalThis.dsd = dsq;
globalThis.LaraDumps = LaraDumps;