      function changeColor(event) {
        let todos = ['1','2','3','4','5'];
        var numEvent = event.target.value;
        document.getElementById(`btn${event.target.value}`).classList.toggle('button-active');
        todos.filter(y => y !== event.target.value).forEach((each)=> {
          document.getElementById(`btn${each}`).classList.remove('button-active');
        });
      };
      function sayThanks() {
        document.getElementById('rating').classList.add('rating-none');
        document.getElementById('rating').classList.remove('rating-active');
        document.getElementById('thanks').classList.add('thanks-active');
        document.getElementById('thanks').classList.remove('thanks-none');
        let stars = document.getElementsByClassName('button-active')[0].value 
        let a = document.getElementById('selected')
        a.innerText = `You selected ${stars} out of 5`;
      }