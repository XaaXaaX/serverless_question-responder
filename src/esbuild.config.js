const handlerPath = "./Handlers";
const bundledPath = "../build";
require('esbuild').build({
    entryPoints: [
        `${handlerPath}/Api/Connection/index.ts`,
        `${handlerPath}/Api/Deconnection/index.ts`,
        `${handlerPath}/Process/DetectLanguage/index.ts`,
        `${handlerPath}/Process/Ask/index.ts`
    ],
    entryNames: '[dir]/[name]',
    outbase:'.',
    external: ["aws-sdk"],
    bundle: true,
    minify: process.env.NODE_ENV === "dev" ? false : true,
    sourcemap: false,
    outdir: `${bundledPath}`,
    platform: 'node',
    write: true    
}).catch(() => process.exit());
