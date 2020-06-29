// class Person {
//     constructor (name, age) {
//         this._name = name;
//         this._age = age;
//     }
        
//     showInfo () {
//         return "Im " + this._name + ", aged " + this._age;
//     }
// }

// class Employee extends Person {
//     constructor (name, age, sex) {
//         super(name,age);
//         this._sex = sex;
//     }
        
//     showInfo(){
//         return "Im " + this._sex + ", named " + this._name + ", aged " + this._age;
//     }
// }

// var myPerson = new Person('Jon', 20);
// var myEmployee = new Employee('Doe', 10, 'men');
// console.log(myEmployee)
// document.write(myPerson.showInfo() + "<br><br>");   // Im Jon, aged 20
// document.write(myEmployee.showInfo() + "<br><br>"); // Im men, named Doe, aged 10

class survey{
    constructor(question){
        this._question = question 
        
        // console.log(this._question)
    }
    optionsfield(id,type){
        if(type =='Description'){
        document.getElementById(id).style.display = "none"
        }
        else{
            document.getElementById(id).style.display = "block";
        }
    }

    buttondiplay(type){
        if (type !== 'Description'){
            
            let xx = document.getElementById('addoption')
            xx.style.display = "block";
        }
        else{
            let xx = document.getElementById('addoption')
            xx.style.display = "none";
        }
        
    }

    addarea(id){
    //     <div class="input-group mb-3 mt-3">
                  
    //     <input type="text" class="form-control" aria-label="Text input with checkbox">
    //   </div>
        let description = document.createElement('div')
        description.classList.add("input-group", "mb-3")
        let inputfield = document.createElement('input')
        inputfield.classList.add("form-control","ouroptionsclass")
        inputfield.setAttribute("type","text")
        inputfield.required = true;
        description.appendChild(inputfield)
        document.getElementById(id).appendChild(description)
    }
    
}

class dropdown extends survey{
    constructor(question,numberofcomponents){
        super(question);
        this._numberofcomponents = numberofcomponents;
    }
    answer(){
        console.log('number of dropdowns')
        console.log(this._numberofcomponents)
    }

    addarea(id){

        // <div class="input-group mb-3">
        //           <div class="input-group-prepend">
        //             <div class="input-group-text">
        //               <input type="checkbox" aria-label="Checkbox for following text input">
        //             </div>
        //           </div>
        //           <input type="text" class="form-control" aria-label="Text input with checkbox">
        //         </div>
        //         <button type="button" class="btn btn-primary btn-sm" onclick="">Add another</button>

        let description = document.createElement('div')
        description.classList.add("input-group mb-3")
        description.required = true;
        document.getElementById(id).appendChild(description)
    }

}

// class checkbox extends survey{
//     constructor(question,numberofcomponents){
//         super(question);
//         this._numberofcomponents = numberofcomponents;
//     }
//     answer(){
//         console.log('create dropdown')
//     }
// }

class radiobutton extends survey {
    constructor(question,numberofcomponents){
        super(question);
        this._numberofcomponents = numberofcomponents;
    }
    answer(){
        console.log('number of radio buttons')
    }
}

