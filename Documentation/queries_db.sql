CREATE TABLE Users(
	id int primary key identity,
	username varchar(25),
	user_role varchar(25),
	passw varchar(25)
)

ALTER TABLE Users
ALTER COLUMN passw
varchar(255)

insert into Users values ('pop.ion', 'admin', 'admin'), ('ion.vasile','student', 'student'), ('cantor.dan', 'student', 'caca')

update Users
SET passw = '$2a$11$EdP6Lw8vuU.J2O1L868CDOU4TpAYdNh8Y5vPON9Ewi5DKmDH0UAci'
WHERE username = 'pop.ion'

update Users
SET passw = '$2a$11$KVaLr1yH2cH8BbGjXGsOkuDy7zugQgjeTdBqSjPWaVLCku4sXOcg6'
WHERE username = 'ion.vasile'

update Users
SET passw = '$2a$11$jALwA9pwrX.0oyBnTpQZqOLZ8oeE3LEnVy2cBriUle7QjSb7C7e3y'
WHERE username = 'cantor.dan'

update Users
SET passw = '$2a$11$jLIwnXnlOZp9AgvqBCS6Ieew6MDMxJvCL58tawBEVYZSBPnJWELU2'
WHERE username = 'elvira.bal'

Select * from Users

insert into Users values ('elvira.bal', 'staff', 'secretara')