import { _LaraDumps } from "./types";

declare module 'laradumps-js' {
    export function ds(...params): _LaraDumps;
    export function dsq(...params): _LaraDumps;
    export default _LaraDumps;
}