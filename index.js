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
    auto_invoke_app = false,
    workdir = '',
    wsl_config = '',
    application_path = '',
}) {
    globalThis.CONFIG_LARADUMPS = {
        host: `http://${host}:${port}`,
        auto_invoke_app: auto_invoke_app,
        workdir,
        wsl_config,
        application_path,
    }
}

globalThis.ds = ds;
globalThis.dsd = dsq;
globalThis._sleep = sleep;

globalThis.CONFIG_LARADUMPS = {
    host: 'http://127.0.0.1:9191',
    auto_invoke_app: false,
    workdir: '/var/www/html',
    wsl_config: 'wsl+Ubuntu/',
    application_path: '',
};

import LaraDumps from "./src/LaraDumps";

export default LaraDumps;

globalThis.LaraDumps = LaraDumps;
