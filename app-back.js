import { App } from '@capacitor/app';

App.addListener('backButton', () => {
    if (typeof window.handleAppBack === 'function') {
        const handled = window.handleAppBack();

        if (!handled) {
            App.exitApp();
        }
    } else {
        App.exitApp();
    }
});
