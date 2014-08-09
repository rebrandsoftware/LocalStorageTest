var bDebug=false;
var cloudPushClient=0;
var isCloudReady=false;

function Setting(settingName, settingValue, user) {
    this.settingName = settingName;
    this.settingValue = settingValue;
    this.user = user;
}

var app = {
        initialize: function() {
            
        var that = this;
     
        $('#btnInit').on('click', function(e) {
           that.store = new LocalStore(
            function storeCreated(success) {
                alert("store created");
            },
            function LocalStoreError(errorMessage) {
                alert('Error: ' + errorMessage);
            });
        });
        
        $('#btnSave').on('click', function() {
            console.log("clicked btnAdd");
            that.store.saveSetting("Test", "Success", function() {
               alert("saved"); 
            });
        });
        
        $('#btnGet').on('click', function(e) {
           that.store.getSetting("Test", "Default", function(mySetting) {
              alert(mySetting); 
           });
        });
    },
};

app.initialize();
