import vue from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript'
import copy from "rollup-plugin-copy";

import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from '@rollup/plugin-commonjs';
//import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/main.ts',
    output: {
        format: 'iife',
        file: 'dist/bundle.js'
    },
    plugins: [
        copy({
            targets: [
                { src: 'src/index.html', dest: 'dist' },
                //{ src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
                //{ src: 'assets/images/**/*', dest: 'dist/public/images' }
            ]
        }),
        vue(),
        typescript(),
        replace({ 'process.env.NODE_ENV': JSON.stringify('') }),
        resolve(),
        //resolve({ extensions: ['.js', '.vue'], browser: true, preferBuiltins: true }),
        commonjs(),
    ]
}


/*

    vue(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(environment) }),
    nodeResolve({ extensions: ['.js', '.vue'], browser: true, preferBuiltins: true }),
    commonjs(),
    buble({ target: { chrome: 70 } }),
    minify && terser.terser({ output: { comments: /^!/u } }),
*/