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

export function configure({
    port = 9191,
    host = '127.0.0.1',
    autoInvoke = false,
}) {
    let server = `http://${host}:${port}`;

    CONFIG_LARADUMPS.host = server;
    CONFIG_LARADUMPS.autoInvokeApp = autoInvoke;
}

globalThis.ds = ds;
globalThis.dsd = dsq;
globalThis._sleep = sleep;

globalThis.CONFIG_LARADUMPS = {
    host: 'http://127.0.0.1:9191',
    autoInvokeApp: false
};

import LaraDumps from "./src/LaraDumps";
export default LaraDumps;

globalThis.LaraDumps = LaraDumps;
