import vue from 'rollup-plugin-vue';
import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from '@rollup/plugin-commonjs';
import html2 from 'rollup-plugin-html2';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import scss from 'rollup-plugin-scss';
import postcss from "postcss";
import autoprefixer from 'autoprefixer';

export default [
    {
        input: {
            main: 'src/main.ts',
        },
        output: {
            dir: 'dist',
            entryFileNames: '[name]-[hash].js',
            format: 'es',
            //file: 'dist/bundle.js'
        },
        watch: {
            buildDelay: 200,
            //include: 'src/**'
        },
        plugins: [
            // copy({
            //     //watch: 'src/index.html',
            //     targets: [
            //         { src: 'src/index.html', dest: 'dist' },
            //         //{ src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
            //         //{ src: 'assets/images/**/*', dest: 'dist/public/images' }
            //     ]
            // }),
            //scss({ output: 'dist/bundle.css'}),
            scss({
                output: 'dist/bundle.css',
                processor: css => postcss([autoprefixer({ grid: true})]),
            }),
            vue(),
            typescript(),
            replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
            resolve(),
            //resolve({ extensions: ['.js', '.vue'], browser: true, preferBuiltins: true }),
            commonjs(),
            html2({
                template: 'src/index.html',
                modules: true
            }),
            livereload({
                watch: 'dist',
                //verbose: false, // Disable console output
            }),
            serve({ contentBase: 'dist' }), // index.html should be in root of project
        ]
    },
]