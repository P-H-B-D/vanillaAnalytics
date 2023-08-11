document.addEventListener("DOMContentLoaded", function() {
    // Check if sendAnalytics is defined before calling it
    if (typeof sendAnalytics === "function") {
        sendAnalytics();
    } else {
        console.log("sendAnalytics function is not available.");
        console.log("all good we continue")
    }
});