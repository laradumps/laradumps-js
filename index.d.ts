import { _LaraDumps } from "./types";

declare module 'laradumps-js' {
    export function configure(config: { port?: number; host?: string; autoInvoke?: boolean }): void;
    export function ds(...params): _LaraDumps;
    export function dsq(...params): _LaraDumps;
    export default _LaraDumps;
}