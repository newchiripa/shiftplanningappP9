// oNewAppointment = {
//     title: InputTitle.getValue(),
//     startDate: DateTimePicker1.getDateValue(),
//     endDate: DateTimePicker.getDateValue(),
// };

// var data = [];
// data.push(oNewAppointment);
// modeloSinglePlanningCalendar.setData(data);
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
const myUUID = generateUUID();
oDialogCreate.close();
var type;
if(SelectTitle.getSelectedKey() == "Standart shift"){
type = "Type07"
}else{
type = "Type03"
}
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; 
var year = today.getFullYear();
var dateObject = new Date(year, month - 1, day);

var options = {
    data: {
        "shift_id": myUUID,
        "Time_start":DateTimePicker1.getDateValue(),
        "Time_end": DateTimePicker.getDateValue(),
        "store_id": inSimpleForm1Location_can_work.getSelectedKey(),
        "date": dateObject,
        "type": type,
        "employee_id": TextID.getText(),
    }
};

apiRestAPIShiftPost(options);





//var originalActivities = modeloSinglePlanningCalendar.getData();
// var updatedActivities = modelListEmptyActivities.getData();
// var selectedItems = ListEmptyActivities.getSelectedItems();

// for (var i = 0; i < selectedItems.length; i++) {
//   var selectedItem = selectedItems[i];
//   var bindingContext = selectedItem.getBindingContext();
//   var data = bindingContext.getObject();
//   var selectedStart = data.start;
//   var selectedEnd = data.end;

//   for (var j = 0; j < originalActivities.length; j++) {
//     var originalActivity = originalActivities[j];
//     var originalStart = originalActivity.start;
//     var originalEnd = originalActivity.end;

//     if (originalStart.getTime() === selectedStart.getTime() && originalEnd.getTime() === selectedEnd.getTime()) {
//       originalActivity.title = InputTitle1.getValue();
//       originalActivity.info = TextAreaDetails1.getValue();
//       originalActivity.type = "Type07";
//       break;
//     }
//   }
// }

// modeloSinglePlanningCalendar.setData(originalActivities);
// DialogUpdateActivities.close();

// // var originalActivities = modeloSinglePlanningCalendar.getData();
// // var updatedActivities = modelListEmptyActivities.getData();
// // var selectedItems = ListEmptyActivities.getSelectedItems();

// // for (var i = 0; i < selectedItems.length; i++) {
// //   var selectedItem = selectedItems[i];
// //   var bindingContext = selectedItem.getBindingContext();
// //   var data = bindingContext.getObject();
// //   var selectedStart = data.start;
// //   var selectedEnd = data.end;

// //   for (var j = 0; j < originalActivities.length; j++) {
// //     var originalActivity = originalActivities[j];
// //     var originalStart = originalActivity.start;
// //     var originalEnd = originalActivity.end;

// //     if (originalStart.getTime() === selectedStart.getTime() && originalEnd.getTime() === selectedEnd.getTime()) {
// //       originalActivity.title = InputTitle1.getValue();
// //       originalActivity.info = TextAreaDetails1.getValue();
// //       originalActivity.type = "Type07";
// //       break;
// //     }
// //   }
// // }

// // modeloSinglePlanningCalendar.setData(originalActivities);
// // DialogUpdateActivities.close();
