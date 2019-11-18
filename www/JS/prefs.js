function helpPrefs() {
    console.log("----------");
    console.log("Showing Help:");
    console.log("");
    console.log("logPrefs()  -  Console.logs all the prefs you have.");
    console.log("helpPrefs()  -  Shows all the pref commands and what they do.");
    console.log("");
    console.log("SAVING AND GETTING VALUES (NOT ARRAYS):");
    console.log("savePref(variable, prefName)  -  Save the value of the varaible to the localStorage with your prefName given.");
    console.log("getPref(prefName, result)  -  Gives the prefInfo back as a result.");
    console.log("");
    console.log("SAVING AND GETTING VALUES (ONLY ARRAYS):");
    console.log("saveArr(array, prefName, hiddenTag)  -  Saves and array. For hiddenTag info look at bottom of help list.");
    console.log("getArr(prefName, result, hiddenTag)  -  Gives the array back as a result.");
    console.log("");
    console.log("DELETING PREFS:");
    console.log("deletePrefs()  -  Deletes all prefs. Used for resets.");
    console.log("deletePref(prefName)  -  Deletes that one pref with prefName.");
    console.log("");
    console.log("WHAT DIFFERENT WORDS MEAN:");
    console.log("variable  -  It is your variable that you want saved, not arrays.");
    console.log("prefName  -  It is the keyword for the storage you are saving to.");
    console.log("result  -  returns this value incase there are no prefs saved.");
    console.log("array  -  It is your array that you want saved");
    console.log("hiddenTag  -  (Optional) If you do write in this, make sure you don't write anything that would be in your array. Recommended to leave empty.");
    console.log("----------");
}

function getPref(prefName,result, vars_, type_) {
    if (typeof(prefName) == "object") {
        if (type_ == "all") {
            for (var i = 0; i < vars_.length; i++) {
                result.push(result[0]);
            }
        }
        for (var j = 0; j < vars_.length; j++) {
            if (localStorage.getItem(prefName[j]) !== null) {
                vars_[j] = localStorage.getItem(prefName[j]);
            } else {
                vars_[j] = result[j];
            }
        }
    } else {
        if (localStorage.getItem(prefName) !== null) {
            return localStorage.getItem(prefName);
        } else {
            return result;
        }
    }
}
function savePref(variable, prefName) {
    localStorage.setItem(prefName, variable);
}

function logPrefs() {
    console.log('----------');
    console.log("All Prefs:");
    console.log(" ");
    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]")
    }
    console.log('----------');
}

function deletePrefs() {
    localStorage.clear();
}
function deletePref(prefName) {
    localStorage.removeItem(prefName);
}

function saveArr(arr, prefName, hiddenTag) {
    toSet = "";
    if (!hiddenTag)
        hiddenTag = ":!>@";
    for (var i = 0; i < arr.length; i++) {
        toSet += arr[i] + hiddenTag;
    }
    localStorage.setItem(prefName, toSet);
}
function getArr(prefName, result, hiddenTag) {
     if (localStorage.getItem(prefName) !== null) {
        if (!hiddenTag)
            hiddenTag = ":!>@";
        toGive = localStorage.getItem(prefName).split(hiddenTag);
        return toGive;
    } else {
        return result;
    }
}
