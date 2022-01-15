import LoginPage from  '../pageobjects/login.page';
import ExPage from '../pageobjects/ex.page';

describe('Vortic Art login as Artist', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('janjuanumair@gmail.com', 'slack123!');
        await expect(ExPage.firstExTitle).toBeExisting();
        await expect(ExPage.firstExTitle).toHaveTextContaining(
            'Suite Rivolta. Una propuesta estética para la acción');
    });
});

