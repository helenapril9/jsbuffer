import ArrayBufferConverter from '../app';
import { getBuffer } from '../app';


test('toString', () => {  
    const sample = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'       
    let buffer = getBuffer(sample);
    let nArray = new ArrayBufferConverter();
    nArray.load(buffer);        
expect(nArray.toString()).toEqual(sample)});


