class validate{

    
    
    validateradiobutton(){

        let choice = {
            
        }
        

        let x = document.getElementsByClassName("card")
        console.log('total cards',x)
        for (var i =0; i< x.length;i++){
            let id = (i +1).toString(); 
            console.log(id)
            let card = document.getElementById(id).getElementsByClassName('card-body')
            
            var arr = Array.prototype.slice.call( card )
            let x = arr[0].id
            var question = document.getElementById(id).querySelector(".card-header").innerHTML
            
            
            
            switch(x){
                case 'rb':
                    console.log('rb exe')
                    var mm = arr[0].getElementsByClassName('form-check-label')
                    let vali1 = false;
                    for (var j = 0; j < mm.length; j++){
                        // query = 'input[name=' + id + "]:checked"
                        if(arr[0].querySelector('input[class="form-check-input"]:checked')){
                        vali1 = true 
                        let valrb = mm[j].innerHTML;  
                         choice[id] = [question, valrb]  
                           break;
                        }else{
                            console.log('false')
                            
                        }
                    }

                    if (vali1== false){
                        document.getElementById('alertban').style.display = 'block';
                        choice = {}
                        
                    }

                    break
                
                case 'ta':
                    
                    if(arr[0].querySelector(".form-control").value != ''){
                        let valta = arr[0].querySelector(".form-control").value;
                        choice[id] = [question, valta] 
                    }
                    else {
                        console.log('no')
                        choice = {}
                    }
                    // console.log('ta')
                    break


                
                case 'dd':
                    console.log('dd')
                    console.log(arr[0].querySelector(".form-control").value)
                    if(arr[0].querySelector(".form-control").value != ''){
                        console.log(arr[0].querySelector(".form-control").value)
                        let v = arr[0].querySelector(".form-control").value;
                        choice[id] = [question, v ] 
                        
                    }
                    else {
                        choice = {} 
                    }
                    // console.log('ta')
                    break
                    break
                
                case 'cb':
                    console.log('cb')
                    var mm = arr[0].getElementsByClassName('form-check-label')
                    let vali = false;
                    

                    for (var j = 0; j < mm.length; j++){
                        // query = 'input[name=' + id + "]:checked"
                        if(arr[0].querySelector('input[class="form-check-input"]:checked')){
                            vali = true;
                            let valcb = mm[j].innerHTML
                            
                            choice[id] = [question, valcb] 
                            console.log(choice[id]) 
                           break;
                        }else{
                            console.log('false')
                        }
                    }
                    if (vali == false){
                        choice = {} 
                    }

                    break
            }
        }
        
        
        let xx = true;
        for (const property in choice) {
            
            if(choice[property] === undefined || choice[property].length == 0){
                xx = false
                console.log('notttttttttt')
            }
            
          }
          if(xx){
            for (const property in choice) {

                document.getElementById('questionaire').style.display = 'none';
                this.createAnswers(choice[property])
              }
    
          }
         
        
    }

    createAnswers(choice){
        let container = document.createElement('div')
        container.classList.add("container" ,"mb-3", "mt-3")
        let card = document.createElement('div')
        card.classList.add('card')
        
        let header = document.createElement('div')
        console.log(choice)
        header.innerHTML += choice[0];
        header.classList.add("card-header")
        
        card.appendChild(header)
        container.appendChild(card)

        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body')
        let ans = document.createElement("input");
        ans.classList.add('form-control')
        ans.type = "text"
        ans.placeholder = choice[1]
        ans.readOnly = true; 

        cardbody.appendChild(ans)
        card.appendChild(cardbody)


        document.getElementById("youranswers").appendChild(container)
    }

}