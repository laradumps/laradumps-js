import LaraDumps, { _LaraDumps } from "./src/LaraDumps";

export function ds(...params) {
    const instance = LaraDumps.generateIds();
    
    params.forEach((param) => {
        let type = typeof(param);

        if(type === "object" && param.prototype === undefined) {
            instance.json(param);
            return;
        } else if (type === "object") {
            console.info("Laradumps: Using JSON object as parameter. Please use `ds.json` if you want to send a JSON object.");
            return;
        }

        instance.send("dump", {
            "dump": {
                "dump": param,
                "original_content": param,
                "variable_type": type,
            }
        });
    });

    return instance;
};

window.ds = ds;