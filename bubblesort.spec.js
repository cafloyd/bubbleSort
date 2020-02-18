describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single item', function(){
    expect( bubbleSort([5]) ).toEqual( [5] )
  });

  it('handles multiple items', function(){
    expect( bubbleSort([10, 2, 8, 7, 5]) ).toEqual( [2, 5, 7, 8, 10] );
  });
});
