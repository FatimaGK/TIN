(() => { var e = { 711: e => { e.exports = function () { const e = parseFloat(document.getElementById("dist").value), t = document.getElementById("dfrom").value, n = document.getElementById("dto").value; if ("mile" === t) switch (n) { case "kilometer": return 1.609344 * e; default: return e } else if ("kilometer" === t) switch (n) { case "mile": return e / 1.609344; default: return e } } }, 428: e => { e.exports = function () { const e = parseInt(document.getElementById("temp").value), t = document.getElementById("from").value, n = document.getElementById("to").value; if (console.log(e), console.log(t), console.log(n), "celsius" === t) switch (n) { case "fahrenheit": return 1.8 * e + 32; case "kelvin": return e + 273; default: return e } else if ("fahrenheit" === t) switch (n) { case "celsius": return 5 / 9 * (e - 32); case "kelvin": return 5 / 9 * (e - 32) + 273; default: return e } else if ("kelvin" === t) switch (n) { case "celsius": return e - 273; case "fahrenheit": return 1.8 * (e - 273) + 32; default: return e } } } }, t = {}; function n(r) { if (t[r]) return t[r].exports; var u = t[r] = { exports: {} }; return e[r](u, u.exports, n), u.exports } (() => { const e = n(428), t = n(711); document.getElementById("btn1").addEventListener("click", (function () { document.getElementById("result1").innerHTML = "Result : " + e() })), document.getElementById("btn2").addEventListener("click", (function () { document.getElementById("result2").innerHTML = "Result : " + t() })) })() })();