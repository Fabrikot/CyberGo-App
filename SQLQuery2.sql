SELECT Questions.question_txt, Questions.cat_id, QuestionnaireCategories.questions_id, QuestionnaireCategories.catname
FROM Questions
INNER JOIN
QuestionnaireCategories ON Questions.cat_id = QuestionnaireCategories.questions_id;