import { defineConfig } from 'vite';

// Browser build served via CDN (dist/laradumps.min.js).
// The entry (index.js) attaches ds/dsd/_sleep/LaraDumps to globalThis as a
// side effect, so a self-executing IIFE bundle is all that is needed.
// Bundler/ESM consumers use `main` (index.js) + src/*.ts directly and do not
// touch this output.
export default defineConfig({
    build: {
        target: 'es2015',
        minify: 'oxc',
        emptyOutDir: true,
        lib: {
            entry: 'index.js',
            // Not "LaraDumps": the IIFE wrapper assigns this global to the
            // exports object, which would clobber the real `globalThis.LaraDumps`
            // the entry sets as a side effect. A distinct name avoids the collision.
            name: 'LaraDumpsBundle',
            formats: ['iife'],
        },
        rollupOptions: {
            output: {
                entryFileNames: 'laradumps.min.js',
                exports: 'named',
            },
        },
    },
});
