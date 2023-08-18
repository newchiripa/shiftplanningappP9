App.setBusy(true);
navigateToDetail();
const context = oEvent.oSource.getBindingContext();  
const data = context.getObject();
modeloPageDetail.setData(data);
var data_String_Location_can_work = data.Location_can_work;
var list_of_Location_can_work = data_String_Location_can_work.split(",");
var data1 = [];
for (var i = 0; i < list_of_Location_can_work.length; i++) {
  var newData = {
    key: list_of_Location_can_work[i],
    text: list_of_Location_can_work[i]
  };
  data1.push(newData);
}
modelinSimpleForm1Location_can_work.setData(data1);
modelinSimpleForm1Location_can_work1.setData(data1);
var options = {
    parameters: {
        "where": JSON.stringify({"employee_id": data.Uniqe_id})

    }
};

apiRestAPIRestAPIShiftGet(options);
