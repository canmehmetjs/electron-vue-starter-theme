{
    // Target 'x64' architecture
    arch: 'x86',

    // Compress app using 'electron/asar'
    asar: true,

    // Directory of the app
    dir: path.join(__dirname, '../'),

    // Set electron app icon
    // File extensions are added based on platform
    //
    // If building for Linux, please read
    // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#icon
    icon: path.join(__dirname, '../build/icons/icon'),

    // Ignore files that would bloat final build size
    ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web))|\.gitkeep/,

    // Save builds to `builds`
    out: path.join(__dirname, '../build'),

    // Overwrite existing builds
    overwrite: true,

    // Environment variable that sets platform
    platform: process.env.BUILD_TARGET || 'all'
}