export interface _Label {
    label(label: string): _LaraDumps;
}

export interface _Json {
    json(json: any): _LaraDumps
    isValidJson(json: any): boolean
    sendJson(json: any): _LaraDumps
};

export type _Validate = {
    isJson(): _LaraDumps;
    validate(type: string, content: string, caseSensitive: boolean, wholeWord: boolean): _LaraDumps;
    contains(content: string, caseSensitive: boolean, wholeWord: boolean): _LaraDumps;
} & _Validate

export interface _Table {
    table(values: any[], label: string): _LaraDumps;
    tableV2(values: any[], label: string): _LaraDumps;
}

export interface _Colors {
    color(color: string): _LaraDumps;
    info(): _LaraDumps;
    success(): _LaraDumps;
    warning(): _LaraDumps;
    danger(): _LaraDumps;
}

export interface _TimeTrack {
    time(label: string): _LaraDumps;
    stopTime(label: string): _LaraDumps;
}

export interface _Screen {
    s(screenName: string): _LaraDumps;
    toScreen(screenName: string, screenRaisenIn: number): _LaraDumps;
    toScreenWindow(screenName: string, screenRaisenIn: number): _LaraDumps
}

export type _Benchmark = {
    benchmark(...params): _LaraDumps;
    sendMarks(marks: any[]): _LaraDumps;
} & _TimeTrack;

export type _LaraDumps = {
    instanceId: string | null;
    requestId: string | null;

    server: string;
    params: any[];

    getStackTrace(): object;
    makeUUID(): string;

    die(): void;
    clear(): _LaraDumps;
    generateIds(): _LaraDumps;
    json(json: any): _LaraDumps;
    dump(param: any): _LaraDumps;
    label(label: string): _LaraDumps;
    send(type: string, data: object): _LaraDumps;
} & _Benchmark & _Colors & _Screen & _Label & _Table & _Validate;