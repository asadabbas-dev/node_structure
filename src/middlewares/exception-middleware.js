import messages from "../utilities/helpers/customMessage.Utility.js";
import logger from "../utilities/helpers/logger.Utility.js";

const ExceptionHandler = (err, req, res, next) => {
    const status = res.statusCode === 200 ? 500 : res.statusCode;
    logger.error(`${req.method} ${req.url} the body is:  ${req.body} and the params are: ${req.params} and the error stack is ${err.stack} `);

    console.error(err);

    res.status(status).json({
        message: err.message,
        errors: {},
        stack: process.env.NODE_ENV === "production" ? messages.sys.weirdCase : err.stack,
    });
};

export default ExceptionHandler;