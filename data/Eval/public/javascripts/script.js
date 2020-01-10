const formUser = document.getElementById('form-user');

if (formUser != null) {
    formUser.addEventListener('submit', function (event) { 
        event.preventDefault();
        
        let post = document.querySelector("input").value;
        
        
            
             
            fetch('/users', {
                method: 'POST', 
                body: JSON.stringify({message: post}), 
                headers: {
                    'Content-Type':'application/json' 
                },
            })
            
            .then(function(){window.location.reload()});
        
    })
}