const Eris = require("eris");


const bot = new Eris(process.env.t1);
const bot2 = new Eris(process.env.t2);
const bot3 = new Eris(process.env.t3);
const bot4 = new Eris(process.env.t4);
const bot5 = new Eris(process.env.t5);
const bot6 = new Eris(process.env.t6);
const bot7 = new Eris(process.env.t7);
const bot8 = new Eris(process.env.t8);
const bot9 = new Eris(process.env.t9);
const bot10 = new Eris(process.env.t10);

bot.connect()
bot2.connect()
bot3.connect()
bot4.connect()
bot5.connect()
bot6.connect()
bot7.connect()
bot8.connect()
bot9.connect()
bot10.connect()


bot.editStatus("dnd", { name: "Far Cry 3", type: 4 });
bot2.editStatus("dnd", { name: "FLENN", type: 4 });
bot3.editStatus("dnd", { name: "YOTUBE", type: 4 });
bot4.editStatus("dnd", { name: "ForzaHorizon 5", type: 4 });
bot5.editStatus("dnd", { name: "Spotify", type: 2 });
bot6.editStatus("dnd", { name: "YOTUBE", type: 3 });
bot7.editStatus("dnd", { name: "Gta V", type: 0 });
bot8.editStatus("dnd", { name: "Luve yo", type: 2 });
bot9.editStatus("dnd", { name: "La casa de papel", type: 3 });
bot10.editStatus("dnd", { name: "Far Cry  2", type: 0 });
