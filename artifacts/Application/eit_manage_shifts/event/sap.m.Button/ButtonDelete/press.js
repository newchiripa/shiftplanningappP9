var shift_id = Textid.getText();

var options = {
    parameters: {
       "where": JSON.stringify({"shift_id" : shift_id})
    }
};

apiRestAPIShiftDelete(options);

oDialogUpdate.close();