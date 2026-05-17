export default {
    root: 'src/',
    publicDir: '../static/',
    base: '/Solar-System-3D/',
    server:
    {
        host: true, 
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) 
    },
    build:
    {
        outDir: '../dist', 
        emptyOutDir: true, 
        sourcemap: true 
    },
}
