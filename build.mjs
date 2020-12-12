
import * as rollup from 'rollup';
import rollupConfig from './rollup.config';

// see below for details on the options
const inputOptions = {
    input: rollupConfig.input,
    plugins: rollupConfig.plugins
};

const outputOptions = {
    ...rollupConfig.output
};

// Initialize watcher.
// const watcher = chokidar.watch(['src/**'], {
//     //ignored: /(^|[\/\\])\../, // ignore dotfiles
//     persistent: true
// });

// let ready = false;
// watcher.on('ready', () => {
//     ready = true;
//     rebuild('ready', '');
// });
// watcher.on('change', (path) => {
//     rebuild('change', path);
// });
// watcher.on('unlink', (path) => {
//     rebuild('unlink', path)
// });
// watcher.on('add', (path) => {
//     if (ready) rebuild('add', path);
// });

// const debounceBuild = debounce(500, false, rebuild);

async function rebuild(event, path) {
    console.log('================== rebuild START ');
    console.log(`event: ${event} path: ${path}`);

    // create a bundle
    const bundle = await rollup.rollup(inputOptions);
    console.log(bundle.watchFiles);
    await bundle.write(outputOptions);
    console.log('================== rebuild STOP ');
}

rebuild();

const watchOptions = {
    ...inputOptions,
    output: [outputOptions],
    watch: {
        buildDelay: 200,
        //   chokidar,
        //   clearScreen,
        //   skipWrite,
        //   exclude,
        //   include
    }
};

const rollupWatcher = rollup.watch(watchOptions);

rollupWatcher.on('event', event => {
    console.log('rollupwatcher ');
    console.log(event);
    // event.code can be one of:
    //   START        — the watcher is (re)starting
    //   BUNDLE_START — building an individual bundle
    //   BUNDLE_END   — finished building a bundle
    //   END          — finished building all bundles
    //   ERROR        — encountered an error while bundling
});

// // stop watching
// rollupWatcher.close();

