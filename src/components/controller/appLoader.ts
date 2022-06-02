import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '1a3ec0930ff941f8b71f8eac24c19b8b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
