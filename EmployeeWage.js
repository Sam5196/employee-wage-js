console.log("Welcome to Employee Wage Program")
//UC1--> Employee is Present or not
{
    const IS_PRESENT=1;
    let empcheck=Math.floor(Math.random()*2);
    if(empcheck==IS_PRESENT){
        console.log("Employee is Present");
    }else{
        console.log("Employee is Absent");
    }
}
//UC2-->Calculating Employee Wage
{
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    let empHr=0;
    empCheck=Math.floor(Math.random()*3);
    switch (empCheck) {
        case IS_PART_TIME:
            empHr=PART_TIME_HOURS;            
            break;
        case IS_FULL_TIME:
            empHr=FULL_TIME_HOURS;
            break
        default:
            empHr=0;
            break;
    }
    let empWage=empHr*WAGE_PER_HOUR;
    console.log(" UC2-->Employee Wage is :"+empWage);
}