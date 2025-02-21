fetch('https://questions.aloc.com.ng/api/v2/q?subject=english', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      AccessToken: 'QB-16de424c38e2779aa1f1',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      console.log('data', data);
      document.getElementById('subject').innerHTML = data.subject;
      document.getElementById('question').innerHTML = data.data.question;
      document.getElementById('optionA').innerHTML=data.data.option.a;
      document.getElementById('optionB').innerHTML=data.data.option.b;
      document.getElementById('optionC').innerHTML=data.data.option.c;
      document.getElementById('optionD').innerHTML=data.data.option.d;
    })
    .catch(error => {
      console.log('error', error);
    });
