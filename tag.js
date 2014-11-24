function tag(attr) {
    var tagfunc = tag;

    var res = "";
    var _tag = "";
    var html = "";

    var tmpAttrValue = "";

    function ProcessObjectArray(ObjectArray) {
        for (var i = 0; i < ObjectArray.length; i++) {
            if (typeof ObjectArray[i] === "string") {
                html += ObjectArray[i];
            } else if (typeof ObjectArray[i] === "function") {
                html += tagfunc(ObjectArray[i]());
            } else if (typeof ObjectArray[i] === "object") {
                html += tagfunc(ObjectArray[i]);
            } else {
                html += ObjectArray[i];
            }
        }
    }

    if (Object.prototype.toString.call(attr) === "[object Array]") {
        for (var i = 0; i < attr.length; i++) {
            res += tagfunc(attr[i]);
        }
        return res;
    } else if (typeof attr === "function") {
        return tagfunc(attr());
    } else if (typeof attr === "string") {
        return attr;

    } else {



        for (var key in attr) {
            if (attr.hasOwnProperty(key)) {
                if (key === "tag") {
                    _tag = attr[key];
                    res = "<" + _tag;
                } else if (key === "html") {

                    switch (typeof attr[key]) {
                        case "function":
                            var f = attr[key]();
                            if (Object.prototype.toString.call(f) === "[object Array]") {
                                ProcessObjectArray(f);
                            } else if (typeof f === "string") {
                                html += f;
                            } else {
                                html += tagfunc(f);
                            }
                            break;
                        case "string":
                            html = attr[key];
                            break;
                        case "number":
                            html = attr[key];
                            break;
                        case "object":
                            if (Object.prototype.toString.call(attr[key]) === "[object Array]") {
                                ProcessObjectArray(attr[key]);
                            } else if (typeof attr[key] === "string") {
                                html += attr[key];
                            } else {
                                html += tagfunc(attr[key]);
                            }
                            break;
                        default:
                            html = tagfunc(attr[key]);
                            break;
                    }

                } else if (key === "selected" && attr[key] === "true") {
                    res += " " + key;
                } else if (key === "checked") {
                    if (attr[key] === true) {
                        res += " " + key;
                    }
                } else {
                    res += " " + key + '="' + attr[key] + '"';
                }
            }
        }

        res += ">" + html + "</" + _tag + ">";
        return res;

    }
}