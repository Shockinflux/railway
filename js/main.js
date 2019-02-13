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
        amount : 1,
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
        ],
        progress : 'initiate payment',
        initDate: new Date().toDateString(),
        finDate: new Date().toDateString(),
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
        },
        // changeValues : function(){
        //     this.progress = 'initiate payment';
        //     this.paid = false;
        // }
    }

})