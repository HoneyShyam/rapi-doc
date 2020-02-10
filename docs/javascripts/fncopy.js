//    // Register Request 
//    var clipboardReg = new ClipboardJS('#register-req', {
//        target: function () {               
//                return document.querySelector('#tab-shell-register-req');
//}
//});
//// Register Response
//        var clipboardResp = new ClipboardJS('#register-resp', {
//        target: function () {
//               return document.querySelector('#tab-shell-register-resp');
// }
//});

//// Verify Request
//        var clipboardVerifyReq = new ClipboardJS('#verify-phone-req', {
//        target: function () {
//                return document.querySelector('#tab-shell-verify-phone-req');
//}
//});
//// Verify Response
//var clipboardVerifyResp = new ClipboardJS('#verify-phone-resp', {
//    target: function () {
//        return document.querySelector('#tab-shell-verify-phone-resp');
//    }
//});

var btns = document.querySelectorAll('.btn');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseleave', clearTooltip);
    btns[i].addEventListener('blur', clearTooltip);
}
// $(document).ready(function activeTab(e) {
//     //function activeTab(e) {
//     if (e && "" !== e) {
//         //console.log(e);
//         // $(".lang-selector a").removeClass("active"), $(".lang-selector a[data-language-name='" + e + "']").addClass("active");
//         //for (var t = 0; t < a.length; t++)
//         //   $(".highlight.tab-" + a[t]).hide(), $(".lang-specific." + a[t]).hide();
//         $(".highlight.tab-" + e).show(),
//             $(".lang-specific." + e).show()

//     } else { $(".highlight.tab-" + e).hide(); }
//     console.log(e);
// });

function clearTooltip(e) {
    e.currentTarget.setAttribute('class', 'btn highlight');
    e.currentTarget.removeAttribute('aria-label');
}

function showTooltip(elem, msg) {
    elem.setAttribute('class', 'btn highlight');
    elem.setAttribute('aria-label', msg);
}

function fallbackMessage(action) {
    var actionMsg = 'Copy';
    var actionKey = (action === 'cut' ? 'X' : 'C');
    if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
    } else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    } else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }
    return actionMsg;
}
//hljs.initHighlightingOnLoad();

var objClipboard = new ClipboardJS('[data-clipboard-target]');
objClipboard.on('success', function(e) {
    //e.clearSelection();
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    showTooltip(e.trigger, 'Copied!');
});
objClipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    //showTooltip(e.trigger, fallbackMessage(e.action));
});

// Change Button's Text and clear selection

var clipboard = new ClipboardJS('button');
$(document).ready(function() {
    clipboard.on('success', function(e) {
        //$(e.trigger).text("Copied!");
        showTooltip(e.trigger, fallbackMessage(e.action));
        // e.clearSelection();
        setTimeout(function() {
            //$(e.trigger).text("Copy");
            //clearTooltip(e.trigger);
            e.clearSelection();
        }, 1000);
    });

    clipboard.on('error', function(e) {
        $(e.trigger).text("Can't in Safari");
        setTimeout(function() {
            $(e.trigger).text("Copy using manually!");
        }, 1000);
    });
});