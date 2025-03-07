    // ASSIGNMENT # 01    " adding number at the end of an array"
    numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.push(10);
    console.log(numbers);



    // ASSIGNMENT # 02    "removing last number from an array"
    numbers.pop();
    console.log(numbers);



    // ASSIGNMENT # 03    "create an other array"
    Cars = ['Honda','BMW','Audi','Ferrari'];
    console.log(Cars);
    //adding element at the begining of the array
    Cars.unshift('Civic');
    console.log(Cars);



    // ASSIGNMENT # 04     "create an other array"
    Animals = ['Dog','Lion','Cat','Tiger','Fox'];
    console.log(Animals);
    // finding index of Cat
    var index = Animals.indexOf('Cat');
    console.log(index);



    // ASSIGNMENT # 05     "create another array"
    Vegetables = ['Potato','Tomato','Onian','Chilli'];
    console.log(Vegetables);
    // "removing the frist element from the array"
    Vegetables.shift();
    console.log(Vegetables);




    // ASSIGNMENT # 06      "create a new array"
    Colours = ['Black','Yellow','White','Red','Purple'];
    console.log(Colours);
    // slice the portion of an array from index 1 to 3
    slicedColours = Colours.slice(1,3);
    console.log(slicedColours);




    // ASSIGNMENT # 07      "adding string using splice" 
    Colours.splice(4,0,'Blue');
    console.log(Colours);
    // "create another  array" 
    numbers = [10,20,30,40,50];
    console.log(numbers);



    // ASSIGNMENT # 08        "removing two elements from the array" 
    numbers.splice(1,2);
    console.log(numbers);




    // ASSIGNMENT # 09        "replacing the elements" 
    numbers[3] = 80;
    console.log(numbers);




    // ASSIGNMENT # 10      "using slice method to get first 3 elements of an array" 
    slicednumbers = numbers.slice(0,3);
    console.log(slicednumbers);