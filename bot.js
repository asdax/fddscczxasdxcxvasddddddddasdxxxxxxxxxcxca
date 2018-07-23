const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "$";
client.on('ready', () => {
    console.log('I am ready!');
});






client.on('message', async message => {//By Codes , - ST I EdiTeD , .#4968
  if(message.content.startsWith(prefix + "تقديم")) {//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
    await message.channel.send("**:writing_hand: ماهي المده التي تدخل فيها الدسكورد (كل يوم ,كل يومين . كل سبوع)و **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';//By Codes , - ST I EdiTeD , .#4968
    let br = '';//By Codes , - ST I EdiTeD , .#4968
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.edit(`**مده استعمالك للدسكورد**`)
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {//By Codes , - ST I EdiTeD , .#4968
  md = co.first().content
        co.first().delete()//By Codes , - ST I EdiTeD , .#4968
        e.edit(`**معك مايك ؟**`)
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.then(col => {
  br = col.first().content
        col.first().delete()
e.edit("**جاري التقديم علي طلبك...**").then(b => {//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
if(gg) {
gg.send({embed : new Discord.RichEmbed()//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.setDescription(`**المده التي يدخل فيها الدسكورد : \n ${lan}\n مده دخولك للدسكورد :\n ${md} \n معه مايك ؟ :\n ${br}  **`)  
          .setFooter(`Codes.`)//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.setTimestamp()//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
});
}        
})
})
})//By Shadow ,
})
})
}//By Shadow ,




  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('470661995255955477');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '455577214348427264') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});



  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('470661995255955477');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '455577214348427264') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
  




client.login(process.env.BOT_TOKEN);
