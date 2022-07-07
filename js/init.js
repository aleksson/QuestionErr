(function($){
  $(function(){

    $('select').formSelect();

    const btn = document.querySelector('button');
    const input = document.querySelector('input');
    const url = 'https://stackoverflow.com/search?q=';

    btn.onclick = () => {

      let query = input.value.trim();
      let select = document.querySelector('select');
      let valid = query !== null && query !== '' ? true : false;
      
       if(!valid){

       	alert('No question provided...');
        return;

       }else{
          if(select.selectedIndex === 0){
            parseQuestion(query);
          }else{
            parseQuestion(query, select.selectedOptions[0].value);
          }
       }
    }

    parseQuestion = (questionString, tag) => {
    	console.log('Q:', questionString);
    	let question = questionString.split(' ').join('+');
    	//input.value = "";
    	if(tag) {
    		tag = tag.replace('#', '%23');
    		question = `[${tag}]+${question}`;
    	}
    	//question = encodeURIComponent(question);
    	let fullUrl = `${url}${question}`;
    	console.log('URL:',fullUrl);
    	window.open(fullUrl);
    }

  });
})(jQuery);