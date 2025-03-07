    // ASSIGMENT # 01    "Create and access an Array"
    programmingLanguages = [ "JavaScript",  "Python", "Java", "C++"];
    console.log(programmingLanguages[1]);


    // ASSIGMENT # 02    "Add elements to the End of an Array"
    programmingLanguages = [ "JavaScript",  "Python", "Java", "C++"];
    programmingLanguages.push("Ruby", "Go");
    console.log(programmingLanguages);


    // ASSIGMENT # 03    "Remove the last elements of an Array"
    programmingLanguages = [ "JavaScript",  "Python", "Java", "C++"];
    programmingLanguages.pop();
    console.log(programmingLanguages);


    // ASSIGMENT # 04    "Add elements to the beginning of an Array"
    programmingLanguages = [ "JavaScript",  "Python", "Java", "C++"];
    programmingLanguages.unshift("TypeScript", "Swift");
    console.log(programmingLanguages);


    // ASSIGMENT # 05    "Remove the first elements of an Array"
    programmingLanguages.shift();
    console.log(programmingLanguages, [0]);


    // ASSIGMENT # 06    "Find the index of an Element"
    var index = programmingLanguages.indexOf("Java");
    console.log(index);


    // ASSIGMENT # 07    "Check if an Element is Present in an Array"
    programmingLanguages = [ "JavaScript",  "Python", "Java", "C++"];
    console.log(programmingLanguages.length);


    // ASSIGMENT # 08    "Modify an Array Element"
    programmingLanguages = [ "JavaScript",  "Python", "Java", "C++"];
    programmingLanguages.splice(2, 1, "Rust");
    console.log(programmingLanguages);

    // ASSIGMENT # 09    "Combine Arrays"
    var webTechnologies = [ "HTML", "CSS", "React"];
    techStack = programmingLanguages.concat(webTechnologies);
    console.log(techStack);

    // ASSIGMENT # 10    "Remove elements from the Middle of an Array"
    var techStack = [ "JavaScript",  "Python", "Java", "C++", "HTML", "CSS", "React"];
    techStack.splice(4, 5,);
    console.log(techStack);

    // BONUS ASSIGMENT # 11    "Reverse an Array"
    techStack = [ "JavaScript",  "Python", "Java", "C++", "HTML", "CSS", "React"];
    techStack.reverse();
    console.log(techStack);