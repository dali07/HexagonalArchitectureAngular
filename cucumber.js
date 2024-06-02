export default {
    parallel: 2,
    requireModule: ['ts-node/register'],
    paths: ['src/app/tests/**/*.feature'],
    import: ['src/app/tests/**/*steps.ts'],
    format: ['summary'],
    backtrace: true
}