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
   var sites:string[]=[];//= new Array(cookiesArr.length); 
   let geshu: number;
   
   codename='bean';
   console.log('种豆得豆：')
   for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
        index = i + 1;
        linshi= await bean(cookie);
        if(linshi!='null')
        {
            geshu=sites.push(linshi);
        }
        else
            console.log(`\n【京东账号${index}】${UserName} 获取失败\n`);
   }
   console.log('总共获取到 【'+geshu+'】 个：');
   if(geshu<6)
      console.log('/'+codename+' '+sites.join("&")+'\n')
    else
    {
        console.log('/'+codename+' '+sites.slice(0, 5).join("&")+'\n');
        console.log('/'+codename+' '+sites.slice(5, geshu).join("&")+'\n');   // 该方法返回指定起始位置的一个新的数组
    }
    sites = [];
    //console.log('东东农场:', '/farm '+farms+'\n')
    codename='farm';
    console.log('东东农场：')
    for (let i = 0; i < cookiesArr.length; i++) {
         cookie = cookiesArr[i];
         UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
         index = i + 1;
         linshi= await farm(cookie);
         if(linshi!='null')
         {
             geshu=sites.push(linshi);
         }
         else
             console.log(`\n【京东账号${index}】${UserName} 获取失败\n`);
    }
    console.log('总共获取到 【'+geshu+'】 个：');
    if(geshu<6)
       console.log('/'+codename+' '+sites.join("&")+'\n')
     else
     {
         console.log('/'+codename+' '+sites.slice(0, 5).join("&")+'\n');
         console.log('/'+codename+' '+sites.slice(5, geshu).join("&")+'\n');   // 该方法返回指定起始位置的一个新的数组
     }
     sites = [];
    // console.log('京东健康:', '/health '+healths+'\n')   
    codename='health';
   console.log('京东健康：')
   for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
        index = i + 1;
        linshi= await health(cookie);
        if(linshi!='null')
        {
            geshu=sites.push(linshi);
        }
        else
            console.log(`\n【京东账号${index}】${UserName} 获取失败\n`);
   }
   console.log('总共获取到 【'+geshu+'】 个：');
   if(geshu<6)
      console.log('/'+codename+' '+sites.join("&")+'\n')
    else
    {
        console.log('/'+codename+' '+sites.slice(0, 5).join("&")+'\n');
        console.log('/'+codename+' '+sites.slice(5, geshu).join("&")+'\n');   // 该方法返回指定起始位置的一个新的数组
    }
   
    sites = [];
    // console.log('东东萌宠:', '/pet '+pets+'\n')   
    codename='pet';
   console.log('东东萌宠：')
   for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
        index = i + 1;
        linshi= await pet(cookie);
        if(linshi!='null')
        {
            geshu=sites.push(linshi);
        }
        else
            console.log(`\n【京东账号${index}】${UserName} 获取失败\n`);
   }
   console.log('总共获取到 【'+geshu+'】 个：');
   if(geshu<6)
      console.log('/'+codename+' '+sites.join("&")+'\n')
    else
    {
        console.log('/'+codename+' '+sites.slice(0, 5).join("&")+'\n');
        console.log('/'+codename+' '+sites.slice(5, geshu).join("&")+'\n');   // 该方法返回指定起始位置的一个新的数组
    }
    sites = [];
    // console.log('东东工厂:', '/ddfactory '+ddfactorys+'\n')   
    codename='ddfactory';
   console.log('东东工厂：')
   for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
        index = i + 1;
        linshi= await factory(cookie);
        if(linshi!='null')
        {
            geshu=sites.push(linshi);
        }
        else
            console.log(`\n【京东账号${index}】${UserName} 获取失败\n`);
   }
   console.log('总共获取到 【'+geshu+'】 个：');
   if(geshu<6)
      console.log('/'+codename+' '+sites.join("&")+'\n')
    else
    {
        console.log('/'+codename+' '+sites.slice(0, 5).join("&")+'\n');
        console.log('/'+codename+' '+sites.slice(5, geshu).join("&")+'\n');   // 该方法返回指定起始位置的一个新的数组
    }
    sites = [];
    // console.log('京喜工厂:', '/jxfactory '+jxfactorys+'\n')   
    codename='jxfactory';
   console.log('京喜工厂：')
   for (let i = 0; i < cookiesArr.length; i++) {
        cookie = cookiesArr[i];
        UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
        index = i + 1;
        linshi= await jxfactory(cookie);
        if(linshi!='null')
        {
            geshu=sites.push(linshi);
        }
        else
            console.log(`\n【京东账号${index}】${UserName} 获取失败\n`);
   }
   console.log('总共获取到 【'+geshu+'】 个：');
   if(geshu<6)
      console.log('/'+codename+' '+sites.join("&")+'\n')
    else
    {
        console.log('/'+codename+' '+sites.slice(0, 5).join("&")+'\n');
        console.log('/'+codename+' '+sites.slice(5, geshu).join("&")+'\n');   // 该方法返回指定起始位置的一个新的数组
    }
    sites = [];
    // console.log('闪购盲盒:', '/sgmh '+sgmhs+'\n')
    codename='sgmh';
    console.log('闪购盲盒：')
    for (let i = 0; i < cookiesArr.length; i++) {
         cookie = cookiesArr[i];
         UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
         index = i + 1;
         linshi= await sgmh(cookie);
         if(linshi!='null')
         {
             geshu=sites.push(linshi);
         }
         else
             console.log(`\n【京东账号${index}】${UserName} 获取失败\n`);
    }
    console.log('总共获取到 【'+geshu+'】 个：');
    if(geshu<6)
       console.log('/'+codename+' '+sites.join("&")+'\n')
     else
     {
         console.log('/'+codename+' '+sites.slice(0, 5).join("&")+'\n');
         console.log('/'+codename+' '+sites.slice(5, geshu).join("&")+'\n');   // 该方法返回指定起始位置的一个新的数组
     }

 })()
