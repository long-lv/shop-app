/** 
npx sequelize-cli model:generate --name User --attributes email:string,password:string,role:integer,avatar:string,phone:integer

npx sequelize-cli model:generate --name Category --attributes name:string,image:text
npx sequelize-cli model:generate --name Category_news --attributes name:string,image:text
npx sequelize-cli model:generate --name Brand --attributes name:string,image:text
npx sequelize-cli model:generate --name Banner --attributes status:integer,image:text
npx sequelize-cli model:generate --name News --attributes title:string,category_news_id:integer,image:text,content:text
npx sequelize-cli model:generate --name Inquiry --attributes title:string,content:text

npx sequelize-cli model:generate --name Order --attributes user_id:integer,status:integer,note:text,total:integer
npx sequelize-cli model:generate --name Product --attributes name:string,image:text,price:integer,old_price:integer,desc:text,specification:text,buyturn:integer,quantity:integer,brand_id:integer,category_id:integer,rate:integer,total_rate:integer
npx sequelize-cli model:generate --name OrderDetail --attributes order_id:integer,product_id:integer,price:integer,quantity:integer
npx sequelize-cli model:generate --name BannerDetail --attributes product_id:integer,banner_id:integer
npx sequelize-cli model:generate --name Feedback --attributes product_id:integer,user_id:integer,star:integer,content:text
npx sequelize-cli model:generate --name NewDetail --attributes product_id:integer,news_id:integer
npx sequelize-cli model:generate --name Slider --attributes image:text,title:text,content:text
npx sequelize-cli model:generate --name InquiryDetail --attributes inquiry_id:integer,user_id:integer
npx sequelize-cli model:generate --name GroupChat --attributes sender_id:integer,admin_id:integer
npx sequelize-cli model:generate --name Chat --attributes group_chat_id:integer,content:text
run migrate : 

npx sequelize-cli db:migrate 

revert the most migration: 
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all
*/
require('dotenv').config();
const express = require("express");
const i18n = require("./src/config/i18n");
const { setLang } = require('./src/middeware');
const app = express();
app.use(express.json());
app.use(i18n.init);
app.use(setLang);

express.urlencoded({ extended: true });
// init router
app.use('/api',require('./src/routes'));

module.exports = app;