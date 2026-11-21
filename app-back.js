import { App } from '@capacitor/app';

App.addListener('backButton', ({ canGoBack }) => {
    if (typeof window.handleAppBack === 'function') {
        window.handleAppBack();
    } else if (canGoBack) {
        window.history.back();
    } else {
        App.exitApp();
    }
});
