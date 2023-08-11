const apikey= "API KEY";
const authorization= "API AUTH";
const url="API URL";

function sendAnalytics(){

  const getUA = () => {
      let device = "Unknown";
      const ua = {
          "Generic Linux": /Linux/i,
          "Android": /Android/i,
          "BlackBerry": /BlackBerry/i,
          "Bluebird": /EF500/i,
          "Chrome OS": /CrOS/i,
          "Datalogic": /DL-AXIS/i,
          "Honeywell": /CT50/i,
          "iPad": /iPad/i,
          "iPhone": /iPhone/i,
          "iPod": /iPod/i,
          "macOS": /Macintosh/i,
          "Windows": /IEMobile|Windows/i,
          "Zebra": /TC70|TC55/i,
      }
      Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
      return device;
    }

    ua=getUA();
  
    const getBrowser = () => {
      let browser = "Unknown";
      const ua = {
          "Edge": /Edge/i,  
          "Chrome": /Chrome|CriOS/i,
          "Firefox": /Firefox|FxiOS/i,
          "Internet Explorer": /MSIE|Trident/i,
          "Opera": /Opera|OPR\/|Opera Mini/i,
          "Safari": /Safari/i,
      }

      Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (browser = v));
      return browser;
    }
    browser=getBrowser();


  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const clientIP = data.ip;
        var xhr = new XMLHttpRequest();

        xhr.open("POST", url, true);
        xhr.setRequestHeader("apikey", apikey);
        xhr.setRequestHeader("Authorization", authorization);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Prefer", "return=minimal");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };

        var data = JSON.stringify({
            "a": clientIP,
            "d": ua,
            "b": browser
        });

        xhr.send(data);
      })
      .catch(error => {
        console.error('Error fetching or logging IP:', error);
      });
}



  
  