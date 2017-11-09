https://github.com/facebook/react/issues/11496

Run yarn test to see a test fail that should pass

 FAIL  src/App.test.js
  ● should call the callback with {foo: 123, bar: 456}

    expect(received).toEqual(expected)
    
    Expected value to equal:
      {"bar": 456, "foo": 123}
    Received:
      {}
    
    Difference:
    
    - Expected
    + Received
    
    -Object {
    -  "bar": 456,
    -  "foo": 123,
    -}
    +Object {}
      
