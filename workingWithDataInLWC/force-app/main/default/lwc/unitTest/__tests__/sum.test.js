import { sum } from "../sum";
import {createElement} from 'lwc';
import UnitTest from 'c/unitTest';
describe('sum()', () =>{
    it('should add 1 and 2 returning 3', ()=>{
        expect(sum(1,2)).toBe(3);
    });
});

describe('c-unit-test', ()=>{
    afterEach(()=>{
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('display unit status with default unit number',()=>{
        const element = createElement('c-unit-test',{
            is : UnitTest
        });

        expect(element.unitNumber).toBe(5);

        document.body.appendChild(element);

        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Unit 5 alive!');
    });

    it('display unit status with updated unit number',()=>{
        const element = createElement('c-unit-tes',{
            is:UnitTest
        });

        document.body.appendChild(element);

        element.unitNumber = 6;

        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).not.toBe('Unit 6 alive!');

        return Promise.resolve().then(()=>{
            expect(div.textContent).toBe('Unit 6 alive!');
        })
    })
})