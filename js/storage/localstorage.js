//Storage
var bDeleteAllLocalStorage = true;
var mUsername="";

var lsGet = function (key) {
    return window.localStorage.getItem(key);
};

var lsSet = function (key, value) {
    window.localStorage.setItem(key, value);
    return true;
};

var lsRemove = function (key, index) {
    window.localStorage.removeItem(key);
    if (index !== undefined) {
        lsRemoveFromIndex("index" + index, key);
    }
    return true;
};

var lsRemoveFromIndex = function (index, key) {
    var s = lsGet("Index" + index);
    if (s !== null && s !== undefined) {
        s = s.replace("," + key + ",", ",");
        lsSet("Index" + index, s);
    }
    return true;
};

var lsGetObj = function (key) {
    return JSON.parse(window.localStorage.getItem(key));
};

var lsSetObj = function (key, value, index) {
    window.localStorage.setItem(key, JSON.stringify(value));
    if (index !== undefined) {
        lsSetIndex(index, key);
    }
    return true;
};

var lsSetIndex = function (index, key) {
    var s = lsGet("Index" + index);
    if (s !== null && s !== undefined) {
        s = s.replace("," + key + ",", ",");
        s += "," + key + ",";
        s = s.replace(",,", ",");
    } else {
        s = "," + key + ",";
    }
    lsSet("Index" + index, s);
    return true;
};

var lsGetIndex = function (index) {
    var s = lsGet("Index" + index);
    //console.log("GetIndex: " + s);
    var a = [];
    if (s !== null && s !== undefined) {
        a = s.split(",");
        a.clean();
    }
    return a;
};

var lsGetAllIndexItems = function (index) {
    var indexKeys = lsGetIndex(index);
    var l = indexKeys.length;
    var o;
    var objects = [];
    for (var i = 0; i < l; i++) {
        o = lsGetObj(indexKeys[i]);
        if (o !== null && o !== undefined) {
            objects.push(o);
        }
    }
    return objects;
};

var lsGetAutoInc = function (index) {
    var s = lsGetObj("autoInc" + index);
    if (s === undefined || s === null) {
        s = new Setting("autoInc" + index, 0, "");
        lsSetObj("autoInc" + index, s);
    } else {
        s.settingValue++;
        lsSetObj("autoInc" + index, s);
    }
    return s.settingValue;
};

var lsSetAutoInc = function (index, myValue) {
    //console.log("Forcing auto inc: " + index + value);
    var s = new Setting("autoInc" + index, myValue, "");
    var i = lsGetAutoInc(index);
    //console.log("Existing autoinc: " + i);
    //console.log("Incoming autoinc: " + value);
    if (myValue > i) {
          //console.log("Incoming > so setting autoInc");
          lsSetObj("autoInc" + index, s);   
    }

};

//Storage
var LocalStore = function(successCallback, errorCallback) {
    "use strict";
    this.initializeStorage = function (successCallback, errorCallback) {
        //console.log("Initialize");
        //console.log("bDebug: " + bDebug);
        if (bDebug === false) {
            bDeleteAllLocalStorage = false;
        }

        if (window.localStorage !== undefined) {
            //console.log("LocalStorage is ACTIVE");
            cloudPushClient = new Date().getTime();
            isCloudReady = true;
            // Yes! localStorage and sessionStorage support!
            if (bDeleteAllLocalStorage === true) {
                //console.log("Clearing all storage");
                //window.localStorage.clear();
                var r=confirm("Really delete all data (users, passwords, settings)?");
                if (r===true)
                  {
                  window.localStorage.clear();
                  }
                else
                  {
                  //console.log("Cancelled");
                  }
            }
            //console.log("Success callback: ");
            successCallback(true);
        } else {
            // Sorry! No web storage support..
            //console.log("LocalStorage is ....INACTIVE");
            errorCallback("No web storage support");
        }
    };

    this.saveSetting = function (settingName, settingValue, callback) {
        console.log("savsetting: " + settingName + " " + settingValue);
        var s = new Setting(settingName, settingValue, mUsername);
        lsSetObj("setting" + settingName, s, "Settings");
        if (callback !== undefined) {
            console.log("callback? yes");
         callback();   
        }
    };

    this.getSetting = function (settingName, settingDefault, callback) {
        //console.log("getsetting: " + settingName);
        var s = lsGetObj("setting" + settingName);
        if (s !== null && s !== undefined) {
            //console.log("Value: " + s.settingValue);
            callback(s.settingValue);
        } else {
            //console.log("Default: " + settingDefault);
            callback(settingDefault);
        }
    };
    
    this.initializeStorage(successCallback, errorCallback);

};