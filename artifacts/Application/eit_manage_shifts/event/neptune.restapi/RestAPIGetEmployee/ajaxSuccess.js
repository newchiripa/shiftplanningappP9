const today = new Date();
var activities = modelModelArray.getData();
const currentDayOfWeek  = today.getDay();

// Set the starting date of this week to Monday
const daysUntilMonday = (currentDayOfWeek === 0) ? 6 : currentDayOfWeek - 1;
const mondayOfThisWeek = new Date(today);
mondayOfThisWeek.setDate(today.getDate() - daysUntilMonday);
mondayOfThisWeek.setHours(0, 0, 0, 0); 
// Calculate the Sunday date of this week
const sundayOfThisWeek = new Date(mondayOfThisWeek);
sundayOfThisWeek.setDate(mondayOfThisWeek.getDate() + 6);
sundayOfThisWeek.setHours(23, 59, 59, 999);


const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let weeklyHours = [];  // This array will store daily working hours for the whole week

weekDays.forEach((day, index) => {
    const dayOfThisWeek = new Date(mondayOfThisWeek);
    dayOfThisWeek.setDate(mondayOfThisWeek.getDate() + index);
    
    const activitiesForDay = activities.filter(activity => {
        const activityTimeStart = new Date(activity.Time_start);
        return activityTimeStart.toDateString() === dayOfThisWeek.toDateString();
    });

    let totalWorkDuration = 0;
    activitiesForDay.forEach(activity => {
        const timeStart = new Date(activity.Time_start);
        const timeEnd = new Date(activity.Time_end);
        const durationInMillis = timeEnd - timeStart;
        totalWorkDuration += durationInMillis;
    });

    const totalWorkHours = Math.floor(totalWorkDuration / (1000 * 60 * 60));
    const totalWorkMinutes = Math.floor((totalWorkDuration % (1000 * 60 * 60)) / (1000 * 60));

    weeklyHours.push({ day: day, hours: totalWorkHours, minutes: totalWorkMinutes });
    console.log(day + " (" + dayOfThisWeek.toLocaleDateString() + ") total working time:", totalWorkHours, "hours", totalWorkMinutes, "minutes");
});

// Calculate the total duration of this week
let totalWeekWorkDuration = 0;
activities.forEach(activity => {
    const activityDate = new Date(activity.Time_start);
    if (activityDate >= mondayOfThisWeek && activityDate <= sundayOfThisWeek) {
        const timeStart = new Date(activity.Time_start);
        const timeEnd = new Date(activity.Time_end);
        const durationInMillis = timeEnd - timeStart;
        totalWeekWorkDuration += durationInMillis;
    }
});

const totalWeekWorkHours = Math.floor(totalWeekWorkDuration / (1000 * 60 * 60));
const totalWeekWorkMinutes = Math.floor((totalWeekWorkDuration % (1000 * 60 * 60)) / (1000 * 60));
console.log("Total working time this week:", totalWeekWorkHours, "hours", totalWeekWorkMinutes, "minutes");
TitleTotalWorkedHours.setText("Total working time this week:" + " " + totalWeekWorkHours + " " + "hours" + " " + totalWeekWorkMinutes + " " + "minutes");

// Print calculated hours for the week
console.log("\nCalculated working hours for each day of the week:");
weeklyHours.forEach(item => {
    console.log(item.day + ":", item.hours, "hours", item.minutes, "minutes");
});

calculateWeeklyHours(oSinglePlanningCalendar.getStartDate());
App.setBusy(false);