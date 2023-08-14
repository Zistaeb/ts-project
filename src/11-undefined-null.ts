(() => {
  let myNumber: number | null = null;
  let myString: string | undefined = undefined;
  let myNull = null;                            //Tipo de dato: any
  let myUndefined = undefined;                  //Tipo de dato: any
  let isNull: null = null;
  let isUndefined: undefined = undefined;

  myNumber = 12;
  myString = "hola";

  function hi(name: string | null) {
    let hello = "Hola";
    if(name){
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hi2(name: string | null) {
    let hello = "Hola";

      hello += name?.toLowerCase() || 'nobody';        //Optional chaining(?)

    console.log(hello);
  }

  hi("Nicolas");
  hi(null);

  hi2("Nicolas");
  hi2(null);
})();
