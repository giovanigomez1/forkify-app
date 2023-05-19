import View from './View';
import icons from 'url:../../img/icons.svg' // Parcel 2
import previewView from './previewView.js';



class BookmarksView extends View{
  _parentElement = document.querySelector('.bookmarks__list')
  _errorMessage = 'No bookmarks yer. Find a nice recipe and bookmark it ;)'
  _message = ''

  addHanlerRender(handler) {
    window.addEventListener('load', handler)
  }


  _generateMarkup(){
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('')
  }
}

export default new BookmarksView()