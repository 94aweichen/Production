/**
 * 与表 t_user 对应的 javascript 对象；
 */
User=function(){
    this.table_name='t_user'; //数据库表名 【必须】
    this.id=null; 		//mysql数据库，id自增类型 【必须】
    this.username=null;//对应字段 username
    this.password=null;//对应字段 password
    this.realname=null;//对应字段 realname
    this.sex=null;//对应字段 sex
    this.birthday=null;//对应字段 birthday
    this.idcardnum=null;//对应字段 idcardnum
    this.phonenum=null;//对应字段 phonenum
    this.rankname=null;//对应字段 rank
    this.devid=null;//对应字段 devid
};

Gpt4=function(){
    this.table_name='gpt4'; //数据库表名 【必须】
    this.id=null; 		//mysql数据库，id自增类型 【必须】
    this.sn=null;//对应字段 sn
    this.pn=null;//对应字段 pn
    this.mac=null;//对应字段 mac
    this.tei=null;//对应字段 tei
    this.imei=null;//对应字段 imei
    this.ver=null;//对应字段 ver
    this.tp=null;//对应字段 tp
    this.keypad=null;//对应字段 keypad
    this.bt=null;//对应字段 bt
    this.wifi=null;//对应字段 wifi
    this.gps=null;//对应字段 gps
    this.nfc=null;//对应字段 nfc
    this.vib=null;//对应字段 vib
    this.spk=null;//对应字段 spk
    this.receiver=null;//对应字段 receiver
    this.audloop1=null;//对应字段 audloop1
    this.audloop2=null;//对应字段 audloop2
    this.gsensor=null;//对应字段 gsensor
    this.proximity=null;//对应字段 proximity
    this.lightsensor=null;//对应字段 lightsensor
    this.backlight=null;//对应字段 backlight
    this.lcdpanel=null;//对应字段 lcdpanel
    this.camera=null;//对应字段 camera
    this.keyled=null;//对应字段 keyled
    this.flash=null;//对应字段 flash
    this.usb=null;//对应字段 usb
    this.sim=null;//对应字段 sim
    this.sdcard=null;//对应字段 sdcard
};