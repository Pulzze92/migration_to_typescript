import { ArticlesForData } from '../view/appView';
import AppLoader from './appLoader';

export type CallbackG<T> = (data?: T) => void;

class AppController extends AppLoader {
    getSources(callback: CallbackG<ArticlesForData>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
            
        );
    }

    getNews(e : Event, callback: CallbackG<ArticlesForData>) {
        
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export interface EventNews{
    target: HTMLElement;
    currentTarget: HTMLElement;
}

export default AppController;
