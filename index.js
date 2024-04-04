// The returnsANamedFunction function should:

// take no arguments
// return a named function


function  receivesAFunction(chai) {
    const spy = chai;


    chai()
    return function() {
    console.log(`${spy}.to.have.been.called`)
}}

 function returnsANamedFunction (){
    return function  testing (){

    }

 }

 function returnsAnAnonymousFunction(){
    return function (){
        
    }


 }
// describe("returnsANamedFunction()", () => {
//     var fn;
  
//     before(() => {
//       fn = returnsANamedFunction();
//     });
  
//     it("returns a function", () => {
//       expect(fn).to.be.a("function");
//     });
  
//     it("returns a named function", () => {
//       expect(fn.name).not.to.eql("");
//     });
//   });
  
  