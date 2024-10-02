import LaraDumps from "./src/LaraDumps";

export function ds(...params) {
    const instance = {...LaraDumps}.generateIds();
    
    params.forEach((param) => instance.dump(param));

    return instance;
};

export function dsq(...params) {
    return ds(...params).die();
};

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default LaraDumps;

globalThis.ds = ds;
globalThis.dsd = dsq;
globalThis._sleep = sleep;
globalThis.LaraDumps = LaraDumps;