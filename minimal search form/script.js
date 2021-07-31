/**
 * Search Class
 */
class Search {
  /**
   * Constructor
   */
  constructor(element) {
    this._element = element;
    this._input = element.querySelector('.search-input');
    this._cross = element.querySelector('.cross');
    this._opened = false;
    
    this._bindEventListeners();
  }
  
  /**
   * Binds the event listeners
   * 
   * @return void
   */
  _bindEventListeners() {
    // Prevent default focus of input on click
    // We focus it programmatically
    this._input.addEventListener('focus', (e) => {
      if (!this._opened) {
        this._input.blur();    
      }
    });
    
    // Close the search on blur if the input hasn't a value
    this._input.addEventListener('blur', (e) => {
      if (this._opened && this._input.value === '') {
        this._close();    
      }
    });
    
    // Open the search on click
    this._element.addEventListener('click', () => {
      if (!this._opened) {
        this._open();
      }
    });
    
    // Clear out the value and then close the search when clicking on the cross
    // Important is the e.stopPropagation()!
    // Without it the click event would bubble to the parent and execute the click event on it. 
    // => Search stays open because it will be opened immediately after closing.
    // This only happens when it's already opened because we want to open the search if we click on the cross div while the search is closed.
    this._cross.addEventListener('click', (e) => {
      if (this._opened) {
        e.stopPropagation();
        this._clearValue();
        this._close();
      }
    });
  }
  
  /**
   * Opens the search
   * 
   * @return void
   */
  _open() {
    this._element.classList.add('opened');
    this._opened = true;
    
    setTimeout(() => {
      this._input.focus();
    }, 900);
  }
  
  /**
   * Closes the search
   * 
   * @return void
   */
  _close() {
    this._element.classList.remove('opened');
    this._opened = false;
    this._input.blur();
  }
  
  /**
   * Clear the value of the input
   * 
   * @return void
   */
  _clearValue() {
    this._input.value = '';
  }
}

document.querySelectorAll('.search').forEach((element) => {
  new Search(element);
});