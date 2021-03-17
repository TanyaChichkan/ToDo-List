export class MarkUpCreator{
    static createListElement(){
        let newListElement = document.createElement('ul');
        newListElement.classList.add('list');

        return newListElement;
    }
}