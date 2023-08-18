console.log(modelModelArrayTodaysShift.getData())
var data = modelModelArrayTodaysShift.getData();
txtSimpleFormStartDate.setText(data[0].Time_start);
txtSimpleFormStoreName.setText(data[0].store_id);
txtSimpleFormendHour.setText(data[0].Time_end);
