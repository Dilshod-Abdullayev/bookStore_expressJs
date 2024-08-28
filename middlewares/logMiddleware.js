const logMiddleware = (req, res, next) => {
    console.log(`${req.method} so'rovi ${req.url} manzilga kelib tushdi`);
    next();
};

module.exports = logMiddleware;