import { Response, NextFunction } from 'express';

const validate =
  (schema: any) => (req: any, res: Response, next: NextFunction) => {
    let errorResult: any;
    const properties = Object.keys(schema) || [];
    const hasError = properties.some((pro) => {
      const { error } = schema[pro].validate(req[pro], schema);
      errorResult = error;
      const valid = error == null;
      return !valid;
    });
    if (hasError) {
      const { details } = errorResult;
      const message = details.map((i: any) => i.message).join(',');
      next({ message, statusCode: 422 });
    } else {
      next();
    }
  };

export default validate;
