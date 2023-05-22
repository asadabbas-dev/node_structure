import { logger } from '../utilities/helpers/logger.Utility';

const ApplicationLogger = (req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
}

export default ApplicationLogger;