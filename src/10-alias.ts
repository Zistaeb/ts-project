(() => {
  type UserID = string | number;      //Alias
  let userId: UserID;

  // Literal types
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes ;
  shirtSize = "M";
  shirtSize = "L";
  shirtSize = "XL";

  function greeting(userId: UserID, shirtSize: Sizes ) {
    if (typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting(73, "M");
  greeting("Hola", "XL");


})();
