

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ExPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstExTitle() {
        return $('h1');
    }
}

export default new ExPage();
