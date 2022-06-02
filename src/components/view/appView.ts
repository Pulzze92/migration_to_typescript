import News, { DataContent, iData } from './news/news';
import Sources, {DataSource} from './sources/sources';

interface Articles {
    status?: string, 
    totalResults?: number,
    articles: [
        {
        source: {
            id?: string,
            name?: string
        },
        author?: string,
        content?: string,
        description?: string,
        publishedAt?: string,
        title?: string,
        url?: string,
        urlToImage?: string,
    }]       
}

interface Source {
        id?: string,
        name?: string
}

export interface NewData {
    articles: Articles,
    sources?: Source,
    status?: string, 
    totalResults?: number
}

export interface ArticlesForData {
    articles: Array<DataContent>,
    sources: Array<DataSource>,
    status: string,
    totalResults: number,
    view: object
}

export class AppView<NewData> {
    news: News;
    sources: Sources;
    

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesForData | undefined ) : void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ArticlesForData | undefined){
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
