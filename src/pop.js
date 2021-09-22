

// Alert *************************************************************
function uialert(a) {
    var x,z
    if (a.buttons != undefined){
        if (a.buttons.ok != undefined){
            if (a.buttons.ok.text != undefined){
                x = a.buttons.ok.text;
            }
        }
        else{
            x = "OK"
        }
    }
    else{
        x = "OK"
    }
    if (a.type == "success"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/checkmark.png" class="ui-modal-icon"/>`;
    }
    else if (a.type == "error"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/error.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "question"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/help.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "info"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/info.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "delete"){
        z = `
        <svg class="ui-modal-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" stroke="none"></path><g id="Layer_1" stroke="none"><rect x="9" y="14" transform="scale(3.58333,3.58333)" width="30" height="29" fill="#f55376"></rect><rect x="7" y="8" transform="scale(3.58333,3.58333)" width="34" height="6" fill="#f55376"></rect><path d="M114.66667,17.91667h-57.33333l-10.75,21.5h78.83333z" fill="#f55376"></path><path d="M46.58333,39.41667h78.83333l-5.375,-10.75h-68.08333z" fill="#eb0000"></path><path d="M55.54167,86l14.33333,-14.33333l46.58333,46.58333l-14.33333,14.33333z" fill="#fac8d5"></path><path d="M102.125,71.66667l14.33333,14.33333l-46.58333,46.58333l-14.33333,-14.33333z" fill="#fac8d5"></path><rect x="-5.98263" y="34.32305" transform="rotate(-45.001) scale(3.58333,3.58333)" width="5.7" height="5.7" fill="#ffffff"></rect></g><g stroke="none"><g id="Layer_1"><g><path d="M123.55117,172l-28.25485,-27.42505l11.21966,-12.04945l28.56863,27.74233z" fill="#3ddab4"></path><path d="M123.55117,172l-11.80539,-11.46023l48.20478,-49.45644l12.04945,11.63455z" fill="#3ddab4"></path><path d="M123.23041,148.7553l-11.48463,11.78447l11.80539,11.46023l11.53344,-11.73218z" fill="#00b569"></path></g></g></g><path d="M95.29632,172v-60.91667h76.70368v60.91667z" id="overlay-drag" fill="#ff0000" stroke="none" opacity="0"></path></g></svg>`
    }
    else{
        z = `<img src="https://img.icons8.com/color-glass/48/000000/info.png" class="ui-modal-icon"/>`
    }

    var i = document.createElement("dialog");
    i.style.width = "200px"
    i.innerHTML = '<form method="dialog">' + z + '<h2>' + a.title + '</h2>' + a.text + '<br><br> <button value="ok"> ' + x +  ' </button></form>';


    document.body.insertBefore(i, document.getElementById("loader"));
    if (typeof i.showModal === "function") {
        i.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
    i.addEventListener('close', function onClose() {
        if (i.returnValue == "ok") {
            if (a.buttons.ok.func != undefined){
                a.buttons.ok.func();
            }
            else{
                //pass
            }
            return true
        }
        i.remove();
    });
}

// Confirm *************************************************************

function uiconfirm(a) {
    var x
    if (a.buttons != undefined){
        if (a.buttons.ok != undefined){
            if (a.buttons.ok.text != undefined){
                x = a.buttons.ok.text;
            }
            else{
                x = "OK"
            }
        }
        else{
            x = "OK"
        }
    }
    else{
        x = "OK"
    }
    var y, z
    if (a.buttons != undefined){
        if (a.buttons.cancel != undefined){
            if (a.buttons.cancel.text != undefined){
                y = a.buttons.cancel.text;
            }
            else{
                y = "Cancel"
            }
        }
        else{
            y = "Cancel"
        }
    }
    else{
        y = "Cancel"
    }
    if (a.type == "success"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/checkmark.png" class="ui-modal-icon"/>`;
    }
    else if (a.type == "error"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/error.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "question"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/help.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "info"){
        z = `
        <<img src="https://img.icons8.com/color-glass/48/000000/info.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "delete"){
        z = `
        <img class="ui-modal-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD0ElEQVRoge2ZS2wbVRSGvzueMUmcmjYPFJqKClQJWkI3gW1k2FCxSYBIBVZIIMSi7KI2QkKEFZAgFrRFEWyATQOiVQwSkBVVK/GQAKkJoY0EVVMiYylxC04dP8b2ZeFMseOZyXhmbBPJv2TJc8/j/r/vzDnHNrTQQgs7GsJL8ProeESRxW+95CgK5dFdn7913m284mXzgCy87iXejxyuBayPjkckIuJlcwCJiKyPjrvOY3sLpZ4+Lq1smQszFFevu923AkrvPbQNPWNpD52dtOTp6gSKq9d9I+81nysBucvfudqsHjlVN0F2x91oeKpC/wfseAGOGpldNaon7KqPgR1/Ai0BzUZLQLPhn4BwCPXZx2F3pzefGuGPgHAI7egRxL4+tKNHzAk68XEB7wI2id0mtPXaqY9LeBNgRaR83YmPB7ga5hwhHCL4/DAEFKRSv1rhLXMyhf7pN/D3rWqbphIYvB/1kYOIUFttsTXA+0djRkRTUQ/uR7TfAWoA9YH9lSJ8Ig9+VaFyQuXkDZSL8JE8+D2N9vfS/sbLCIsHU6azpF97H67FK9YLMsCvNwb4LXGIlVQ/ydydAGQLwSUBv0jJbG83sxOLIlc/AUZV6d1dfQIAeoH8lWVkPFFxAguJh/h6+QkSmS77/II/hOT4yb/EOf8FbC2JW28jg/xGpnSdTJGdmeOrS0NcjA05oVDO+J2eGCcmEEWoRyMD0PPkLy8j09lq8psxc7xYO3kAydhaH28al95OYJtmJHJ5UKv7wPz3YT6a3Gcas2d+o/RGh/ySQmZaQ78QMEnOk6diYrZ+HSaZIvdxlNyH5yoqTiEv+PKTu7aP10AdKNJ5Kov2WKHaLnl34kEZrE8jK1/f4rPw4y4S8aBlypuHO0qvwQ7S72kAtL+gm7neu5Zg2P9GZiaqbG3hh7CzvDpkzpQmncB95newFH4IMAh+NodciaPPWDSpTZ8/lxyOXxq0PZcHoHDV8lF92L9h7p9b5M/MbeuzfsN+y0vn1wCIdHXcXktPa6a+AvrrN416hQ6FKwrpaQ39okkVKqHYcAFhLclqocfSbnzyNw93WPqUIdbwL/X9nSt+pvup4QIOdS3a2o0y6gRCEm24gIGuRXraEpb2PfMb/3Vje1zt7uYLT/9SusUrd8unJJw1sxnktzsFKRg5HRPRpggAOLZXTiEZcxMrJG+fjItxaOIvcz0xTkjBVM2BksnuOK8al007AQPH9soRikwhOGDrKPldKoydjolo+XLTBQC8hNSCfYxIwbCAQcCYtVck/KxIZrNxoh8gqqa6fwFI3ZRMBUGsuQAAAABJRU5ErkJggg==">`
    }
    else{
        z = `<img src="https://img.icons8.com/color-glass/48/000000/help.png" class="ui-modal-icon"/>`
    }
    var i = document.createElement("dialog");
    i.style.width = "200px"
    i.innerHTML = '<form method="dialog">' + z +'<h2>' + a.title + '</h2>' + a.text + '<br><br> <button value="ok">' + x + '</button><button value="cancel">' + y + '</button></form>';


    document.body.insertBefore(i, document.getElementById("loader"));
    if (typeof i.showModal === "function") {
        i.showModal();

    } else {
        alert("The <dialog> API is not supported by this browser");
    }
    i.addEventListener('close', function onClose() {
        var w = "";
        if (i.returnValue == "ok") {
            if (a.buttons.ok.func != undefined){
                a.buttons.ok.func();
            }
            else{
                //pass
            }
            return true
        } else {
            if (a.buttons.cancel.func != undefined){
                a.buttons.cancel.func();
            }
            else{
                //pass
            }
            return false
        }
        i.remove();
    });

}

// Prompt *************************************************************

function uiprompt(a) {
    var z,x,y,t
    if (a.type == "success"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/checkmark.png" class="ui-modal-icon"/>`;
    }
    else if (a.type == "error"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/error.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "question"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/help.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "info"){
        z = `
        <img src="https://img.icons8.com/color-glass/48/000000/info.png" class="ui-modal-icon"/>`
    }
    else if (a.type == "delete"){
        z = `
        <img class="ui-modal-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD0ElEQVRoge2ZS2wbVRSGvzueMUmcmjYPFJqKClQJWkI3gW1k2FCxSYBIBVZIIMSi7KI2QkKEFZAgFrRFEWyATQOiVQwSkBVVK/GQAKkJoY0EVVMiYylxC04dP8b2ZeFMseOZyXhmbBPJv2TJc8/j/r/vzDnHNrTQQgs7GsJL8ProeESRxW+95CgK5dFdn7913m284mXzgCy87iXejxyuBayPjkckIuJlcwCJiKyPjrvOY3sLpZ4+Lq1smQszFFevu923AkrvPbQNPWNpD52dtOTp6gSKq9d9I+81nysBucvfudqsHjlVN0F2x91oeKpC/wfseAGOGpldNaon7KqPgR1/Ai0BzUZLQLPhn4BwCPXZx2F3pzefGuGPgHAI7egRxL4+tKNHzAk68XEB7wI2id0mtPXaqY9LeBNgRaR83YmPB7ga5hwhHCL4/DAEFKRSv1rhLXMyhf7pN/D3rWqbphIYvB/1kYOIUFttsTXA+0djRkRTUQ/uR7TfAWoA9YH9lSJ8Ig9+VaFyQuXkDZSL8JE8+D2N9vfS/sbLCIsHU6azpF97H67FK9YLMsCvNwb4LXGIlVQ/ydydAGQLwSUBv0jJbG83sxOLIlc/AUZV6d1dfQIAeoH8lWVkPFFxAguJh/h6+QkSmS77/II/hOT4yb/EOf8FbC2JW28jg/xGpnSdTJGdmeOrS0NcjA05oVDO+J2eGCcmEEWoRyMD0PPkLy8j09lq8psxc7xYO3kAydhaH28al95OYJtmJHJ5UKv7wPz3YT6a3Gcas2d+o/RGh/ySQmZaQ78QMEnOk6diYrZ+HSaZIvdxlNyH5yoqTiEv+PKTu7aP10AdKNJ5Kov2WKHaLnl34kEZrE8jK1/f4rPw4y4S8aBlypuHO0qvwQ7S72kAtL+gm7neu5Zg2P9GZiaqbG3hh7CzvDpkzpQmncB95newFH4IMAh+NodciaPPWDSpTZ8/lxyOXxq0PZcHoHDV8lF92L9h7p9b5M/MbeuzfsN+y0vn1wCIdHXcXktPa6a+AvrrN416hQ6FKwrpaQ39okkVKqHYcAFhLclqocfSbnzyNw93WPqUIdbwL/X9nSt+pvup4QIOdS3a2o0y6gRCEm24gIGuRXraEpb2PfMb/3Vje1zt7uYLT/9SusUrd8unJJw1sxnktzsFKRg5HRPRpggAOLZXTiEZcxMrJG+fjItxaOIvcz0xTkjBVM2BksnuOK8al007AQPH9soRikwhOGDrKPldKoydjolo+XLTBQC8hNSCfYxIwbCAQcCYtVck/KxIZrNxoh8gqqa6fwFI3ZRMBUGsuQAAAABJRU5ErkJggg==">`
    }
    else{
        z = `<img src="https://img.icons8.com/color-glass/48/000000/help.png" class="ui-modal-icon"/>`
    }
    if (a.buttons != undefined){
        if (a.buttons.ok != undefined){
            if (a.buttons.ok.text != undefined){
                x = a.buttons.ok.text;
            }
            else{
                x = "OK"
            }
        }
        else{
            x = "OK"
        }
    }
    else{
        x = "OK"
    }
    if (a.buttons != undefined){
        if (a.buttons.cancel != undefined){
            if (a.buttons.cancel.text != undefined){
                y = a.buttons.cancel.text;
            }
            else{
                y = "Cancel"
            }
        }
        else{
            y = "Cancel"
        }
    }
    else{
        y = "Cancel"
    }
    if (a.inputType != undefined){
        t = a.inputType;
    }
    else{
        t = "text"
    }
    var i = document.createElement("dialog");
    i.style.width = "200px"
    i.innerHTML = '<form method="dialog">' + z + '<h2>' + a.title + '</h2>' + a.text + '<br><br><label for="prompt">' + a.prompt + '<input type="'+ t +'" required id="prompt"></label> <br><br> <button value="ok">' + x + '</button><button value="cancel">' + y + '</button></form>';


    document.body.insertBefore(i, document.getElementById("loader"));
    if (typeof i.showModal === "function") {
        i.showModal();

    } else {
        alert("The <dialog> API is not supported by this browser");
    }
    i.addEventListener('close', function onClose() {
        var w = "";
        if (i.returnValue == "ok") {
            if (a.buttons.ok.func != undefined){
                a.buttons.ok.func();
            }
            else{
                //pass
            }
            return document.getElementById("prompt").value
        } else {
            if (a.buttons.cancel.func != undefined){
                a.buttons.cancel.func();
            }
            else{
                //pass
            }
            return false
        }
        i.remove();

    });

}
