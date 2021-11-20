/**
 * cron 0 20 * * 6
 */

 import {requireConfig} from "./TS_USER_AGENTS";
 import {bean, farm, pet, factory, sgmh, jxfactory, cash, health} from "./utils/shareCodesTool";
 
 let cookie: string = '', UserName: string, index: number;
 let linshi: string = '';
 let codename: string = '';

 !(async () => {
   let cookiesArr: any = await requireConfig();
   let geshu: number;
   var fseventarr= [bean, farm, pet, factory, sgmh, health];
   let codenameen: Array<string> = ["bean","farm","pet","ddfactory","sgmh","health"];
   let codenamezh: Array<string> = ["种豆得豆","东东农场","东东萌宠","东东工厂","闪购盲盒","京东健康"];
   for (var fsevent of  fseventarr) {
        codename=codenameen[fseventarr.indexOf(fsevent)];//'bean';
        console.log(codenamezh[fseventarr.indexOf(fsevent)]+"：")
        var sites:string[]=[];//= new Array(cookiesArr.length); 
        for (let i = 0; i < cookiesArr.length; i++) {
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
                index = i + 1;
                linshi= await fsevent(cookie);
                if(linshi!='null')
                {
                    geshu=sites.push(linshi);
                }
                else
                    console.log(`京东账号${index}${UserName} 获取失败`);
        }
        console.log('总共获取到 【'+geshu+'】 个：');
        geshu=0;
        while (geshu<sites.length)
        {
            console.log('/'+codename+' '+sites.slice(geshu, geshu+5).join("&")+'\n');
            geshu=geshu+5;
        }
   }
 })()
