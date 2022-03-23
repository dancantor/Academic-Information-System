CREATE TABLE Users(
	id int primary key identity,
	username varchar(25),
	user_role varchar(25),
	passw varchar(25)
)

insert into Users values ('pop.ion', 'admin', 'admin'), ('ion.vasile','student', 'student'), ('cantor.dan', 'student', 'caca')

update Users
SET user_role = 'teacher'
WHERE username = 'pop.ion'

insert into Users values ('elvira.bal', 'staff', 'secretara')

SELECT * from Users