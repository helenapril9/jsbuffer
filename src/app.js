export default class ArrayBufferConverter {    
    load(buffer){
        this.buffer = buffer;        
    }
    toString(){
        const bufferView = new Uint16Array(this.buffer);        
        let str = String.fromCharCode(...bufferView);        
        return str;
        }
    }
    
export function getBuffer(data) {    
    return (input => {
      const buffer = new ArrayBuffer(input.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  

  

