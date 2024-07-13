import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as assert from '@helpers/asserts';
import * as user from '@tests/data/login.data';
import * as docs from '@tests/data/response.data';

describe('Jago Login Test', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('Successfull login with valid email and password', () => {
    element.clearAndFillField(loginPage.emailField, user.VALID_LOGIN.email);
    element.clearAndFillField(loginPage.passwordField, user.VALID_LOGIN.password);
    element.click(loginPage.signinBtn);

    assert.shouldContainText(loginPage.popupTextUp, docs.SUCCESS_LOGIN.title);
    assert.shouldContainText(loginPage.popupTextDown, docs.SUCCESS_LOGIN.desc);
    });

it('Failed login with invalid email and password', () => {
    element.clearAndFillField(loginPage.emailField, user.INVALID_EMAIL.email);
    element.clearAndFillField(loginPage.passwordField, user.INVALID_EMAIL.password);
    element.click(loginPage.signinBtn);

    assert.shouldContainText(loginPage.popupTextUp, docs.FAILED_LOGIN.title);
    assert.shouldContainText(loginPage.popupTextDown, docs.FAILED_LOGIN.desc);
});
})