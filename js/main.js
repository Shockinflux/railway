// 'use strick';

// $('#cost').css("display","none");

let vm = new Vue({
    el : "#rail",
    data : {
        selected : "".toUpperCase(),
        ticket:1000,
        ref: "",
        refPut : false,
        paid:false,
        email:'',
        locations: [{
                name: "Abule Egba",
                value: "Abule Egba",
                price: 1000
            },
            {
                name: "Oshodi",
                value: "Oshodi",
                price: 1000
            },
        ]
    },
    methods:{
        generate: function () {
            if(this.ref != ""){
                // console.log(this.ref);
                this.refPut = true
            }else{
                this.refPut = false
            }
            
        },
        buyTicket : function(){
            if(this.email != '' && this.selected != ''){
                this.paid = true
            }
        }
    }

})