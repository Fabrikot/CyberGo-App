CREATE TABLE QuestionnaireCategories (
	id int PRIMARY KEY,
  	catname varchar(50),
  	catgroup tinyint,
 	questions_id int,
  	avg_grade float,
) 