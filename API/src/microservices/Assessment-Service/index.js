const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  let score = 0;
  let risk; 

  for(let [key, value] of Object.entries(assessment)){0;
    if (key === 'cat_name' || key === 'cat_date_of_birth'){
      continue;
    }
    else {
      score += parseInt(value);
    }
  }

  switch(score){
    case 0:
    case 1:
      risk = 'low';
      break;
    case 2:
    case 3:
      risk = 'medium';
      break;
    case 4:
    case 5:
      risk = 'high';
      break;
  }

  let clean_assessment = {
    'score': score,
    'risk_level': risk,
    'cat_name': assessment['cat_name'],
    'cat_date_of_birth': assessment['cat_date_of_birth'],
    'created_at': new Date().toDateString(),
  }

  Assessments.forge(clean_assessment)
  .save()
  .then((model) => console.log(model))
  .catch((err) => console.log(err));
};

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
