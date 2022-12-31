create table user (id int primary key auto_increment,firstname varchar(20),
lastname varchar(50),
email varchar(100),
password varchar(20),
phone varchar(15));

create table category(id int primary key auto_increment,title varchar(70),description varchar(100));

create table company(id int primary key auto_increment,title varchar(70),description varchar(100));

create table product1(id int primary key auto_increment,title varchar(70),description varchar(100),price float,category int,company int);