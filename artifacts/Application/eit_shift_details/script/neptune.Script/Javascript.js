var mail
if (sap.n) {
    mail = AppCache.userInfo.email;
    console.log("Uygulama SAP Fiori Launchpad içinde çalışıyor.");
} else {
    mail = "kaan.koska@neptune-software.com";
    console.log("Uygulama bağımsız bir uygulama olarak çalışıyor.");
}
console.log(mail);
var options = {
    parameters: {
        "where": JSON.stringify({"Email" : mail}),
    }
};
apiRestAPIEmployeeInfoGet(options);

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; 
var year = today.getFullYear();
var dateObject = new Date(year, month - 1, day);

var options = {
    parameters: {
        "where": JSON.stringify({"employee_id" : "DC992C19-3EBC-4E9A-905F-EA3BB9A8452A",
        "date": dateObject}),

    }
};

apiRestAPIgetTodayShift(options);