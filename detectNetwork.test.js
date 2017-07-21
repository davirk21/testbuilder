
/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal("Diner's Club");
  });
 
  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901234').should.equal("Diner's Club");
  });

  // it('has a prefix of 38 and a length of 14', function() {
 
  //   if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
  //     throw new Error('Test failed');
  //   }
  // });

  // it('has a prefix of 39 and a length of 14', function() {
  //   if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
  //     throw new Error('Test failed');
  //   }
 
  //  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal("American Express");
  });
 
  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal("American Express");
  });

  // it('has a prefix of 34 and a length of 15', function() {
  //   assert(detectNetwork('343456789012345') === 'American Express');
  // });

  // it('has a prefix of 37 and a length of 15', function() {
  //   assert(detectNetwork('373456789012345') === 'American Express');
  // });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
  var should = chai.should();
  
  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal("Visa");
  });
 
  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal("Visa");
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal("Visa");
  });
 

  // it('has a prefix of 4 and a length of 13', function() {
  //   assert(detectNetwork('4123456789012') === 'Visa');
  // });

  // it('has a prefix of 4 and a length of 16', function() {
  //   assert(detectNetwork('4123456789012345') === 'Visa');
  // });

  // it('has a prefix of 4 and a length of 19', function() {
  //   assert(detectNetwork('4123456789012345678') === 'Visa');
  // });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

   it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal("MasterCard");
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal("MasterCard");
  });

   it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal("MasterCard");
  });
 
 
 
 
  // it("has a prefix of 51 and a length of 16", function() {
  //   expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  // });
 
  // it("has a prefix of 52 and a length of 16", function() {
  //   expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  // });
 
  // it("has a prefix of 53 and a length of 16", function() {
  //   expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  // });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal("MasterCard");
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal("MasterCard");
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork("6011625489632456").should.equal("Discover");
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork("6011214563896457624").should.equal("Discover");
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix + "5465465174896").should.equal("Discover");
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix + "1234567891234567").should.equal("Discover");
      });
    })(prefix)
  }

   it('has a prefix of 65 and a length of 16',function(){
    detectNetwork("6512345678912345").should.equal("Discover");
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork("6512345678912345678").should.equal("Discover");
  });
});

describe('Maestro', function() {



  for(var strLength = 12; strLength <= 19; strLength++){
    var str = "";
    //console.log("stringlength"+strLength);
    for(var i = 0 ; i < strLength - 4 ; i++){
       str += 1;
    }
    str;
    (function(strLength, str){

      it('has a prefix of 5018 and a length of '+ strLength.toString(),function(){
      detectNetwork("5018" + str).should.equal("Maestro");

      //console.log("str"+str+"length "+strLength);
    });

      it('has a prefix of 5020 and a length of '+ strLength.toString(),function(){
      detectNetwork("5020" + str).should.equal("Maestro");
    });

      it('has a prefix of 5038 and a length of '+ strLength.toString(),function(){
      detectNetwork("5038" + str).should.equal("Maestro");
    });

      it('has a prefix of 6304 and a length of '+ strLength.toString(),function(){
      detectNetwork("6304" + str).should.equal("Maestro");
    });
    })(strLength, str)
  }
});

describe('China UnionPay', function(){

  var should = chai.should();
  
  var chinaUnionArr = [];
  for(var i = 622126; i <= 622925; i++){

    chinaUnionArr.push(i);
  }

  chinaUnionArr.push(624, 625, 626, 6282, 6283, 6284, 6285, 6286, 6287, 6288);

  var cULength = [16,17,18,19];

  for( var i = 0 ; i < chinaUnionArr.length; i++){ // itter through all possible prefix

    var prefix = chinaUnionArr[i].toString();

      for(var k = 16; k <= 19; k++){  //itters through the length of car number
        
        var str = "1".repeat(k - prefix.length);  // add a so many digits based on (length - prefix)
       
        (function(prefix , k, str){
          //console.log("strtotal" + prefix + str  + "length"+ k);

             it('has a prefix of '+ prefix + ' and a length of '+ k, function(){
          detectNetwork(prefix + str).should.equal("China UnionPay");
          
          });

        })( prefix, k, str)
      }
  }
});




describe('Switch',function(){

  switchDigits = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  for(var i = 0; i < switchDigits.length; i++){

    var prefix = switchDigits[i].toString();

    var switchLength = [16,18,19];

    for( var j = 0; j < switchLength.length; j++){

      if(switchLength[j] === 17){
        continue;
      }

      var str = "1".repeat(switchLength[i] - prefix.length);
      console.log("strtotal" + prefix + str  + "length"+ switchLength[i]);

      (function(prefix, switchLength , str){

        //console.log("strtotal" + prefix + str  + "length"+ switchLength[i]);

        it('has a prefix of '+ prefix + ' and a length of '+ switchLength[i], function(){
          detectNetwork(prefix + str).should.equal("Switch");
          
          });

      })(prefix, switchLength , str)
      }
    }
  }

});
 