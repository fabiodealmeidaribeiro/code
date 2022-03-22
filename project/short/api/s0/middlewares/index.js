const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            error : 'No token provided!',
        });
    };
    const parts = authHeader.split(' ');
    if (!parts['length'] === 2) {
        return res.status(401).send({
            error : 'Request failed!',
        });
    };
    const [ scheme, token ] = parts;
    if (!/Bearer/i.test(scheme)) {
        return res.status(401).send({
            error : 'Unformatted token!',
        });
    }
    jwt.verify(token, authConfig['secret'], (error, decoded) => {
        if (error) {
            return res.status(400).send({
                error : 'Invalid token!',
            });
        };
        req['userEmail'] = decoded['email'];
        return next();
    });
};
