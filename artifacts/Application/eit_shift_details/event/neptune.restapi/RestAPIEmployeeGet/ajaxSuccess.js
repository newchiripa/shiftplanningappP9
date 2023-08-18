var jsonData = modelModelArray.getData();
var peopleArray = [];
var currentDate = new Date();
var startOfDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    7,
    0,
    0
);
oPlanningCalendar.setStartDate(startOfDay);
jsonData.forEach(function (personData) {
    var person = {
        Picture: personData.Picture,
        Name: personData.Name + " " + personData.Surname,
        Role: personData.Role,
        Days_not_working: personData.Days_not_working,
        Days_working: personData.Days_working,
        Uniqe_id: personData.Uniqe_id, // Adding the missing Uniqe_id
    };
    peopleArray.push(person);
});

var allPromises = peopleArray.map(function (person) {
    var options = {
        parameters: {
            where: JSON.stringify({ 
             "store_id" :txtSimpleFormStoreName.getText()}),
        },
    };

    return apiRestAPIShifts(options)
        .then(function (appointments) {
            person.appointments = appointments.map(function (appointment) {
                return {
                    Time_start: new Date(appointment.Time_start),
                    Time_end: new Date(appointment.Time_end),
                    title: appointment.store_id,
                    type: appointment.type,
                    tentative: appointment.tentative,
                };
            });
        })
        .catch(function (error) {
            // Adding error handling
            console.error("Error fetching appointments for employee:", person.Uniqe_id, error);
        });
});

Promise.all(allPromises)
    .then(function () {
        console.log("peopleArray", peopleArray);
     // modelModelArray1last.setData({person: peopleArray});

        var today = new Date(); // Bugünün tarihini al

        var filteredAppointments = peopleArray
            .map((person) => {
                person.appointments = person.appointments.filter((appointment) => {
                    var appointmentStartDate = new Date(appointment.Time_start);
                    return (
                        appointmentStartDate.getDate() === today.getDate() &&
                        appointmentStartDate.getMonth() === today.getMonth() &&
                        appointmentStartDate.getFullYear() === today.getFullYear()
                    );
                });
                return person;
            })
            .filter((person) => person.appointments.length > 0);

        console.log(filteredAppointments);
        filteredAppointments[0].appointments[0].title;
        
        modeloPlanningCalendar.setData({ person: filteredAppointments }); // Setting the entire data under "person"
        
        oPlanningCalendarRow.bindAggregation("appointments", {
            path: "appointments",
            template: oCalendarAppointment,
            templateShareable: false,
        });

        oPlanningCalendar.bindAggregation("rows", {
            path: "/person", // Adjusted the binding path
            template: oPlanningCalendarRow,
            templateShareable: false,
        });

        modeloPlanningCalendar.refresh();




    })
    .catch(function (error) {
        // Global error handling
        console.error("Error processing the data:", error);
    });
