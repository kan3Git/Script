/*
摇一摇
不定时京豆活动
有看到新活动可以私信我添加活动ID。 GitHub@i-chenzhe
新手写脚本，难免有bug，能用且用。

脚本内置了一个给作者任务助力的网络请求，默认开启，如介意请自行关闭。
助力活动链接： https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html
参数 helpAuthor = false

更新地址：https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_shake.js
============Quantumultx===============
[task_local]
#摇一摇
3 20 * * * https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_shake.js, tag=摇一摇,  enabled=true
================Loon==============
[Script]
cron "3 20 * * *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_shake.js,tag=摇一摇
===============Surge=================
摇一摇 = type=cron,cronexp="3 20 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_shake.js
============小火箭=========
摇一摇 = type=cron,script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_shake.js, cronexpr="3 20 * * *", timeout=3600, enable=true
*/
const $ = new Env('超级摇一摇');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [],
cookie = '';
let helpAuthor = false; //为作者助力的开关
let joinMember = false; //是否完成开卡任务开关
if ($.isNode()) {
	Object.keys(jdCookieNode).forEach((item) = >{
		cookiesArr.push(jdCookieNode[item])
	}) if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () = >{};
} else {
	let cookiesData = $.getdata('CookiesJD') || "[]";
	cookiesData = JSON.parse(cookiesData);
	cookiesArr = cookiesData.map(item = >item.cookie);
	cookiesArr.reverse();
	cookiesArr.push(... [$.getdata('CookieJD2'), $.getdata('CookieJD')]);
	cookiesArr.reverse();
	cookiesArr = cookiesArr.filter(item = >!!item);
}
$.log('脚本版本 v0.1\n更新时间:2021-03-19 14:25\n仓库：https://www.github.com/i-chenzhe/qx');
var _0xodz = 'jsjiami.com.v6',
_0x2dce = [_0xodz, 'Iz7DljND', 'wp86dnjCtnUZQsOm', 'XsKywrtf', 'wqXCiMKHw5DCl3Q=', 'XxbCqhrDow==', 'w5PCs2ZRwrU=', 'U8O0w5nCqcO2', 'NWgca8Kl', 'GHs+w6pz', 'XnN7Myhk', 'w6kEeEzDnA==', 'w5NhOcOsw5A=', 'w7/Cg8OKwqBN', 'HsKxFgFP', 'w5rCpTTDu8KDNMOG', 'wrvCosOJw5nDnA==', 'fcOcQkg=', 'JQ3CqGHDqsOfwr0=', 'SD3DuMOm', 'wpzDkm4Mw6xQ', 'wpDCp23DjBDDnMK0XCg+', 'B8KOIQJCw5c=', 'I8Kdw5pQwp85Xj3ChQ4=', 'w5HDn8K6Tw==', 'wrrDp8KPw4vDquKVtSzmnqbmlrHlgIblpbLkubzkubrvv5TovYzms6bkvKPlpJTkuqzkuocUNu+/sA==', 'HsOkUFDCmQ==', 'SMOXemM4', 'EsO9bWbCrQ==', 'w6NDJ8O4w6XDmWbDlMKNw74dc0LDjjR3wpjDvsOx', 'w4Yhbg==', 'bcOUQkUJ', 'AlU/w7BQwr/CsEAU', 'FWcOCjvCmA==', 'wo7CmsOyw5jDtw==', 'w6LDtcKde8Oaw5Y=', 'w4ktwogVw4wFwpDDucK9w4FCwpA=', 'AUMKw6ln', 'MmU+w5ZI', 'w4fCpsOGwp8=', 'X8OyY20F', 'wrHCuQXCjCbDhcKJYcO/wrhjwrQ=', 'bR/DmMOYasKT', 'w6vCpGhK', 'w6PCjcOfwpZaw5A=', 'wrwDUw==', 'O8KTw51PwrQqShY=', 'wp86ZWXCrWE=', 'LcKAw49Kwp4GQh7CkgYEC8Kqwr4=', 'UxzCji3DtQ==', 'w7/Cq25dwqI=', 'bi3CnjjDlA==', 'WnN6Kxs=', 'w6EhaG7Dng==', 'w4EPwow6wpE=', 'OMKTw4dQ', 'wqLCrAAD', 'RQbCjSXDnA==', 'DMOUbnXCkcKjwqd4woBNIiQ=', 'CMOWwq0=', 'D+WNjuWKoeWHoX4=', 'Xnt8NBs=', 'wq/Ds8KFwodSwp8=', 'ajXCshY=', 'ZyjDtcOQdw==', 'wo7DnMOaw5HChg==', 'RMK2VcObF8Oh', 'wpsVw491Bw==', 'woDltJjnuJzlr4jmi50=', 'UyvDvsKRdmsHLQ==', 'w5MBw5JdCg==', 'w6sAw5ZiDQ==', 'XyjDrcOzVsKk', 'B2kRDR3Ci1fCmCnDr8KrEA==', 'w5fCl8OSwqJw', 'w6/CtW1XwpE=', 'w6gWw6N7OsKbwqcHw6E=', 'w4zljaPlhJ/msJBC', 'Em4SETzCnWnClQ==', 'JB4iScOAw60=', 'wrzCiBXCqRQ=', 'w5fDl8K6T8Oaw7Y=', 'G1occ8K1PQ==', 'D8K9w6ILBQ==', 'E8OYwqM4B8K4w7dzwr/DkS9/', 'csKUaMOw', 'NsKUw54w', 'woLDmHo=', 'D+W0h+e7juWsiOaJjg==', 'wqPDlUjDl8OsLA==', 'KTo1UsOD', 'LgXCs1pr', 'THFXOxFnw7gJdXPCgD/DsAMd', 'BAx1w48X', '5b2D5buN776t', 'w7Aiw7loHg==', 'w7AYw7c=', 'w67Ci8KnJQ==', 'wqvCjsKaw5jClmE=', 'bcKUcsOLKcOLFMKhw5nDoRZQw5fCuA==', 'w6Uew6FdDw==', 'RMKZw6ps4pWXw60=', 'wrsaw5FM', 'XMK4wrtewqZC', 'ZcKoZcOTwr0mEXTCpsOLe1x6bsOtw4PCjcOmJjovAcOvwqg=', 'X3ZfFio=', 'EWcPEhc=', '6I+Z5Y6t5rSb5YqJ5L625oCi5oqE5Yir', '5LqD5LmX6L+G5ZqQ5LmQ56uM5pan5o+U', 'wrrColvDqxg=', 'wqYjw5JJPw==', 'w4rChxfDisKY', 'wqjDkcOmwole', 'GMOiblfCuA==', 'wpU/w4JAHw==', 'Q8Klwr5Awqg=', 'wqDCuzPCnwfDhMKzb8OmwrRIwrtkw6s=', 'w47CocOswoxhw6Y=', 'esOww4Q=', 'WWZ6MRBsw70Kbw==', 'KQrCmEBM', 'BAFhw54f', 'w7HChcOgwrvCoQ==', 'TA7ClcOSw7w=', 'Hxdcw7gk', 'w4wpwpIUw6QE', 'wqXDkUjDicOWN8OE', 'cTvCrxbDnlEhYsK4Kg==', 'd8KQcsOxMsOR', 'QsKywrxfwq9Ew6/DrsO0TQ==', '5byb5bqF77ys', 'MDDCrEJNwqhyw7rCsQ==', 'AEcKdQ==', 'w7bDqDnCmFXilrLDreacm+aWq+WBiuWkq+S6r+S5q++/nOi8meayq+S9i+WnnOS4jeS6oRNd776j', 'wqLCgyAyHQ==', 'w7DCjcOZDcKB', 'F8OaYA==', 'QsKywq9uwrhE', 'Pg/CjWHDlg==', 'w58tw4dhAQ==', 'wpzDlcOYw4HCqw==', 'wqrCtwvCvRDDgg==', 'w6LCnsKnNMK+wpXCrBvCucKmRyEiGMOEwogUwoXDvR/ClcKnw6ozKgvCqcOGw4JDw6LCmcKpw5U=', 'd8Ktb8KewrV7CHbDpMOHdUU=', 'TC/DqMKKFWsGIcOPw7I=', 'TjtiIsK/w5XCtsOOOG3CrTsVaMKYw4cywrsrXsK9wrrDpDgIwqRzwoI5WH3Co8O8', 'w6UjwrgFwq9wwoNZYRHDlsKJw6bCicObwrDCuMOiwqzCssKpecKHw6jDqSxUw60tJl5bw4FNw5XDicKhw5hFZ8KowrhIIzMCOkvChMKBJBgyLcKZPMKhwrsIwoNbw75Fw4VfVHhNwotiSz5Tw4JSwoXDgcK2w4TDj8OSwqnCmcOUw6zCqRtIw6nCpGdzw43CgXEdQMOlTcKwMFIjMFXDqsOUw5DCiHzDkSbCqcO7w5XDu8OyH3NBwrEPHhnDuMKOwqkUe8KQw4chC8KNWMOxEcOxR8Kow73DtS7DuCrDo8O4w5PCuGXCtMKYwpnCtcKsw4IYwofDm3V2TUTClAnCgC1pSD7CrsKUwqTClTfDgBlQIhPDt1vDnHfCr8OBBMOowrXCsMK6UDPDsCt2WzYmCVdXw6pawqXCrXjDpQ3Ds1zCvsOJHsOQacOmwooSDCnCrsKtw5jChjnCpcK8NzMxCAfDnsKHScOsZsK7VFoqwovCohd6d8OmTyjDhMKdasOUfMOIw7XDrcKvwonCtUDCtmXCk8O0wqcmw4xwwrLCvsKgwp43GG1QwqFrO8KLw508C03CngLDlzJMwp/CpR7Dt1YIV8Oswq7Cqx3CuMOICXrCl8ODw6tMEGDClWMXfMOswpvDkmErE30Vw45iw4fCusKwRcOCGk/DtgzDqiPDg8KtB8KOG8K7UDJUHio8w6TDlSIwwrB5KFTDpjbCrsOqwr0xYkLCkFfDmMOJw5fCpj1iwqUbwqXDmMKuwrfDpsK/I8OeeMKJW8OuLsK8woLDgCTDrXXDq2phXkt7wrcHwrHCg8OdwrRgKsKtBTDDvFbCuRjCtjXCs8Ogw6rCqQkaGWrCv8KKDw3DjRtwwpnDk0IbF8KzwoI0w5rCpDdPEyti', 'ccOJQlkfwqVIDg0awr/DpVrDvMODT8OXwqPDncKrw4nCrcKxw5TDi8OXwro5w6Vow4zCu8KKw50dw6rDvMKAPwttdQkwbRw0PsKRQcKTwqc9cXs9wrHCuEEfacOvWR3Du2rCicKoCsOld3PDkiUGKG8sw5vDgztYwpvDpVItwpBhC8KGwoRqBRfDu8OswqPCiXNCdn7DnHByOMKQE8O1wrHDuwhpw5nCumFGTMOBYMOoacOWawDChXHCnmRew5o=', 'wqvDmBbDgcOu', 'NmgBWsKL', 'w7dRIcO4wrnCkGzDlsKqw7EIblHCi2Bswrw=', 'w6gBwqkFwpk=', 'wpMUw7djDQ==', 'J8KAw5knP8KawpFow7fDlEU=', 'wrrCpm1XwoDDtcOvFAAAw4HDocOlHsOXw5t4YsKNCizDp8OldC5IAsKuw63DhUs=', 'C8Kww6U+IQ==', 'w7fCt8OQw5s=', 'NjfCu1lqwqF9w7M=', 'wpfDhMKxwqty', 'bcKBdcO0LcKfa8O8w5vDtF5Dw5PCqMOGTSPDsULDpsOQFGgtwpzDpnLCpcK3dsOfIBTDu8KjwqTDiEXDu3PDv8O0wo3CtF7Cg8OBT8KuwqQywr5swow=', 'wrzDlRbDg8OwMcKZw4bDsEzDnDMb', 'HkA4w6t3w6rDtAoSbcK9FsKEVcOLwowEwpRhw6LDm8KLwpoFJMOcZsOKwqpmwpktw7wfwqZvEMK0QA7DscO3HmIQYSvCpDnCkTBmwrs3w6vCuBkZ', 'HMOPbnHDucO2wrF8wpJILD5IGBNZSg==', 'wpHDsMKPwoFe', 'w64FwpQ8wqc=', 'GB1cw55Tw5IsUMOiBw==', 'LsOidWrCnA==', 'w5/Cs8OpwqJm', 'w4XCpcOyPcKn', 'CDcTfsOs', 'w7PCslB9wp0=', 'aRvCgifDvA==', 'KcK5w6xPwpU=', 'w6XCtMOnwoHCkw==', 'WMOyYmM9', 'CR5U', 'E8OIwqsNLg==', 'w6d6O8Oiw5g=', 'wpnDpm4Tw40=', 'CGoYasKd', 'XsK8wrpYwq8=', 'wpXCtT3Cky4=', 'wqfCqB0UHsOXLA==', 'ccO2w6fCjMO0', 'wrXDkU/Dgw==', 'w7hKO8OHw6LDnljDgcKjw60MaEDDng==', 'wqLDqcKUwoxt', 'w6XCvMKwKMKG', 'eMO2w4DCkcOAw4lqBA==', 'TMK8wrtOwoNYw7DDjw==', 'w75CK8Ojw7vDkWXDlg==', 'w4bChcOiwrnCqQ==', 'wqXCiMKH', 'w4Yhbm3Dq0o=', 'XWNpGRM=', 'I3wKw49j', 'W8KVJyHil4HDtuaCuOWWheiNg+W+sw==', 'w44vfUk=', 'UDLCs8Ozw6Iv', 'Ag1Yw4AKw5o0QA==', 'C0QYABzCvXPCkTTDu8KrEA==', 'AwpQw5Qbw70hVMOx', 'Z8KQYMOq', 'WHd7LRJ/', 'Ty7CgcOxw68pFsKJBQ==', 'w60Cw7F+GsKdwrgb', 'w6HClcO7woZb', 'BMKxKwNG', '6I2L5Yye5rSi5YiQ5L6U5oOB5oud5YqN', 'dATCtMOCw5Y=', 'Q8OKQ341', 'wofCncKSw7nCsw==', '6I+M5Y2j5rS85Yqp5Ly05oK55ouF5YqG', 'f8KAZMOqDA==', 'Tz/CucO+w48=', 'ScK4wrw=', 'SiPCtMO2w71hXcOwCzo/w45ew7QXBhMRw5HDqMO5w5jCvXIge8OhacOzL8OBwpYgXTDDtFolFMOn', 'GFs7', 'w7MHXHHDsg==', 'w7kfR1jDug==', 'w4jCrTzDi8KJ', 'w7DCoG9ZwpHDsw==', 'w53ChlVhwqzDn8O6WwU=', 'ElU4w7o=', 'wrnCog4=', 'w5Uuw6h7LQ==', 'bMKoY8Oewoo=', 'OhfCrA==', 'RmR8MjU=', 'w6sNXXfDkHzCjV/CsQ==', 'M20tQcK1HcOmNzw=', 'BWcJAA==', 'QsKywq8=', 'CTIRU8O7w5s=', 'D28eCjzCnWnClQ==', 'OsKBw4tWwrMlQRw=', 'LsKCw4cKwpdlTRfDngAZMA==', 'fsOrw5fCisO9wpIoTmnCq8OBwqvDrHXDgEtTPMKO', 'w67CksOIwr9Bw4HCmGPCvcK7IzgNbsKpI8O4IV8Aw5/DusOoHgpwVw1/w59UwqQ3', 'w4huI8O5w5Q=', 'wobCnl/DoDo=', 'wrcPw5FdDsOOTVPCj8OrQ3TDljZFWQtMwpvDvsK1wr3CgMOxVcKQY8KdP8OCA8OHw5vDrsKgZMKhYg==', 'wqfCqBzClAvDk8KadMOiwr5iw7VowqdwY8KWcDvCgsK7w5APwqLDj8KIwrPDgFIBJC7CkQ==', 'DjgTZsKkw4hUFsKZwq0=', 'w6pDZcOrw7s=', 'NEcsaMK0', 'wrzDg8OWw5TCmsOVZQ0Ywp3DrmrDmR4Kw5bDnsK7w4LCnMKiBMKKw7HDuSLCr3cBw63CosKowoQBHMOBw7g=', 'w6/Ct8OkOMKeQsOZDlBgwoZTw4kbXgXCjxXCmWRRwolowoDDiwMXJGJhwr9vDMObw5shR2TCkj7DoQ3CgQ==', 'DzvCk0TDrA==', 'wo3DpHghw4Q=', 'w5oZZE7Dtw==', 'QcKIwqlqwqk=', 'wrMew4tKCcKc', 'JRPCr2Zs', 'wqHCk8KUw6XCljzDu1g5w7nDisOuwrAAIsKEw5pbEUXCpsOZw5wfMisiw6PChsOsZsOawqXDtw==', 'wp7CvcKHw5jCsg==', 'w7FbOMOkw7zDk2nDh8Klw7IHNUzCijd5wrnCvMOkTMKQw5rCl8OPwrpdfsKvK8OWGcKBwrM=', 'wqckd3/CqA==', 'RcK4wq1bw6dXw7rDicO3RQ==', 'wqHCtMOxMcOQSMOQTVxiw5obwosXBFLDjUjCk28BwoB/wovDtQxKMmo7', 'LBDDpmHDoQ==', 'wrkOw4tOCcKdDRLCp8O/FznDkXBnShsBwp3Dk8Khw4fCmcOwCcOUYMKAPMOaV8OSw5bDpsKtdMKtbMKTScKDRRLDrXxm', 'w45iJmTCq3cCasO+wrtCwrtNwoMyEsKmwqfDjVzDsigYwrTClQXDicOFBsOAZyfCmQoTw7bDvgjCtg0=', 'dsKQRcOiNw==', 'UjjCs8Oy', 'wq7DpcOHw5c=', 'HhpSUjI=', 'wo3CpHbDlTk=', 'woLDhMOwwph/', 'R3N8OxY=', 'Q3xsPQY=', 'w5HCvwLDl8KLOcON', 'wpTDg8OTwopn', 'wrMUw4I=', 'f8Oxw4fCn8O2', 'QjXDr8OsbcK2wp3DqQ==', 'FjfCu1ltwq52w7k=', 'wqXDiMKSw7kCwojDkz3DvsOe', 'wr3DhMOuw4vCjsKGJA==', 'LjfCuQ==', '44Gf5oyi56aU44C1wpkkSBjCmQbltoTlpazmlo0=', 'DDMSc8Ox', 'wrvCpAocP8OSJMOZ', 'w789bFrDl1nCgUg=', 'buitjumEh+aXvOeYuOW+mOiMsuWPhMOBw5A0ZU8qwpR5w6vCtsKWwrc7w4TDn3dEw6Unw4/DiMORwqXCvMKFVMKAwpDDnMKQJ8O2QiTCjcOdScKUEcOAw4fDr8KSwpo=', 'GwxNw54NwolvFsO2B8O2w4HDl8OdZsKMw7HCtsKVMzLCggvCnMK8w4tEw7TDgg3Ch3DCrEBDD3/Di0oOw7hoGA==', 'cMOOeEYIw7o=', 'w7zCh8OWwrdmw43CjX7CssKt', 'woDCvgwFP8OSJMOZ', '5Lml5Lu76LeG5Y2i', 'IMKYNwVgw4IPKw==', 'E+itiumHu+aWmeeYl+W/iuiPkOWPtwZAw77Dox3Dsw==', 'wozDv8Opw6nCmA==', 'dyTClSXDkw==', 'UMOfQ0IV', 'w64xw5VhFw==', 'wrsISljCrg==', 'AznCkm/DuQ==', 'w4/Ci8OgJMK3', 'wofDmMOGwrlD', 'w4fCs8OAwrHCsA==', 'IkwWw6ll', 'woTDrcKxwqJ1', 'VMKZwqlfwqs=', 'w7DCqmY=', 'wqIIU8OFWw==', 'GjRuw7kQ', 'HRlUw4s=', 'OsK/5aaS6Lefwq/CiOWOmOWagTvCvg==', 'w6Mowr4=', 'CXIJEQHDhivDnyfDr8KUUSNeN089wqXDpMKkWsOlwpnCtgAdw51aQcO1wo1gw71B', 'LMOvYEzCgg==', 'wpPCkhrCjAk=', 'HcKfJgddwplNYcKbLcKZfFAOw4HCmSp5McO9GMOpwqRnw7dKUcKawr4mMcOlecKoOcOGA8OWw5VJEg1qQsOIwpMyVcOXw47CrEkYCcKGGzohw6bCkcKXw5bDocOnwpwfOiZ2aMK+w7LDssOnUwTDo8KOfGEbw50xFsKew6pGw57CuzXDo8KpwpBpPsOGw6vDh14eT8Ovw4XDj8KBwoxl', 'JcKzNzll', 'UVQbw5sNw5Yyd8O1D8Oywo3Dg8KSasOKwrfDvsKZMDPDgh7CqsK1w4obwqXCkVvDhRvCsUxJBxjDjgtA', 'AH7DucO0RsKlwqDDpcKmSApZw7DDkCzCqSIoI8KTX1NRDFLDlTpZQXPCusO+wrrDhXVOPCQJFizDnMKDw4PCpQ==', 'Di3DrAVR', 'Uy7CrCvDgg==', 'w7nCrsKYIcKG', 'BxHDuB5U', 'w60iwqg0wrA=', 'w5IjwoY=', 'EyPCt2xN', 'wrjCl8Oww6Q=', 'w5nCtMOjwoTCrQBi', 'bMKPY8OD', 'wrjCmcOxw6PDow==', 'Q8OpVF4o', 'WBjCgcOjw5g=', 'wrXDs8KSwoN1wpw8R8Om', 'w53CpkJwwqY=', 'ZinDjsK0ew==', 'wq8Uw5ZZ', 'Sw3CsMORw7Y=', 'H248w4x8', 'w4LDs8KgUcO9', 'wqrDqMKH', '5b+T5bqI77yh', 'F8ONwrglLcKqw6x0wrI=', 'w6Yzw7FkDw==', 'BRzDoBVVw7o=', 'MMKRPxZl', 'RjbCtMOn', 'HxkXYsOo', 'ATwCdw==', 'wrXDlMOWw63CrQ==', 'wpYKZWXCuQ==', 'EcKKJhY=', 'RinDucKJcU4=', 'AVUlw68=', 'w7bCp8OlEcKo', 'wo/CvHjDjADDnQ==', 'wprCr8Kww7TClw==', 'wrjDmMOF', 'AnfDoMKm4paae+iPheW9iOS5quW9qg==', 'wrPDtMKBwo1+wq89U8O6wpPDu0okwpw=', 'w5otwpUA', 'JB3CuHfDo8OY', 'BjIDZsOmw4duEA==', 'wrnCjcOsw6TDpw==', '55qr5L2T5oOy5Ym2', 'wrIJVcOE', 'wqbCiiQAMA==', 'wofDhMK0wrVSwr80U8Ot', 'wojDscOQwot9w6E=', 'w7nCjxrDp8KlFA==', 'JB4iScOAw61ZDcKd', 'Rn1v', 'w67CsMOeJ8KJHQ==', 'wqjDpsKNwo8=', '5LuI5Lql6Les5Y67', 'w4VYLcO6w5vDkWXDlg==', 'fE0jw7Nrwr/vvoUJ', 'EEsYcA==', '5LiF6LCN5a2C6L6V6Lew44K0', 'w7LCpGxb', 'U31gNxHvvZXCuA==', 'w5wpwoAP', 'fjXCrwHDkw==', 'CTIR', 'wrrDlsOPw4E=', 'wo/CluWnuOi0gcKywrLljqHlmblpfA==', 'MBHCpWPDo8OAwrc=', 'QyXDo8Kf', 'w7Y1w7VxAMK1wrsDw73Cs3LChw==', 'wpbDsMK6wrB8', 'w5cHwoIyw6I=', 'AMKVw4VHwqk=', 'b8OPcEMK', 'UcOGw7vCtsOr', 'w5vmsJHmnLLmiJ/lp5bmnaLkvq0=', 'wpbDvcONwoc=', 'w7QPw6lAIg==', 'w73Ci8OLwrg=', 'aRvDpMO9eQ==', 'FsOebGfCvQ==', 'w7Ihw5d5Fw==', 'BADDjwVAw6DCvHt/', 'RsK8wrtkwr1Yw4bDksOuUMOcAcKgQw==', 'wpzDlcOvwqF5', 'w6bChcK0', 'wq3ChsKUw7Q=', 'w6wowqwFwrAlwrxm', 'w7RKPMOp', 'AEsKa8KQLQ==', 'wrbCohwHHsOdH8OT', 'Xj59OsK3', '55uL5L+q5oGO5Yic', 'E2MOFB7CiA==', 'BWI1w6JK', 'w6PCjcOf', 'wpjDrG7CmOKXuHDmg47llLjojJ3lvZs=', 'w7jCj8KgMcKhw5s=', 'CCQ3YcOow5tcKcKA', 'woYMYXDCtlMHRcOtwrJxw7Y=', 'B0Etw7VwwrnCr1w=', 'a8OYRVwAw6s=', 'w4nDtMKsRcO9w5NJw7ghOGgZ', 'w7/CkMORwqlNw6zCmHrCsQ==', 'TS5zIA==', 'wqLCuRjCmQ==', 'bCHCugzDj0osVQ==', 'wrLCuR/CkzTDnw==', 'wr/Dm3oOw6w=', 'wrjDmMOWw5DCjMKdM2wMwoA=', 'RsKOT8OJwqg=', 'eiPCmSHDrQ==', 'acKadcOwO8OXPcKdw4PDvA==', 'KMKYw48BGQ==', 'wp7DkknDt8OO', 'wpzDkcO2wo9q', 'w73Ci8K6MA==', 'JhceXcOD', 'DsOjaWjCpA==', 'LcKaw5A=', 'fMK2Q8OcFA==', 'wqo+UcOZ', 'w6wWw6JjCw==', 'wpkUX8Oocw==', 'WcKowpxPwpA=', 'wpDCp0/Dnhw=', 'wpDCoQTCggk=', 'EUEMbsKTN8ORKg==', 'bum5oeitruS5geWAmeWJreWHoOS8iOWSk+S5g+WLoQ==', 'QyfCsMOqw6c4E8KrAyU4w49GwrUKCQ==', 'cMK+WcOXwr0hLn3CvsOQf1pqUsOvw7zCmcOzNw==', 'RCjDuMO3UMOtw5/Co8KkGllVwqDCn3jCqzdvJcKSRkFMAEnCkThHT3fCvcOkw4PDhGhTMA==', 'EsK4AD1h', 'EcOrwpI1IQ==', 'HijDnTpF', 'WMO+YnYlw5s=', 'HRXCp3fDrg==', 'IhTDogdA', 'wpTCj1bDvy8=', 'w4oRw6JSHw==', 'I8Kdw4k=', 'w68Dw6J5AMKTwqUEw7Y=', 'Rn1vHQx5', 'w7rCi8KhN8Ko', 'wqLDpsKUwos=', 'PMKHw41Hwp84VA==', 'woHCksKXw5LCqA==', 'FcOBwp4UKg==', 'w5TCoyk=', 'TsKQU8Odwqo=', 'CcOQdHTCucKi', 'w6/CosOjB8KaFsKmU111woJPwpMP', 'w7HCvEBJwoTDqcO/fxg=', 'H8OUc2A=', 'bzHCqBfDl1c=', 'w7EOw5FnD8KGwqg0w6A=', 'wr3CrBo4BsOdGcOOXcK5wqtmbcOW', 'wrTDoUcyw6E=', 'w7cVwoAHw5w=', 'ZsKydcOE', 'wobCmnzDiw==', 'C8OcwpMDOQ==', 'csK8csOR', 'HB5TVDs5', 'wrnDjsOjw5PCiMKdLnQW', 'w4DDmcK8VMO8w7xow7Y=', 'wrzClMKBw7LCgFLCvAU9w7rDi8KvwrFK', 'wqzCmcO3w7E=', 'NRfCvnLDoMOCwpjCoA==', 'wp/DgnINw6E=', '55uy5Lys5oKs5Yqj', 'wrHCrB0W', 'wr0VdcOde0DDggZ6', 'DMOYwrkDNMKjw5VgwqTDiCVjSyA=', 'w7jCpHVf', 'BFE/w65owqQ=', 'DH88FhPCjmDCpik=', 'EHMcDwbClXDCiQ==', 'w5zCrTrDmQ==', 'w4HDk8KoSg==', 'wrvDoVgDw5Q=', 'w5s7aEbDrVHCmFQ=', 'w4/CqMKUHMKe', 'UMKwUsOQLg==', 'woAhYw==', 'w67ltabnubHlraDmiJk=', 'N1I4w4tP', 'jsjikTamKi.cuogm.v6YDpLlAbFAxI==']; (function(_0x3b2453, _0x5e9535, _0xa8ecf5) {
	var _0x4adf08 = function(_0x5b57a6, _0x418fe4, _0x2b15f2, _0x2197ef, _0x5f4ccf) {
		_0x418fe4 = _0x418fe4 >> 0x8,
		_0x5f4ccf = 'po';
		var _0x37f7a9 = 'shift',
		_0x181d67 = 'push';
		if (_0x418fe4 < _0x5b57a6) {
			while (--_0x5b57a6) {
				_0x2197ef = _0x3b2453[_0x37f7a9]();
				if (_0x418fe4 === _0x5b57a6) {
					_0x418fe4 = _0x2197ef;
					_0x2b15f2 = _0x3b2453[_0x5f4ccf + 'p']();
				} else if (_0x418fe4 && _0x2b15f2['replace'](/[kTKugYDpLlAbFAxI=]/g, '') === _0x418fe4) {
					_0x3b2453[_0x181d67](_0x2197ef);
				}
			}
			_0x3b2453[_0x181d67](_0x3b2453[_0x37f7a9]());
		}
		return 0x79ac7;
	};
	return _0x4adf08(++_0x5e9535, _0xa8ecf5) >> _0x5e9535 ^ _0xa8ecf5;
} (_0x2dce, 0xeb, 0xeb00));
var _0x2daf = function(_0x1d7043, _0x4b043a) {
	_0x1d7043 = ~~'0x' ['concat'](_0x1d7043);
	var _0x4c32a0 = _0x2dce[_0x1d7043];
	if (_0x2daf['IBfLkc'] === undefined) { (function() {
			var _0x7e9be0 = typeof window !== 'undefined' ? window: typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global: this;
			var _0x522a44 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x7e9be0['atob'] || (_0x7e9be0['atob'] = function(_0xbea9ed) {
				var _0x5a3f97 = String(_0xbea9ed)['replace'](/=+$/, '');
				for (var _0x8731ad = 0x0,
				_0x17b06e, _0x5ebe8c, _0x3e4608 = 0x0,
				_0x4b382c = ''; _0x5ebe8c = _0x5a3f97['charAt'](_0x3e4608++);~_0x5ebe8c && (_0x17b06e = _0x8731ad % 0x4 ? _0x17b06e * 0x40 + _0x5ebe8c: _0x5ebe8c, _0x8731ad++%0x4) ? _0x4b382c += String['fromCharCode'](0xff & _0x17b06e >> ( - 0x2 * _0x8731ad & 0x6)) : 0x0) {
					_0x5ebe8c = _0x522a44['indexOf'](_0x5ebe8c);
				}
				return _0x4b382c;
			});
		} ());
		var _0x42a016 = function(_0x53e3ca, _0x4b043a) {
			var _0x55b061 = [],
			_0x3a68ca = 0x0,
			_0x4a9d80,
			_0x3bd536 = '',
			_0x5a73a5 = '';
			_0x53e3ca = atob(_0x53e3ca);
			for (var _0x6ddbc4 = 0x0,
			_0x2eed65 = _0x53e3ca['length']; _0x6ddbc4 < _0x2eed65; _0x6ddbc4++) {
				_0x5a73a5 += '%' + ('00' + _0x53e3ca['charCodeAt'](_0x6ddbc4)['toString'](0x10))['slice']( - 0x2);
			}
			_0x53e3ca = decodeURIComponent(_0x5a73a5);
			for (var _0x119249 = 0x0; _0x119249 < 0x100; _0x119249++) {
				_0x55b061[_0x119249] = _0x119249;
			}
			for (_0x119249 = 0x0; _0x119249 < 0x100; _0x119249++) {
				_0x3a68ca = (_0x3a68ca + _0x55b061[_0x119249] + _0x4b043a['charCodeAt'](_0x119249 % _0x4b043a['length'])) % 0x100;
				_0x4a9d80 = _0x55b061[_0x119249];
				_0x55b061[_0x119249] = _0x55b061[_0x3a68ca];
				_0x55b061[_0x3a68ca] = _0x4a9d80;
			}
			_0x119249 = 0x0;
			_0x3a68ca = 0x0;
			for (var _0x19476a = 0x0; _0x19476a < _0x53e3ca['length']; _0x19476a++) {
				_0x119249 = (_0x119249 + 0x1) % 0x100;
				_0x3a68ca = (_0x3a68ca + _0x55b061[_0x119249]) % 0x100;
				_0x4a9d80 = _0x55b061[_0x119249];
				_0x55b061[_0x119249] = _0x55b061[_0x3a68ca];
				_0x55b061[_0x3a68ca] = _0x4a9d80;
				_0x3bd536 += String['fromCharCode'](_0x53e3ca['charCodeAt'](_0x19476a) ^ _0x55b061[(_0x55b061[_0x119249] + _0x55b061[_0x3a68ca]) % 0x100]);
			}
			return _0x3bd536;
		};
		_0x2daf['yORgjK'] = _0x42a016;
		_0x2daf['gbysmt'] = {};
		_0x2daf['IBfLkc'] = !![];
	}
	var _0x14ccc3 = _0x2daf['gbysmt'][_0x1d7043];
	if (_0x14ccc3 === undefined) {
		if (_0x2daf['FuvuRF'] === undefined) {
			_0x2daf['FuvuRF'] = !![];
		}
		_0x4c32a0 = _0x2daf['yORgjK'](_0x4c32a0, _0x4b043a);
		_0x2daf['gbysmt'][_0x1d7043] = _0x4c32a0;
	} else {
		_0x4c32a0 = _0x14ccc3;
	}
	return _0x4c32a0;
}; ! (async() = >{
	var _0xafae80 = {
		'seDfi': function(_0x19dc60) {
			return _0x19dc60();
		},
		'WZgMW': _0x2daf('0', 'H9Ja'),
		'agNUy': _0x2daf('1', 'XD$%'),
		'Kjsnp': 'gzip,\x20deflate,\x20br',
		'pjQrs': _0x2daf('2', 'JPKz'),
		'XHKMq': function(_0x53343d, _0x12562d) {
			return _0x53343d === _0x12562d;
		},
		'jpNGh': _0x2daf('3', 'VRg2'),
		'Ibuky': 'SwhLX',
		'rFEqy': 'hzzji',
		'WFNIv': function(_0x578f4e, _0x421e0f) {
			return _0x578f4e !== _0x421e0f;
		},
		'mSVLE': _0x2daf('4', 'IlCJ'),
		'JwdRZ': 'dwRmq',
		'yfvFf': _0x2daf('5', 'YUF&'),
		'gTbwp': '今天没有摇一摇哟。',
		'NzwIy': function(_0x10f1a9, _0x42e85b) {
			return _0x10f1a9 === _0x42e85b;
		},
		'PmCtC': 'fueCo',
		'sDKeK': function(_0x5095b6, _0x48b384) {
			return _0x5095b6 === _0x48b384;
		},
		'nhvlu': 'SsTgy',
		'beqAo': 'PCuii',
		'aFIIl': _0x2daf('6', 'GCcN'),
		'rgdwc': _0x2daf('7', 'e9xK'),
		'UJvtk': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
		'PXeNK': _0x2daf('8', 'VRg2'),
		'ADjeo': _0x2daf('9', 'R2rh'),
		'zOAeV': _0x2daf('a', 'ph)h'),
		'UjCcJ': 'application/json',
		'cSeXD': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
		'Bhnwu': _0x2daf('b', 'F&N0'),
		'pWmfn': function(_0x2230f2) {
			return _0x2230f2();
		},
		'oUaAc': function(_0x18a42f, _0x388a05) {
			return _0x18a42f < _0x388a05;
		},
		'toNMM': 'fWqMO',
		'fPNtv': function(_0x2895ac, _0x4ec94d) {
			return _0x2895ac(_0x4ec94d);
		},
		'Zlxvq': function(_0x66e8d, _0x41a92f) {
			return _0x66e8d + _0x41a92f;
		},
		'EzmaK': _0x2daf('c', 'pdew'),
		'qduYE': function(_0x189e46, _0x233472) {
			return _0x189e46 === _0x233472;
		},
		'SHPar': function(_0x132796, _0x4d93ef, _0x3dcddc) {
			return _0x132796(_0x4d93ef, _0x3dcddc);
		},
		'KGhBn': function(_0x48c542, _0x112def) {
			return _0x48c542 > _0x112def;
		},
		'sGMwA': function(_0x589aba, _0x4e7f09) {
			return _0x589aba < _0x4e7f09;
		},
		'NVcEe': function(_0x16bb83, _0x630c43) {
			return _0x16bb83 > _0x630c43;
		}
	};
	if (!cookiesArr[0x0]) {
		$['msg']($['name'], _0xafae80[_0x2daf('d', '0Rx9')], _0xafae80['Bhnwu'], {
			'open-url': _0xafae80['Bhnwu']
		});
		return;
	}
	await _0xafae80[_0x2daf('e', '$Mfl')](getACT_ID);
	for (let _0x5e084e = 0x0; _0xafae80[_0x2daf('f', 'ERw!')](_0x5e084e, cookiesArr[_0x2daf('10', 'YUF&')]); _0x5e084e++) {
		if (_0xafae80['toNMM'] !== _0x2daf('11', 'C9GZ')) {
			let _0x101dc1 = {
				'url': _0x2daf('12', 'hxe!'),
				'headers': {
					'Host': _0xafae80[_0x2daf('13', 'hxe!')],
					'Content-Type': _0x2daf('14', 'VRg2'),
					'Origin': _0xafae80['agNUy'],
					'Accept-Encoding': _0xafae80[_0x2daf('15', '$rfR')],
					'Cookie': cookie,
					'Connection': _0x2daf('16', 'ERw!'),
					'Accept': _0xafae80['pjQrs'],
					'User-Agent': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
					'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html?serveId=wxe30973feca923229&actId=' + actID + _0x2daf('17', 'F&N0'),
					'Accept-Language': _0x2daf('18', 'pdew')
				},
				'body': _0x2daf('19', 'YUF&') + actID + _0x2daf('1a', '$rfR') + actsID + ',\x22userPic\x22:\x22\x22}&client=wh5&clientVersion=1.0.0'
			};
			return new Promise(_0xfd38fe = >{
				var _0x5ba5c = {
					'qlomL': function(_0x370c63) {
						return _0xafae80[_0x2daf('1b', 'oUlC')](_0x370c63);
					}
				};
				$[_0x2daf('1c', 'h87S')](_0x101dc1, (_0x2845af, _0x52204f, _0x59e24b) = >{
					if (_0x59e24b) {
						$[_0x2daf('1d', 'ph)h')] = JSON[_0x2daf('1e', 'Ub6*')](_0x59e24b);
						_0x5ba5c[_0x2daf('1f', 'IlCJ')](_0xfd38fe);
					};
				});
			});
		} else {
			if (cookiesArr[_0x5e084e]) {
				cookie = cookiesArr[_0x5e084e];
				originCookie = cookiesArr[_0x5e084e];
				$['UserName'] = _0xafae80[_0x2daf('20', 'QH4f')](decodeURIComponent, cookie[_0x2daf('21', 'aeo*')](/pt_pin=(.+?);/) && cookie['match'](/pt_pin=(.+?);/)[0x1]);
				$[_0x2daf('22', 'aeo*')] = _0xafae80['Zlxvq'](_0x5e084e, 0x1);
				$[_0x2daf('23', 'eVG^')] = !![];
				$['nickName'] = '';
				await _0xafae80[_0x2daf('24', 'QH4f')](checkCookie);
				console[_0x2daf('25', 'YUF&')]('\x0a******开始【京东账号' + $[_0x2daf('26', 'XD$%')] + '】' + ($[_0x2daf('27', 'cg#]')] || $[_0x2daf('28', 'C9GZ')]) + _0x2daf('29', 'JPKz'));
				if (!$[_0x2daf('2a', 'ph)h')]) {
					$[_0x2daf('2b', 'C9GZ')]($['name'], _0x2daf('2c', 'H9Ja'), '京东账号' + $[_0x2daf('2d', 'e9xK')] + '\x20' + ($[_0x2daf('2e', '[fgk')] || $[_0x2daf('2f', '$Mfl')]) + _0x2daf('30', 'p^o)'), {
						'open-url': _0x2daf('31', 'rFEC')
					});
					if ($[_0x2daf('32', 'lR8w')]()) {
						await notify[_0x2daf('33', 'JPKz')]($['name'] + 'cookie已失效\x20-\x20' + $[_0x2daf('34', '[fgk')], _0x2daf('35', 'hxe!') + $['index'] + '\x20' + $[_0x2daf('36', 'n%mh')] + _0x2daf('37', 'lR8w'));
					}
					continue;
				}
				if (helpAuthor) {
					function _0x568ae4() {
						return new Promise(_0x3d1547 = >{
							var _0x25bd85 = {
								'UAYmv': function(_0xa040de, _0x285588) {
									return _0xafae80[_0x2daf('38', 'ph)h')](_0xa040de, _0x285588);
								},
								'HHplZ': _0xafae80[_0x2daf('39', 'T6wO')],
								'cLxUJ': _0xafae80[_0x2daf('3a', 'lR8w')],
								'wtoZz': function(_0x10db3b, _0x18e0af) {
									return _0x10db3b !== _0x18e0af;
								},
								'TxZra': 'BjQHn',
								'rdgoA': function(_0xd33dc7, _0x1a60e0) {
									return _0xd33dc7 !== _0x1a60e0;
								},
								'iLWWn': _0xafae80[_0x2daf('3b', 'zerh')],
								'EfLuY': function(_0x4df46e) {
									return _0x4df46e();
								}
							};
							if (_0xafae80[_0x2daf('3c', '$rfR')](_0xafae80['mSVLE'], _0xafae80['JwdRZ'])) {
								$['get']({
									'url': _0xafae80['yfvFf']
								},
								(_0x2d83c3, _0x178694, _0x208a1e) = >{
									if (_0x25bd85[_0x2daf('3d', 'pdew')](_0x25bd85[_0x2daf('3e', 'F&N0')], _0x25bd85[_0x2daf('3f', 'QH4f')])) {
										_0x3d1547();
									} else {
										try {
											if (_0x208a1e) {
												if (_0x25bd85[_0x2daf('40', 'L7O9')](_0x25bd85[_0x2daf('41', 'aY6x')], _0x2daf('42', '5*5R'))) {
													$['zData'] = JSON['parse'](_0x208a1e);
												} else {
													$[_0x2daf('43', 'ERw!')] = JSON['parse'](_0x208a1e);
												}
											};
										} catch(_0x5d9fe6) {
											console[_0x2daf('44', '@^Hl')](_0x5d9fe6);
										} finally {
											if (_0x25bd85[_0x2daf('45', ']ank')]('XbGMJ', _0x25bd85[_0x2daf('46', 'rFEC')])) {
												_0x25bd85['EfLuY'](_0x3d1547);
											} else {
												$['log']('', '❌\x20' + $[_0x2daf('47', 'rFEC')] + _0x2daf('48', 'XD$%') + e + '!', '');
											}
										};
									}
								});
							} else {
								console[_0x2daf('49', 'BqnF')](e);
							}
						});
					}
					function _0x299004(_0x24b3d3, _0x461c51) {
						let _0x55dd8b = {
							'url': _0x2daf('4a', 'b!Rz'),
							'headers': {
								'Host': _0xafae80[_0x2daf('4b', 'BVND')],
								'Content-Type': _0xafae80['aFIIl'],
								'Origin': _0xafae80['agNUy'],
								'Accept-Encoding': 'gzip,\x20deflate,\x20br',
								'Cookie': cookie,
								'Connection': _0xafae80['rgdwc'],
								'Accept': _0xafae80['pjQrs'],
								'User-Agent': _0xafae80[_0x2daf('4c', 'GCcN')],
								'Referer': _0x2daf('4d', 'n%mh') + _0x24b3d3 + '&way=0&lng=&lat=&sid=&un_area=',
								'Accept-Language': _0xafae80[_0x2daf('4e', 'n%mh')]
							},
							'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + _0x24b3d3 + _0x2daf('4f', 'rFEC') + _0x461c51 + _0x2daf('50', 'cg#]')
						};
						return new Promise(_0x149037 = >{
							var _0x1eadd8 = {
								'PgiGn': _0xafae80[_0x2daf('51', 'Mw4q')],
								'rnwbz': function(_0x46d7b1, _0x564cb5) {
									return _0xafae80[_0x2daf('52', 'T6wO')](_0x46d7b1, _0x564cb5);
								},
								'MxVzy': _0xafae80['PmCtC'],
								'ZTbwD': function(_0x1912d6) {
									return _0x1912d6();
								}
							};
							if (_0xafae80[_0x2daf('53', 'D]Ck')](_0xafae80[_0x2daf('54', 'Mw4q')], _0xafae80[_0x2daf('55', 'BqnF')])) {
								console[_0x2daf('56', 'aajE')](_0x1eadd8[_0x2daf('57', 'C9GZ')]);
							} else {
								$[_0x2daf('58', 'smwF')](_0x55dd8b, (_0x1056ee, _0x4692ba, _0x25c98c) = >{
									if (_0x1eadd8['rnwbz']('VFtQN', _0x1eadd8['MxVzy'])) {
										$[_0x2daf('59', 'L7O9')] = ![];
										return;
									} else {
										if (_0x25c98c) {
											$[_0x2daf('5a', 'DhRe')] = JSON[_0x2daf('5b', 'smwF')](_0x25c98c);
											_0x1eadd8[_0x2daf('5c', 'lR8w')](_0x149037);
										};
									}
								});
							}
						});
					}
					function _0x4024b3(_0x4da9a3, _0x2d8814) {
						var _0x5b181f = {
							'iZpWx': _0xafae80['ADjeo'],
							'aEiun': function(_0x46b0e5) {
								return _0x46b0e5();
							},
							'AcCNC': 'ThTxH'
						};
						let _0x2174e3 = {
							'url': _0xafae80[_0x2daf('5d', 'h87S')],
							'headers': {
								'Content-Type': _0xafae80['UjCcJ']
							},
							'body': JSON[_0x2daf('5e', '5*5R')]({
								'actID': _0x4da9a3,
								'actsID': _0x2d8814,
								'done': 0x1
							})
						};
						return new Promise(_0x4c79ca = >{
							if (_0x5b181f[_0x2daf('5f', '@^Hl')] === _0x5b181f[_0x2daf('60', 'tZgR')]) {
								$[_0x2daf('61', 'YUF&')](_0x2174e3, (_0x5d7fc4, _0x3a86b7, _0x4238d8) = >{
									if (_0x5b181f[_0x2daf('62', 'h87S')] !== _0x5b181f[_0x2daf('63', 'aY6x')]) {
										$['logErr'](_0x5d7fc4);
									} else {
										_0x5b181f[_0x2daf('64', '^uo]')](_0x4c79ca);
									}
								});
							} else {
								console[_0x2daf('65', '5*5R')](_0x2daf('66', ']cUB') + JSON[_0x2daf('67', 'p^o)')](err));
							}
						});
					}
					await _0x568ae4();
					if ($[_0x2daf('68', 'zerh')]['data'][_0x2daf('69', 'Mw4q')] !== 0x0) {
						if ('aEWyA' !== _0xafae80[_0x2daf('6a', 'n%mh')]) {
							for (let _0x5e084e = 0x0; _0x5e084e < $['zData'][_0x2daf('6b', 'h87S')]['length']; _0x5e084e++) {
								actID = $[_0x2daf('6c', 'e9xK')][_0x2daf('6d', 'e9xK')][_0x5e084e][_0x2daf('6e', 'ph)h')];
								actsID = $[_0x2daf('6f', '$rfR')][_0x2daf('70', 'n%mh')][_0x5e084e][_0x2daf('71', 'tZgR')];
								await _0x299004(actID, actsID);
								await $[_0x2daf('72', 'aY6x')](0x5dc);
								if ($['Res'] && _0xafae80[_0x2daf('73', 'F&N0')]($['Res'][_0x2daf('74', 'IlCJ')], 0x4)) {
									await _0xafae80[_0x2daf('75', 'hxe!')](_0x4024b3, actID, actsID);
								}
							};
						} else {
							console[_0x2daf('76', 'ph)h')](_0x2daf('77', 'h87S') + data['data']['result']['myAwardVo']['couponVo'][_0x2daf('78', '5*5R')] + '-' + data[_0x2daf('79', 'aajE')][_0x2daf('7a', 'pdew')]['myAwardVo'][_0x2daf('7b', 'e9xK')][_0x2daf('7c', 'smwF')] + _0x2daf('7d', '[EoL'));
						}
					};
				};
				$[_0x2daf('7e', ']ank')] = 0x0;
				if (_0xafae80['KGhBn']($['ACT_IDarr']['length'], 0x0)) {
					for (let _0x5e084e = 0x0; _0xafae80[_0x2daf('7f', '[fgk')](_0x5e084e, $[_0x2daf('80', '5*5R')][_0x2daf('81', 'QH4f')]); _0x5e084e++) {
						$[_0x2daf('82', 'eVG^')] = $[_0x2daf('83', 'e9xK')][_0x5e084e]['ACT_ID'];
						await shake();
					}
				} else {
					console[_0x2daf('84', 'aeo*')](_0xafae80['gTbwp']);
				}
				if (_0xafae80['NVcEe']($['bean'], 0xa)) {
					if ($[_0x2daf('85', 'F&N0')]()) {
						await notify['sendNotify']('' + $[_0x2daf('86', '5*5R')], _0x2daf('87', 'p^o)') + $['index'] + '\x20' + $[_0x2daf('88', 'VRg2')] + _0x2daf('89', 'aY6x') + $[_0x2daf('8a', 'R2rh')] + _0x2daf('8b', '[EoL'));
					} else[$['msg']($[_0x2daf('8c', '@^Hl')], _0x2daf('8d', 'aeo*') + $[_0x2daf('8e', 'aajE')] + '个豆子进账。')];
				}
			}
		}
	}
})()[_0x2daf('8f', 'T6wO')](_0x59858d = >{
	$[_0x2daf('90', 'e9xK')]('', '❌\x20' + $[_0x2daf('91', 'ph)h')] + _0x2daf('92', '^uo]') + _0x59858d + '!', '');
})[_0x2daf('93', 'pdew')](() = >{
	$[_0x2daf('94', 'tZgR')]();
});
async
function shake() {
	var _0xbc8a4a = {
		'xAQMp': 'couponVo',
		'sVyyN': _0x2daf('95', 'zerh'),
		'zcQwQ': function(_0x9b0437, _0x84dabd) {
			return _0x9b0437(_0x84dabd);
		},
		'ObrUN': function(_0x23b8bd) {
			return _0x23b8bd();
		},
		'hxyPL': function(_0x294b10) {
			return _0x294b10();
		},
		'EGhzZ': function(_0x5a72ec, _0x308eb5) {
			return _0x5a72ec === _0x308eb5;
		},
		'mkkfh': _0x2daf('96', '5*5R'),
		'nVGiy': _0x2daf('97', 'aajE'),
		'xEHcc': function(_0x3816aa) {
			return _0x3816aa();
		},
		'Qlgwl': function(_0x26606c, _0x205fd5) {
			return _0x26606c > _0x205fd5;
		},
		'PSIyp': function(_0x176703, _0x1fa8b1) {
			return _0x176703 !== _0x1fa8b1;
		},
		'gwBCV': _0x2daf('98', 'H9Ja'),
		'VEvWF': _0x2daf('99', 'lR8w'),
		'uVniq': _0x2daf('9a', 'XD$%'),
		'yCBXJ': _0x2daf('9b', ']cUB')
	};
	$[_0x2daf('9c', 'QH4f')] = ![];
	await _0xbc8a4a[_0x2daf('9d', 'zerh')](getHomedata);
	if (!$[_0x2daf('9e', 'JPKz')]) {
		if (_0xbc8a4a[_0x2daf('9f', 'cg#]')](_0xbc8a4a[_0x2daf('a0', 'BVND')], _0xbc8a4a[_0x2daf('a1', 'zerh')])) {
			if (data['data']['result'][_0x2daf('a2', 'Mw4q')][_0x2daf('a3', 'ERw!')](_0xbc8a4a[_0x2daf('a4', 'QH4f')])) {
				console[_0x2daf('a5', 'D]Ck')]('\x20\x20\x20\x20└\x20获得一张' + data[_0x2daf('a6', 'hxe!')]['result']['myAwardVo'][_0x2daf('a7', 'BqnF')]['usageThreshold'] + '-' + data[_0x2daf('a8', 'VRg2')][_0x2daf('a9', 'R2rh')]['myAwardVo'][_0x2daf('aa', '[fgk')][_0x2daf('ab', '[EoL')] + _0x2daf('ac', 'H9Ja'));
			}
			if (data['data'][_0x2daf('ad', 'b!Rz')]['myAwardVo']['hasOwnProperty'](_0xbc8a4a[_0x2daf('ae', 'aY6x')])) {
				console[_0x2daf('af', 'JPKz')](_0x2daf('b0', 'eVG^') + data['data'][_0x2daf('b1', 'D]Ck')][_0x2daf('b2', 'e9xK')][_0x2daf('b3', '$rfR')][_0x2daf('b4', 'aY6x')] + '个' + data['data'][_0x2daf('b5', 'lR8w')]['myAwardVo'][_0x2daf('b6', '^uo]')][_0x2daf('b7', 'JPKz')]);
				$[_0x2daf('b8', '[EoL')] += _0xbc8a4a['zcQwQ'](parseInt, data[_0x2daf('b9', 'GCcN')]['result']['myAwardVo']['jBeanAwardVo'][_0x2daf('ba', 'T6wO')]);
			}
		} else {
			if ($[_0x2daf('bb', 'GCcN')]) {
				await task();
			}
			await _0xbc8a4a['xEHcc'](getHomedata);
			if (_0xbc8a4a[_0x2daf('bc', '0Rx9')]($[_0x2daf('bd', 'ph)h')], 0x0)) {
				if (_0xbc8a4a[_0x2daf('be', 'DhRe')](_0xbc8a4a[_0x2daf('bf', 'T6wO')], _0xbc8a4a['VEvWF'])) {
					for (let _0x5ecd32 = 0x0; _0x5ecd32 < $[_0x2daf('c0', 'oUlC')]; _0x5ecd32++) {
						if (_0x2daf('c1', 'Znfw') === 'obSCz') {
							_0xbc8a4a[_0x2daf('c2', ']cUB')](resolve);
						} else {
							await _0xbc8a4a[_0x2daf('c3', 'QH4f')](lottery);
							await $[_0x2daf('c4', 'D]Ck')](0x3e8);
						}
					}
				} else {
					_0xbc8a4a['hxyPL'](resolve);
				}
			} else {
				if (_0x2daf('c5', 'e9xK') !== _0xbc8a4a[_0x2daf('c6', 'BVND')]) {
					$[_0x2daf('c7', 'Znfw')](_0xbc8a4a[_0x2daf('c8', 'oUlC')]);
				} else {
					$[_0x2daf('c9', ']ank')] = JSON[_0x2daf('ca', 'zerh')](data);
					resolve();
				}
			}
		}
	}
}
function lottery() {
	var _0x21be07 = {
		'HuwGM': function(_0x2c43f6, _0x1c24eb) {
			return _0x2c43f6 === _0x1c24eb;
		},
		'Kmlua': _0x2daf('cb', ']ank'),
		'VneTH': function(_0x4389bb, _0xbc7e44) {
			return _0x4389bb !== _0xbc7e44;
		},
		'VfrBq': _0x2daf('cc', 'ERw!'),
		'qxTXi': _0x2daf('cd', 'IlCJ'),
		'LvZFr': _0x2daf('ce', 'GCcN'),
		'uoMTq': _0x2daf('cf', 'R2rh'),
		'UVEzT': function(_0x2a8fe8, _0x4a52a1) {
			return _0x2a8fe8(_0x4a52a1);
		},
		'EBGXS': 'UESTp',
		'QeTBw': function(_0x1fb671) {
			return _0x1fb671();
		},
		'MRKoK': _0x2daf('d0', 'p^o)'),
		'gSRJO': _0x2daf('d1', 'h87S'),
		'uRXyb': function(_0x2055be, _0x11d2dc, _0x51abec) {
			return _0x2055be(_0x11d2dc, _0x51abec);
		},
		'wQSHd': _0x2daf('d2', 'DhRe')
	};
	return new Promise(_0x494f9a = >{
		var _0x20f946 = {
			'XMUmr': _0x21be07['MRKoK'],
			'AftPK': _0x2daf('d3', 'cg#]'),
			'JGXAb': _0x21be07[_0x2daf('d4', 'n%mh')]
		};
		$['post'](_0x21be07[_0x2daf('d5', 'p^o)')](postUrl, _0x21be07[_0x2daf('d6', 'Mw4q')], {
			'appId': $[_0x2daf('d7', 'lR8w')],
			'taskId': 0x1
		}), (_0xa1c7f8, _0x37a44d, _0x364efb) = >{
			var _0x3839b9 = {
				'oeYOz': function(_0x51225a) {
					return _0x51225a();
				}
			};
			try {
				if (_0x21be07['HuwGM'](_0x21be07[_0x2daf('d8', 'pdew')], _0x21be07[_0x2daf('d9', 'Mw4q')])) {
					if (_0xa1c7f8) {
						if (_0x21be07['VneTH'](_0x2daf('da', 'IlCJ'), _0x21be07[_0x2daf('db', 'zerh')])) {
							console[_0x2daf('dc', 'H9Ja')]('异常：' + JSON[_0x2daf('dd', 'zerh')](_0xa1c7f8));
						} else {
							$[_0x2daf('de', 'aeo*')](e);
						}
					} else {
						_0x364efb = JSON[_0x2daf('df', 'D]Ck')](_0x364efb);
						if (_0x364efb['data'] && _0x364efb[_0x2daf('e0', '5*5R')][_0x2daf('e1', 'H9Ja')] === !![]) {
							if (_0x21be07[_0x2daf('e2', 'hxe!')](_0x21be07[_0x2daf('e3', 'p^o)')], _0x21be07['LvZFr'])) {
								$[_0x2daf('e4', 'eVG^')](_0x20f946[_0x2daf('e5', 'DhRe')]);
							} else {
								if (_0x364efb[_0x2daf('70', 'n%mh')][_0x2daf('e6', 'BVND')][_0x2daf('e7', 'F&N0')](_0x2daf('e8', '@^Hl'))) {
									if (_0x364efb[_0x2daf('e9', 'BVND')][_0x2daf('ea', 'T6wO')][_0x2daf('eb', 'zerh')][_0x2daf('ec', '[fgk')](_0x21be07['uoMTq'])) {
										if (_0x21be07['HuwGM'](_0x2daf('ed', '0Rx9'), _0x2daf('ee', 'aajE'))) {
											$[_0x2daf('ef', 'DhRe')](opt, (_0x283253, _0x57b9ef, _0x4a9b70) = >{
												if (_0x4a9b70) {
													$[_0x2daf('f0', 'IlCJ')] = JSON['parse'](_0x4a9b70);
													_0x3839b9[_0x2daf('f1', 'p^o)')](_0x494f9a);
												};
											});
										} else {
											console[_0x2daf('56', 'aajE')]('\x20\x20\x20\x20└\x20获得一张' + _0x364efb[_0x2daf('f2', 'DhRe')][_0x2daf('f3', 'Ub6*')][_0x2daf('f4', 'ph)h')][_0x2daf('f5', '^uo]')][_0x2daf('f6', 'hxe!')] + '-' + _0x364efb[_0x2daf('f7', 'smwF')]['result']['myAwardVo'][_0x2daf('f8', 'pdew')][_0x2daf('f9', '0Rx9')] + _0x2daf('fa', 'aY6x'));
										}
									}
									if (_0x364efb[_0x2daf('fb', '[fgk')]['result'][_0x2daf('fc', ']ank')][_0x2daf('fd', 'p^o)')]('jBeanAwardVo')) {
										console[_0x2daf('e4', 'eVG^')]('\x20\x20\x20\x20└\x20恭喜获得' + _0x364efb[_0x2daf('fe', '@^Hl')][_0x2daf('ff', 'aY6x')][_0x2daf('100', 'b!Rz')]['jBeanAwardVo'][_0x2daf('101', 'b!Rz')] + '个' + _0x364efb[_0x2daf('102', 'eVG^')][_0x2daf('e6', 'BVND')][_0x2daf('eb', 'zerh')]['jBeanAwardVo']['prizeName']);
										$[_0x2daf('103', '^uo]')] += _0x21be07[_0x2daf('104', '0Rx9')](parseInt, _0x364efb[_0x2daf('a8', 'VRg2')][_0x2daf('b5', 'lR8w')]['myAwardVo']['jBeanAwardVo'][_0x2daf('105', '$Mfl')]);
									}
								} else {
									if (_0x21be07['HuwGM'](_0x21be07[_0x2daf('106', 'D]Ck')], _0x2daf('107', 'oUlC'))) {
										console[_0x2daf('dc', 'H9Ja')]('\x20\x20\x20\x20└\x20有时候错过也是一种邂逅～');
									} else {
										$[_0x2daf('108', '$rfR')](_0x2daf('109', 'QH4f') + vo['taskName']);
									}
								}
							}
						}
					}
				} else {
					let _0x2ddf25 = {
						'url': _0x20f946[_0x2daf('10a', 'aY6x')],
						'headers': {
							'Content-Type': _0x20f946[_0x2daf('10b', 'Mw4q')]
						},
						'body': JSON[_0x2daf('10c', '$rfR')]({
							'actID': actID,
							'actsID': actsID,
							'done': 0x1
						})
					};
					return new Promise(_0x5d19d9 = >{
						$[_0x2daf('10d', 'ERw!')](_0x2ddf25, (_0x2f6c91, _0x114105, _0x306261) = >{
							_0x5d19d9();
						});
					});
				}
			} catch(_0x7a3569) {
				$[_0x2daf('10e', 'hxe!')](_0x7a3569);
			} finally {
				_0x21be07['QeTBw'](_0x494f9a);
			}
		});
	});
}
async
function task() {
	var _0x4876df = {
		'kZDva': function(_0x46b88a, _0x22cae) {
			return _0x46b88a === _0x22cae;
		},
		'sZJIZ': function(_0x3a91a8, _0x867c5a) {
			return _0x3a91a8 === _0x867c5a;
		},
		'PpaQT': function(_0x5afe2e) {
			return _0x5afe2e();
		},
		'DTeIF': function(_0x4a9fa0, _0x445758) {
			return _0x4a9fa0 !== _0x445758;
		},
		'CJqdE': _0x2daf('10f', 'T6wO'),
		'eQWQL': function(_0x52a8a4, _0x177d84) {
			return _0x52a8a4 !== _0x177d84;
		},
		'pyprW': function(_0x441d6f, _0x2ebce1) {
			return _0x441d6f !== _0x2ebce1;
		},
		'iHjgx': _0x2daf('110', '@^Hl'),
		'FbqHq': function(_0x556ef8, _0x38e072) {
			return _0x556ef8(_0x38e072);
		},
		'wwFrc': function(_0x488980, _0xb66066) {
			return _0x488980 !== _0xb66066;
		},
		'QSuyj': _0x2daf('111', 'XD$%'),
		'DQrML': 'zCSlD',
		'FOUDi': function(_0x2008ff, _0x2becd2) {
			return _0x2008ff * _0x2becd2;
		},
		'LloFg': function(_0x3ea095, _0x4386e8) {
			return _0x3ea095(_0x4386e8);
		},
		'NHUON': function(_0xf3a293, _0x3f6c5a) {
			return _0xf3a293 === _0x3f6c5a;
		},
		'cnocG': _0x2daf('112', 'R2rh'),
		'syEZo': _0x2daf('113', 'aY6x'),
		'KoaFG': '2|4|1|3|6|0|7|5',
		'XRVGg': function(_0x1b691e, _0x3f93a1) {
			return _0x1b691e * _0x3f93a1;
		},
		'KtyWT': function(_0x4d4b83, _0x47789d) {
			return _0x4d4b83(_0x47789d);
		},
		'Zkxuo': function(_0xf01205, _0x2c80e) {
			return _0xf01205(_0x2c80e);
		},
		'DnjXz': 'VjFNl',
		'OvBMd': '\x0a默认不做加入会员任务',
		'XujqX': '1|0|5|6|4|7|2|3',
		'YVpOe': function(_0x3be327, _0x40e5d8) {
			return _0x3be327(_0x40e5d8);
		},
		'zPyQv': function(_0x26f668, _0x54366d) {
			return _0x26f668(_0x54366d);
		}
	};
	for (let _0x42bd94 of $[_0x2daf('114', 'aeo*')]) {
		if (_0x4876df['DTeIF'](_0x4876df[_0x2daf('115', '$Mfl')], _0x4876df[_0x2daf('116', 'VRg2')])) {
			data = JSON[_0x2daf('117', 'JPKz')](data);
			if (_0x4876df[_0x2daf('118', 'n%mh')](data['data'][_0x2daf('119', 'eVG^')], 0x0) && _0x4876df[_0x2daf('11a', 'smwF')](data[_0x2daf('11b', 'lR8w')][_0x2daf('11c', 'pdew')], !![])) {
				$['taskVo'] = data[_0x2daf('11d', 'cg#]')][_0x2daf('11e', '0Rx9')]['taskVos'];
				$[_0x2daf('11f', 'IlCJ')] = parseInt(data['data'][_0x2daf('120', 'n%mh')][_0x2daf('121', 'H9Ja')]);
			} else {
				$[_0x2daf('122', '^uo]')] = !![];
				$['log'](_0x2daf('123', 'L7O9'));
			}
		} else {
			switch (_0x42bd94['taskType']) {
			case 0x9:
				if (_0x4876df[_0x2daf('124', 'BVND')](_0x42bd94['status'], 0x2)) {
					if (_0x4876df['pyprW'](_0x2daf('125', 'lR8w'), _0x4876df[_0x2daf('126', 'BVND')])) {
						for (const _0x151ba9 of _0x42bd94[_0x2daf('127', 'VRg2')]) {
							$[_0x2daf('128', '$Mfl')]('\x0a去浏览\x20' + _0x151ba9[_0x2daf('129', 'lR8w')]);
							taskToken = _0x151ba9[_0x2daf('12a', 'aY6x')];
							taskId = _0x42bd94[_0x2daf('12b', 'b!Rz')];
							itemId = _0x151ba9['itemId'];
							await _0x4876df[_0x2daf('12c', 'smwF')](doTask, {
								'appId': $[_0x2daf('12d', '^uo]')],
								'taskToken': taskToken,
								'taskId': taskId,
								'itemId': itemId,
								'actionType': 0x1
							});
							if (_0x42bd94[_0x2daf('12e', 'aajE')] === 0x0) {
								if (_0x4876df[_0x2daf('12f', 'aY6x')](_0x4876df['QSuyj'], _0x4876df[_0x2daf('130', 'aY6x')])) {
									await $[_0x2daf('131', 'L7O9')](0x41a);
								} else {
									_0x4876df['PpaQT'](resolve);
								}
							} else {
								await $['wait'](_0x4876df[_0x2daf('132', 'lR8w')](_0x42bd94[_0x2daf('133', 'GCcN')], 0x41a));
							}
							await _0x4876df['LloFg'](doTask, {
								'appId': $[_0x2daf('134', 'cg#]')],
								'taskToken': taskToken,
								'taskId': taskId,
								'itemId': itemId,
								'actionType': 0x0
							});
							await $[_0x2daf('135', '@^Hl')](0x7d0);
						}
					} else {
						$[_0x2daf('136', 'JPKz')](e, resp);
					}
				} else {
					$[_0x2daf('137', ']ank')]('\x0a已经完成' + _0x42bd94[_0x2daf('138', 'H9Ja')]);
				}
				break;
			case 0x15:
				if (joinMember) {
					if (_0x42bd94[_0x2daf('139', '$rfR')] !== 0x2) {
						for (const _0x433f3f of _0x42bd94[_0x2daf('13a', 'H9Ja')]) {
							if (_0x4876df[_0x2daf('13b', 'T6wO')](_0x4876df[_0x2daf('13c', '@^Hl')], _0x4876df[_0x2daf('13d', 'T6wO')])) {
								if (data) {
									$['zRes'] = JSON[_0x2daf('13e', 'aeo*')](data);
									_0x4876df['PpaQT'](resolve);
								};
							} else {
								var _0x25bd61 = _0x4876df[_0x2daf('13f', '$Mfl')]['split']('|'),
								_0x8501a0 = 0x0;
								while ( !! []) {
									switch (_0x25bd61[_0x8501a0++]) {
									case '0':
										if (_0x4876df[_0x2daf('140', 'BqnF')](_0x42bd94[_0x2daf('133', 'GCcN')], 0x0)) {
											await $[_0x2daf('141', 'H9Ja')](0x41a);
										} else {
											await $[_0x2daf('142', '[fgk')](_0x4876df[_0x2daf('143', 'T6wO')](_0x42bd94[_0x2daf('144', 'BVND')], 0x41a));
										}
										continue;
									case '1':
										taskId = _0x42bd94['taskId'];
										continue;
									case '2':
										$[_0x2daf('145', 'p^o)')](_0x2daf('146', 'oUlC') + _0x433f3f[_0x2daf('147', 'aeo*')]);
										continue;
									case '3':
										itemId = _0x433f3f[_0x2daf('148', '5*5R')];
										continue;
									case '4':
										taskToken = _0x433f3f['taskToken'];
										continue;
									case '5':
										await $[_0x2daf('149', 'T6wO')](0x7d0);
										continue;
									case '6':
										await _0x4876df[_0x2daf('14a', 'cg#]')](doTask, {
											'appId': $['ACT_ID'],
											'taskToken': taskToken,
											'taskId': taskId,
											'itemId': itemId,
											'actionType': 0x1
										});
										continue;
									case '7':
										await _0x4876df[_0x2daf('14b', 'ph)h')](doTask, {
											'appId': $[_0x2daf('14c', 'oUlC')],
											'taskToken': taskToken,
											'taskId': taskId,
											'itemId': itemId,
											'actionType': 0x0
										});
										continue;
									}
									break;
								}
							}
						}
					}
				} else {
					if (_0x4876df['wwFrc'](_0x4876df[_0x2daf('14d', 'YUF&')], _0x4876df['DnjXz'])) {
						$['log'](_0x2daf('14e', 'D]Ck') + _0x42bd94[_0x2daf('14f', 'tZgR')]);
					} else {
						$[_0x2daf('90', 'e9xK')](_0x4876df[_0x2daf('150', 'zerh')]);
					}
				}
				break;
			case 0x1:
				if (_0x4876df[_0x2daf('151', 'zerh')](_0x42bd94[_0x2daf('152', 'cg#]')], 0x2)) {
					for (const _0x326795 of _0x42bd94[_0x2daf('153', 'b!Rz')]) {
						var _0x27f99f = _0x4876df[_0x2daf('154', 'JPKz')][_0x2daf('155', '@^Hl')]('|'),
						_0x2b487f = 0x0;
						while ( !! []) {
							switch (_0x27f99f[_0x2b487f++]) {
							case '0':
								taskToken = _0x326795[_0x2daf('156', 'zerh')];
								continue;
							case '1':
								$[_0x2daf('137', ']ank')](_0x2daf('157', 'GCcN') + _0x326795[_0x2daf('158', 'b!Rz')]);
								continue;
							case '2':
								await _0x4876df['YVpOe'](doTask, {
									'appId': $[_0x2daf('159', 'e9xK')],
									'taskToken': taskToken,
									'taskId': taskId,
									'itemId': itemId,
									'actionType': 0x0
								});
								continue;
							case '3':
								await $[_0x2daf('135', '@^Hl')](0x7d0);
								continue;
							case '4':
								await _0x4876df[_0x2daf('15a', 'GCcN')](doTask, {
									'appId': $['ACT_ID'],
									'taskToken': taskToken,
									'taskId': taskId,
									'itemId': itemId,
									'actionType': 0x1
								});
								continue;
							case '5':
								taskId = _0x42bd94[_0x2daf('15b', '^uo]')];
								continue;
							case '6':
								itemId = _0x326795[_0x2daf('15c', 'R2rh')];
								continue;
							case '7':
								if (_0x4876df[_0x2daf('15d', 'Znfw')](_0x42bd94[_0x2daf('15e', 'p^o)')], 0x0)) {
									await $[_0x2daf('15f', 'oUlC')](0x41a);
								} else {
									await $[_0x2daf('160', 'Znfw')](_0x42bd94['waitDuration'] * 0x41a);
								}
								continue;
							}
							break;
						}
					}
				} else {
					$[_0x2daf('161', '0Rx9')](_0x2daf('162', 'oUlC') + _0x42bd94['taskName']);
				}
				break;
			default:
				break;
			}
		}
	}
}
function doTask(_0x46f17f) {
	var _0x4fece8 = {
		'lUixp': function(_0x5bc51c, _0x3fbd4e) {
			return _0x5bc51c === _0x3fbd4e;
		},
		'yiqMa': _0x2daf('163', ']cUB'),
		'tCMNg': function(_0xbfc8b0, _0x236469) {
			return _0xbfc8b0 === _0x236469;
		},
		'udWNT': _0x2daf('164', 'e9xK'),
		'tfEOs': _0x2daf('165', 'C9GZ'),
		'wtLai': function(_0x81f67d, _0x157138, _0x55e002) {
			return _0x81f67d(_0x157138, _0x55e002);
		},
		'jMrUo': _0x2daf('166', 'aeo*')
	};
	return new Promise(_0x53ffeb = >{
		$['post'](_0x4fece8[_0x2daf('167', 'rFEC')](postUrl, _0x4fece8['jMrUo'], _0x46f17f), (_0x572c49, _0x4dc038, _0x18e56a) = >{
			try {
				if (_0x572c49) {
					console[_0x2daf('84', 'aeo*')](_0x2daf('168', 'Znfw') + JSON['stringify'](_0x572c49));
				} else {
					_0x18e56a = JSON['parse'](_0x18e56a);
					if (_0x18e56a[_0x2daf('102', 'eVG^')] && _0x4fece8[_0x2daf('169', 'zerh')](_0x18e56a['code'], 0x0)) {
						switch (_0x18e56a[_0x2daf('e0', '5*5R')][_0x2daf('119', 'eVG^')]) {
						case 0x1:
							console[_0x2daf('16a', 'zerh')]('\x20\x20\x20\x20└\x20' + _0x18e56a[_0x2daf('16b', 'D]Ck')][_0x2daf('16c', 'hxe!')]);
							break;
						case 0x0:
							if (_0x18e56a['data'][_0x2daf('16d', 'oUlC')](_0x4fece8[_0x2daf('16e', 'zerh')])) {
								console[_0x2daf('16a', 'zerh')](_0x2daf('16f', 'p^o)') + _0x18e56a[_0x2daf('170', 'YUF&')][_0x2daf('171', 'ERw!')][_0x2daf('172', 'DhRe')]);
							}
							break;
						default:
							break;
						}
					}
				}
			} catch(_0x5da6ed) {
				$['logErr'](_0x5da6ed);
			} finally {
				if (_0x4fece8['tCMNg'](_0x4fece8[_0x2daf('173', 'aeo*')], _0x4fece8['tfEOs'])) {
					_0x18e56a = JSON[_0x2daf('174', 'b!Rz')](_0x18e56a);
					if (_0x18e56a[_0x2daf('fe', '@^Hl')][_0x2daf('81', 'QH4f')] > 0x0) {
						$['ACT_IDarr'] = _0x18e56a[_0x2daf('6d', 'e9xK')];
						console['log'](_0x2daf('175', 'Ub6*'));
					} else {
						$['ACT_IDarr'] = [];
					}
				} else {
					_0x53ffeb();
				}
			}
		});
	});
}
function getHomedata() {
	var _0x4cb0e1 = {
		'FjBSm': function(_0x194451, _0x1418f2) {
			return _0x194451 !== _0x1418f2;
		},
		'yXwdB': function(_0x1021e7, _0x9910a) {
			return _0x1021e7 === _0x9910a;
		},
		'rKYrt': function(_0x288860, _0x4bc005) {
			return _0x288860(_0x4bc005);
		},
		'LEXeW': function(_0x1e6d29, _0x1d46c6) {
			return _0x1e6d29 === _0x1d46c6;
		},
		'cWiVm': 'ULrvO',
		'QsXSK': _0x2daf('176', '[EoL'),
		'JDgmb': 'HkplM',
		'mxvkb': 'ljHOH'
	};
	return new Promise(_0x4dc69c = >{
		var _0x52096b = {
			'jNFko': function(_0x37c066, _0x2433f9) {
				return _0x4cb0e1[_0x2daf('177', 'IlCJ')](_0x37c066, _0x2433f9);
			},
			'nYUTr': function(_0x2664af, _0x5256a6) {
				return _0x4cb0e1[_0x2daf('178', 'YUF&')](_0x2664af, _0x5256a6);
			},
			'bwCoL': function(_0x444b01, _0x19cd90) {
				return _0x4cb0e1[_0x2daf('179', 'eVG^')](_0x444b01, _0x19cd90);
			},
			'hwFcY': function(_0x3bf1af, _0x1fc4fd) {
				return _0x4cb0e1[_0x2daf('17a', 'QH4f')](_0x3bf1af, _0x1fc4fd);
			},
			'wNIEl': _0x4cb0e1[_0x2daf('17b', 'BVND')],
			'HjVxa': _0x4cb0e1['QsXSK'],
			'CZWqo': _0x4cb0e1[_0x2daf('17c', 'YUF&')],
			'HbzeB': _0x4cb0e1[_0x2daf('17d', 'ERw!')]
		};
		$['post'](postUrl(_0x2daf('17e', 'GCcN'), {
			'appId': $[_0x2daf('17f', 'JPKz')]
		}), (_0x8d2634, _0x370031, _0x5dcbed) = >{
			try {
				if (_0x8d2634) {
					console[_0x2daf('180', 'XD$%')]('异常：' + JSON[_0x2daf('181', 'aeo*')](_0x8d2634));
				} else {
					if (_0x52096b[_0x2daf('182', 'C9GZ')](_0x2daf('183', 'rFEC'), _0x2daf('184', 'L7O9'))) {
						if (_0x5dcbed) {
							_0x5dcbed = JSON['parse'](_0x5dcbed);
							if (_0x52096b[_0x2daf('185', 'h87S')](_0x5dcbed['data']['bizCode'], 0x0) && _0x5dcbed[_0x2daf('79', 'aajE')][_0x2daf('11c', 'pdew')] === !![]) {
								if ('loeVZ' === _0x2daf('186', 'rFEC')) {
									$['taskVo'] = _0x5dcbed[_0x2daf('e0', '5*5R')][_0x2daf('187', 'aajE')][_0x2daf('188', ']cUB')];
									$[_0x2daf('189', 'T6wO')] = _0x52096b['bwCoL'](parseInt, _0x5dcbed[_0x2daf('170', 'YUF&')][_0x2daf('18a', 'oUlC')][_0x2daf('18b', 'ERw!')]);
								} else {
									console['log'](_0x2daf('18c', 'lR8w') + JSON[_0x2daf('18d', 'C9GZ')](_0x8d2634));
								}
							} else {
								$[_0x2daf('18e', 'R2rh')] = !![];
								$['log'](_0x2daf('18f', 'IlCJ'));
							}
						} else {
							if (_0x52096b['hwFcY'](_0x52096b[_0x2daf('190', '[fgk')], _0x52096b[_0x2daf('191', 'F&N0')])) {
								$[_0x2daf('192', 'BVND')](_0x52096b['HjVxa']);
							} else {
								$[_0x2daf('193', 'ERw!')](e);
							}
						}
					} else {
						_0x4dc69c();
					}
				}
			} catch(_0x5082fb) {
				if (_0x52096b[_0x2daf('194', 'pdew')](_0x52096b[_0x2daf('195', 'zerh')], _0x52096b[_0x2daf('196', 'ph)h')])) {
					$['logErr'](_0x5082fb);
				} else {
					$[_0x2daf('197', 'GCcN')](_0x5082fb);
				}
			} finally {
				_0x4dc69c();
			}
		});
	});
}
function postUrl(_0x36e784, _0x4985c8) {
	var _0x17a3a5 = {
		'kyzzS': _0x2daf('198', 'D]Ck'),
		'DFxDw': _0x2daf('199', 'DhRe'),
		'tRUwf': _0x2daf('19a', 'tZgR'),
		'wMyln': _0x2daf('19b', '[EoL'),
		'gFppF': _0x2daf('19c', 'BqnF'),
		'yxRXc': _0x2daf('19d', 'lR8w'),
		'LoRNp': _0x2daf('19e', ']cUB')
	};
	return {
		'url': _0x17a3a5['kyzzS'],
		'headers': {
			'Host': _0x17a3a5[_0x2daf('19f', 'R2rh')],
			'Content-Type': 'application/x-www-form-urlencoded',
			'Origin': 'https://h5.m.jd.com',
			'Accept-Encoding': _0x2daf('1a0', 'VRg2'),
			'Cookie': cookie,
			'Connection': _0x17a3a5['tRUwf'],
			'Accept': _0x17a3a5['wMyln'],
			'User-Agent': _0x17a3a5[_0x2daf('1a1', 'BqnF')],
			'Referer': _0x17a3a5['yxRXc'],
			'Accept-Language': _0x17a3a5[_0x2daf('1a2', 'YUF&')]
		},
		'body': _0x2daf('1a3', 'Znfw') + _0x36e784 + '&body=' + JSON[_0x2daf('10c', '$rfR')](_0x4985c8) + _0x2daf('1a4', '@^Hl')
	};
}
function checkCookie() {
	var _0x25dbbe = {
		'mjehe': function(_0xe6e0c5, _0x35a9a6) {
			return _0xe6e0c5 !== _0x35a9a6;
		},
		'owQCx': _0x2daf('1a5', 'Znfw'),
		'tOYEG': _0x2daf('1a6', '5*5R'),
		'fKBko': function(_0x24bf58, _0x5130c4) {
			return _0x24bf58 === _0x5130c4;
		},
		'zKEkL': _0x2daf('1a7', 'C9GZ'),
		'UsHjY': _0x2daf('1a8', '5*5R'),
		'AOTJQ': function(_0x3fb59c) {
			return _0x3fb59c();
		},
		'WwokE': _0x2daf('1a9', 'oUlC'),
		'aBMIx': _0x2daf('1aa', ']cUB'),
		'UWrkI': 'zh-cn',
		'PQQqN': _0x2daf('1ab', 'aY6x'),
		'BfbuJ': _0x2daf('1ac', 'BVND')
	};
	const _0xefaa76 = {
		'url': _0x25dbbe[_0x2daf('1ad', '5*5R')],
		'headers': {
			'Host': _0x25dbbe[_0x2daf('1ae', 'BqnF')],
			'Accept': '*/*',
			'Connection': _0x2daf('1af', 'rFEC'),
			'Cookie': cookie,
			'User-Agent': 'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.2\x20Mobile/15E148\x20Safari/604.1',
			'Accept-Language': _0x25dbbe[_0x2daf('1b0', 'BVND')],
			'Referer': _0x25dbbe[_0x2daf('1b1', 'JPKz')],
			'Accept-Encoding': _0x25dbbe[_0x2daf('1b2', 'F&N0')]
		}
	};
	return new Promise(_0x2eb77b = >{
		var _0x13a4b4 = {
			'vBMRc': function(_0x51ef13) {
				return _0x51ef13();
			},
			'wqaAm': function(_0x3416c7, _0x488588) {
				return _0x25dbbe[_0x2daf('1b3', 'e9xK')](_0x3416c7, _0x488588);
			},
			'SmQkL': _0x25dbbe[_0x2daf('1b4', '@^Hl')],
			'fBFfc': _0x25dbbe[_0x2daf('1b5', 'T6wO')],
			'giDvz': function(_0x5b910c, _0x315bfd) {
				return _0x25dbbe[_0x2daf('1b6', 'H9Ja')](_0x5b910c, _0x315bfd);
			},
			'dntfv': _0x25dbbe['zKEkL'],
			'oVclK': _0x25dbbe[_0x2daf('1b7', 'L7O9')],
			'CGmuE': 'UHFTg',
			'nwCUs': function(_0x12fdfe) {
				return _0x25dbbe[_0x2daf('1b8', 'lR8w')](_0x12fdfe);
			}
		};
		$[_0x2daf('1b9', 'Ub6*')](_0xefaa76, (_0x1240f1, _0x3419f9, _0x2c77ae) = >{
			try {
				if (_0x13a4b4[_0x2daf('1ba', 'p^o)')](_0x2daf('1bb', 'VRg2'), _0x2daf('1bc', '0Rx9'))) {
					if (_0x2c77ae) {
						$[_0x2daf('1bd', 'R2rh')] = JSON[_0x2daf('1be', 'ERw!')](_0x2c77ae);
					};
				} else {
					if (_0x1240f1) {
						$[_0x2daf('de', 'aeo*')](_0x1240f1);
					} else {
						if (_0x2c77ae) {
							if (_0x13a4b4['SmQkL'] !== _0x13a4b4[_0x2daf('1bf', 'GCcN')]) {
								$[_0x2daf('a5', 'D]Ck')]('京东返回了空数据');
							} else {
								_0x2c77ae = JSON['parse'](_0x2c77ae);
								if (_0x2c77ae[_0x2daf('1c0', '[fgk')] === _0x13a4b4['fBFfc']) {
									$['isLogin'] = ![];
									return;
								}
								if (_0x13a4b4[_0x2daf('1c1', 'XD$%')](_0x2c77ae['retcode'], '0') && _0x2c77ae[_0x2daf('1c2', ']cUB')][_0x2daf('1c3', 'VRg2')](_0x13a4b4[_0x2daf('1c4', '5*5R')])) {
									if (_0x13a4b4['giDvz'](_0x13a4b4[_0x2daf('1c5', 'D]Ck')], 'QCQAi')) {
										$[_0x2daf('1c6', 'XD$%')] = _0x2c77ae[_0x2daf('a6', 'hxe!')]['userInfo'][_0x2daf('1c7', 'ERw!')][_0x2daf('1c8', 'VRg2')];
									} else {
										_0x13a4b4[_0x2daf('1c9', 'L7O9')](_0x2eb77b);
									}
								}
							}
						} else {
							$[_0x2daf('1ca', 'hxe!')]('京东返回了空数据');
						}
					}
				}
			} catch(_0x10bc8f) {
				$[_0x2daf('1cb', '$Mfl')](_0x10bc8f);
			} finally {
				if (_0x13a4b4[_0x2daf('1cc', 'aeo*')](_0x13a4b4['CGmuE'], _0x2daf('1cd', 'aY6x'))) {
					console[_0x2daf('84', 'aeo*')](_0x2daf('1ce', 'BVND') + _0x2c77ae[_0x2daf('1cf', '$Mfl')][_0x2daf('1d0', 'h87S')]['myAwardVo']['jBeanAwardVo'][_0x2daf('1d1', 'rFEC')] + '个' + _0x2c77ae['data'][_0x2daf('ff', 'aY6x')][_0x2daf('e8', '@^Hl')][_0x2daf('1d2', 'b!Rz')][_0x2daf('1d3', 'rFEC')]);
					$[_0x2daf('1d4', 'oUlC')] += parseInt(_0x2c77ae['data'][_0x2daf('1d5', 'aeo*')][_0x2daf('1d6', 'h87S')]['jBeanAwardVo'][_0x2daf('1d7', 'zerh')]);
				} else {
					_0x13a4b4[_0x2daf('1d8', 'JPKz')](_0x2eb77b);
				}
			}
		});
	});
}
function getACT_ID() {
	var _0xabc8f8 = {
		'YIUYk': 'mgxAl',
		'SQNpc': _0x2daf('1d9', 'n%mh'),
		'IYxkC': _0x2daf('1da', 'IlCJ'),
		'zuenR': function(_0x2a4434, _0x37ee98) {
			return _0x2a4434 === _0x37ee98;
		},
		'Zpazt': _0x2daf('1db', 'h87S'),
		'HUmgk': _0x2daf('1dc', 'lR8w'),
		'mhyxA': _0x2daf('1dd', 'hxe!')
	};
	return new Promise(_0x2b4fdb = >{
		var _0x45ba1f = {
			'lvtjK': '\x0a没有抽奖机会',
			'jGuCe': _0x2daf('1de', 'BVND')
		};
		if (_0xabc8f8[_0x2daf('1df', 'oUlC')](_0xabc8f8['mhyxA'], _0xabc8f8[_0x2daf('1e0', 'h87S')])) {
			$[_0x2daf('1e1', 'ERw!')]({
				'url': _0x2daf('1e2', 'h87S') + Date[_0x2daf('1e3', 'aY6x')]()
			},
			(_0x70139d, _0x1c3e03, _0x24a2a8) = >{
				try {
					if (_0x70139d) {
						console['log']('' + JSON['stringify'](_0x70139d));
					} else {
						if (_0x24a2a8) {
							if (_0xabc8f8[_0x2daf('1e4', '$Mfl')] !== _0xabc8f8[_0x2daf('1e5', '$Mfl')]) {
								_0x24a2a8 = JSON[_0x2daf('1e6', 'eVG^')](_0x24a2a8);
								if (_0x24a2a8['data'][_0x2daf('1e7', '@^Hl')] > 0x0) {
									$[_0x2daf('1e8', '@^Hl')] = _0x24a2a8[_0x2daf('1e9', 'aY6x')];
									console[_0x2daf('1ea', '[fgk')](_0xabc8f8[_0x2daf('1eb', 'zerh')]);
								} else {
									if (_0xabc8f8[_0x2daf('1ec', 'DhRe')](_0xabc8f8['Zpazt'], _0xabc8f8['HUmgk'])) {
										$[_0x2daf('1ed', 'pdew')](_0x45ba1f[_0x2daf('1ee', 'aeo*')]);
									} else {
										$[_0x2daf('1ef', '$Mfl')] = [];
									}
								}
							} else {
								$[_0x2daf('1f0', 'R2rh')] = _0x24a2a8[_0x2daf('1f1', 'b!Rz')];
								console[_0x2daf('1f2', 'ERw!')](_0x45ba1f['jGuCe']);
							}
						}
					}
				} catch(_0x5f469e) {
					$[_0x2daf('1f3', 'e9xK')](_0x5f469e, _0x1c3e03);
				} finally {
					_0x2b4fdb();
				}
			});
		} else {
			$[_0x2daf('1f4', 'b!Rz')] = data['data'][_0x2daf('1f5', 'H9Ja')]['baseInfo']['nickname'];
		}
	});
};
_0xodz = 'jsjiami.com.v6';
// prettier-ignore
function Env(t, e) {
	"undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
	class s {
		constructor(t) {
			this.env = t
		}
		send(t, e = "GET") {
			t = "string" == typeof t ? {
				url: t
			}: t;
			let s = this.get;
			return "POST" === e && (s = this.post),
			new Promise((e, i) = >{
				s.call(this, t, (t, s, r) = >{
					t ? i(t) : e(s)
				})
			})
		}
		get(t) {
			return this.send.call(this.env, t)
		}
		post(t) {
			return this.send.call(this.env, t, "POST")
		}
	}
	return new class {
		constructor(t, e) {
			this.name = t,
			this.http = new s(this),
			this.data = null,
			this.dataFile = "box.dat",
			this.logs = [],
			this.isMute = !1,
			this.isNeedRewrite = !1,
			this.logSeparator = "\n",
			this.startTime = (new Date).getTime(),
			Object.assign(this, e),
			this.log("", `🔔$ {
				this.name
			},
			开始 ! `)
		}
		isNode() {
			return "undefined" != typeof module && !!module.exports
		}
		isQuanX() {
			return "undefined" != typeof $task
		}
		isSurge() {
			return "undefined" != typeof $httpClient && "undefined" == typeof $loon
		}
		isLoon() {
			return "undefined" != typeof $loon
		}
		toObj(t, e = null) {
			try {
				return JSON.parse(t)
			} catch {
				return e
			}
		}
		toStr(t, e = null) {
			try {
				return JSON.stringify(t)
			} catch {
				return e
			}
		}
		getjson(t, e) {
			let s = e;
			const i = this.getdata(t);
			if (i) try {
				s = JSON.parse(this.getdata(t))
			} catch {}
			return s
		}
		setjson(t, e) {
			try {
				return this.setdata(JSON.stringify(t), e)
			} catch {
				return ! 1
			}
		}
		getScript(t) {
			return new Promise(e = >{
				this.get({
					url: t
				},
				(t, s, i) = >e(i))
			})
		}
		runScript(t, e) {
			return new Promise(s = >{
				let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i = i ? i.replace(/\n/g, "").trim() : i;
				let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r = r ? 1 * r: 20,
				r = e && e.timeout ? e.timeout: r;
				const[o, h] = i.split("@"),
				n = {
					url: `http: //${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
					
