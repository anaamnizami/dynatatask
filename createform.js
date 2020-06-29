

class formcreation{
    constructor(question,id){
        this._question = question
        this._id = id
        document.getElementById('sumbitform').style.display = 'block';
    }

       

    
    divCard(){
        let container = document.createElement('div')
        container.classList.add("container" ,"mb-3", "mt-3")
        let card = document.createElement('div')
        card.classList.add('card')
        card.id = this._id
        let header = document.createElement('div')
        header.innerHTML += this._question
        header.classList.add("card-header")
        
        card.appendChild(header)
        container.appendChild(card)
        document.getElementById("main").appendChild(container)
    }
    options(){
        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body')
        cardbody.id = 'ta'
        let textareadiv = document.createElement('div')
        textareadiv.classList.add('form-group')
        let text = document.createElement("textarea");
        text.classList.add('form-control')
        text.id="exampleFormControlTextarea1"
        textareadiv.appendChild(text)
        cardbody.appendChild(textareadiv)
        document.getElementById(this._id).appendChild(cardbody)

        


    }

}


class checkbox extends formcreation{
    constructor(question,id){
        super(question,id)
    }

    multipleadd(data){
        let input = document.createElement("input")
        input.classList.add("form-check-input")
        input.type = "checkbox"
        input.id = 'defaultCheck1'
        let label = document.createElement("label")
        label.classList.add("form-check-label")
        label.innerHTML = data
        console.log('multiple',data)
        return [input,label]
    }

    options(ele){
        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body')
        cardbody.id = 'cb'
        let formdiv = document.createElement('div')
        formdiv.classList.add('form-check')
        for (var i =0; i<ele.length; i++){
           let x = this.multipleadd(ele[i])
            formdiv.appendChild(x[0])
        formdiv.appendChild(x[1])
        var br = document.createElement("br");
        formdiv.appendChild(br)
        }
        
        cardbody.appendChild(formdiv)
        document.getElementById(this._id).appendChild(cardbody)

     

    }
}


class radioButton extends formcreation{
    constructor(question,id){
        super(question,id)
        
        
    }

    multipleadd(option){
        let input = document.createElement("input")
        input.classList.add("form-check-input")
        input.type = "radio"
        input.id = 'exampleRadios2'
        input.name = this._id;
        let label = document.createElement("label")
        label.classList.add("form-check-label")
        label.innerHTML = option
        return [input,label]
    }


    
    options(ele){
        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body')
        cardbody.id = 'rb';
        let formdiv = document.createElement('div')
        formdiv.classList.add('form-check')
        for (var i =0; i<ele.length; i++){
            let x = this.multipleadd(ele[i])
            formdiv.appendChild(x[0])
        formdiv.appendChild(x[1])
        var br = document.createElement("br");
        formdiv.appendChild(br)
        }
        
        cardbody.appendChild(formdiv)
        document.getElementById(this._id).appendChild(cardbody)


    }
}

class dropDown extends formcreation{
    constructor(question,id){
        super(question,id)
    }

  

multipleadd(option){
    let soption = document.createElement("option")
    soption.innerHTML = option
    return soption;
}



options(ele){
    let cardbody = document.createElement('div');
    cardbody.classList.add('card-body')
    cardbody.id = 'dd';
    let formdiv = document.createElement('div')
    formdiv.classList.add('form-group')
    let select = document.createElement("select")
    select.id = "inputState"
    select.classList.add("form-control")
    let option = document.createElement("option")
    formdiv.appendChild(select)
    select.appendChild(option)
    for (var i =0; i<ele.length; i++){
        let x = this.multipleadd(ele[i])
        select.appendChild(x)
    
    var br = document.createElement("br");
    select.appendChild(br)
    }
    
    cardbody.appendChild(formdiv)
    document.getElementById(this._id).appendChild(cardbody)


}
 

}