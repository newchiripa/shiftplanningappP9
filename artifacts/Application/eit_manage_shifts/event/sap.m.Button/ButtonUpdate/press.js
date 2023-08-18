var oStartDate = DateTimePicker2.getValue();
var oEndDate = DateTimePicker3.getValue();
var shift_id = Textid.getText();
var type = "Type07";

if(SelectTitle1.getSelectedKey () == "Standart shift"){
type = "Type07"
}else{
type = "Type03"
}
var options = {
    parameters: {
        "where": JSON.stringify({"shift_id" : shift_id})
    },
    data: {
        "Time_start": oStartDate,
        "Time_end": oEndDate,
        "store_id": inSimpleForm1Location_can_work1.getSelectedKey(),
        "type": type,
    }
};

apiRestAPIShiftPost(options);
oDialogUpdate.close();