function categorizeStudentsByGrade(students) {
    let gradeObj = {A: [], B: [], C: []};
    students.forEach(element => {
        if(element.score >=90){
            gradeObj.A.push(element.name)
        } else if(element.score >=80){
            gradeObj.B.push(element.name)
        }else{
            gradeObj.C.push(element.name);
        }
        
    });
    
    return gradeObj;
}

console.log(categorizeStudentsByGrade([
    {name: 'Alice', score: 95},
    {name: 'Bob', score: 85},
    {name: 'Charlie', score: 75}]));