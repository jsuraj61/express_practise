create database suraj;

create table product(id int primary key auto_increment,title varchar(70),description varchar(100),price int);

insert into product(title,description,price) values("p1","desc of p1",1);
insert into product(title,description,price) values("p2","desc of p2",2);
insert into product(title,description,price) values("p3","desc of p3",3);