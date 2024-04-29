(()=>{
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'ass';

  function hi(name: string | null){
    let hello: string = 'hola ';
    if(name) {
      hello += 'name';
    } else {
      hello += 'nobody';
    }
  }
  hi('luis');

  function hi2(name: string | null){
    let hello: string = 'hola ';
    hello += name?.toLowerCase() || 'noboby';
    console.log(hello)
  }
  hi2('luis');
})()
