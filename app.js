"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const v1_1 = require("./apps/routes/v1");
const configs_1 = require("./apps/configs");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use((0, cookie_parser_1.default)());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Authorization, Content-Type');
    next();
});
app.use('/api/v1/public/products-images', express_1.default.static('public/products-images'));
app.use('/.well-known/pki-validation/', express_1.default.static('/files/.well-known/pki-validation/'));
app.get('/.well-known/pki-validation/:file', (req, res) => {
    const { file } = req.params;
    const filePath = path_1.default.join(__dirname, '..', 'files', '.well-known', 'pki-validation', file);
    // Check if the file exists
    if (fs_1.default.existsSync(filePath)) {
        res.download(filePath, (err) => {
            if (err) {
                console.error('Error downloading file:', err);
                res.status(500).send('Error downloading file');
            }
        });
    }
    else {
        console.error('File not found:', filePath);
        res.status(404).send('File not found');
    }
});
app.routes = (0, v1_1.appRouterV1)(app);
app.listen(configs_1.CONFIG.port, () => {
    console.log(`listening on ${configs_1.CONFIG.appUrl}`);
});
exports.default = app;
