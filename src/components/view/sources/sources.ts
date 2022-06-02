import './sources.css';

export interface Info {
    [key: string]: string;
}

export interface DataSource{
    category: string,
    country: string,
    description: string,
    id: string,
    language: string,
    name: string,
    url: string,
}

class Sources {
    draw(data: Array<DataSource>) {
        const fragment : DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement | null;
         
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
