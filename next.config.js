const path = require('path');

module.exports = {
    cssModules: true,
    env: {
        customKey: "my-value",
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
