(()=> {
  type UserId =  string | number; // uso typesript

  let userId: UserId

  function greeting(userId:UserId) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
   }

   //literal types
   type Sizes =  'S' | 'M' | 'L' | 'XL'
   let shirtSize: Sizes;
   shirtSize = 'M'
   shirtSize = 'L'
   shirtSize = 'XL'
  //  shirtSize = 's'


})();
