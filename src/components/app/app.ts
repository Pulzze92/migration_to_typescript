import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import News from '../view/news/news';
import Sources from '../view/sources/sources';
import {NewData} from '../view/appView';
import EventNews from '../controller/controller';
import {ArticlesForData} from '../view/appView';


class App {
    controller: AppController;
    view: AppView<ArticlesForData>;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLElement;
        sources.addEventListener('click', (e: Event) => this.controller.getNews(e, (data?: ArticlesForData) => this.view.drawNews(data)));
        
        this.controller.getSources((data: ArticlesForData) => this.view.drawSources(data));
    }
}

export default App;
