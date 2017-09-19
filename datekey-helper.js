function DatekeyHelper(t,e){var a=this;if(a.datekey=t||void 0,a.config=e||void 0,datekeyExists(a.datekey)&&validateType(a.datekey)&&validateLength(a.datekey))return a;var n=a.config?a.config.separator||"/":"/";a.display={long:function(){return format(t,!0,n)},short:function(){return format(t,!1,n)}},a.date=new Date(a.display.long()),a.isSaturday=6===a.date.getDay(),a.isFriday=5===a.date.getDay(),a.isThursday=4===a.date.getDay(),a.isWednesday=3===a.date.getDay(),a.isTuesday=2===a.date.getDay(),a.isMonday=1===a.date.getDay(),a.isSunday=0===a.date.getDay(),a.setSeparator=function(t){n="number"==typeof t||"string"==typeof t?t:n},a.weekEndings=function(t){var e=[];if(0===t||void 0===t)return e;var n=new Date(a.display.long());if(!a.isSaturday)if(t>0){var r=6-a.date.getDay();n.setDate(n.getDate()+r)}else n.setDate(n.getDate()-(a.date.getDay()+1));for(var i=0;i<Math.abs(t);i++)e.push(dateToDatekey(n)),t>0?n.setDate(n.getDate()+7):n.setDate(n.getDate()-7);return e}}function datekeyExists(t){if(void 0===t||null===t)throw new Error("Cannot instantiate DatekeyHelper. Was not passed a datekey.")}function dateToDatekey(t){var e=t.getFullYear(),a=t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1).toString(),t=t.getDate()>9?t.getDate():"0"+t.getDate().toString();return parseInt(e.toString()+a.toString()+t.toString())}function format(t,e,a){var n=t.toString().split(""),r=n[0]+n[1]+n[2]+n[3],i=n[4]+n[5],o=n[6]+n[7],s=i+a+o,d=i+a+o+a+r;return e?d:s}function validateLength(t){if(8!==t.toString().length)throw new Error("Cannot instantiate DatekeyHelper. Was passed a datekey which is not the right length.")}function validateType(t){if("number"!=typeof t)throw new Error("Cannot instantiate DatekeyHelper. Was passed a datekey which is not a number.")}module.exports=DatekeyHelper;