package com.management.library.errors;

/**
 * Created by huyvv
 * Date: 21/06/2021
 * Time: 8:41 AM
 * for all issues, contact me: huyvv@vnpt-technology.vn
 **/
public class UnauthorizedException extends BadRequestAlertException {

    public UnauthorizedException(String errorKey) {
        super("You are not allow to perform this action","permission",errorKey);
    }

    public UnauthorizedException(String defaultMessage, String entityName, String errorKey) {
        super(defaultMessage, entityName, errorKey);
    }
}
