Package.describe({
    name: 'sunset:sunset',
    version: '1.0.0',
    summary: 'A minimalist CSS grid system framework.',
    git: 'https://github.com/Rukhsar/sunset-css.git',
    documentation: 'readme.md'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');
    api.addFiles([
        'dist/sunset.css'
    ], 'client');
});
