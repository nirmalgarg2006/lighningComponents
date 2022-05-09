import { createElement } from 'lwc';
import WireCPR from 'c/wireCPR';
import { CurrentPageReference } from 'lightning/navigation';
 
// Mock realistic data
const mockCurrentPageReference = require('./data/CurrentPageReference.json');
  
describe('c-wire-c-p-r', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
    
  it('renders the current page reference in <pre> tag', () => {
    const element = createElement('c-wire-c-p-r', {
      is: WireCPR
    });

    CurrentPageReference.emit(mockCurrentPageReference);
    document.body.appendChild(element);
      
    // Select element for validation
    const preElement = element.shadowRoot.querySelector('pre');
    expect(preElement).not.toBeNull();
      
    // Emit data from @wire
    
      
    return Promise.resolve().then(() => {
      expect(preElement.textContent).toBe(
        JSON.stringify(mockCurrentPageReference, null, 2)
      );
    });
  });
});