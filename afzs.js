/*
[rewrite_local]

https://afzs.iosoi.cn/appstore url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/afzs.js

[mitm]
hostname = afzs.iosoi.cn
*/

var updatedUrl = $request.url.replace(/udid=[^&]*/, 'udid=00008110-001C2DEC1A9B801E');
$done({ url: updatedUrl });
