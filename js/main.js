// 'use strick';

// $('#cost').css("display","none");

let vm = new Vue({
    el : "#rail",
    data : {
        selectedTo: "".toUpperCase(),
        selectedFrom : "".toUpperCase(),
        ticket:10,
        ref: "",
        transacRef: "",
        refPut : false,
        paid:true,
        email:"",
        adult: 1,
        children : 0,
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
        picked : "",
        sucmessage: "",
        errmessage: "",
        errRef : "",
        instruct : "",
        status : 0,
    },
    methods:{
        generate: function () {
            if(this.ref === this.transacRef && this.status == 1){
                // console.log(this.ref);
                this.refPut = true;
                this.errRef = "";
            }else{
                this.refPut = false;
                this.errRef = "Wrong Transaction ID";
            }
            
        },
        buyTicket : function(){
            // if(this.email != '' && this.selected != ''){
            //     this.paid = true
            // }

            console.log("test here");
            
            // shock_init("paybtn");
        
        },
        // changeValues : function(){
        //     this.progress = 'initiate payment';
        //     this.paid = false;
        // }
    }

})


let userRef = JSON.parse(localStorage.getItem('transactionID'));
console.log(userRef);


if(userRef == null || userRef == 'undefined'){
    localStorage.setItem('transactionID', JSON.stringify({}));
}else{

    if(userRef != {}){
        vm.transacRef = userRef.ref;
        vm.status = userRef.status;
    }
   
    
}
shock_init("paybtn");

function paymentCallback(res) {

    console.log(res);
    if(res.status == 1){
        // vm.paid = true;
        vm.transacRef = res.ref;
        vm.status = res.status

        localStorage.setItem('transactionID',JSON.stringify({"ref":res.ref,"status":res.status}))
        setTimeout(() => {
            shock_close_dialog()
            vm.sucmessage = res.message;
            vm.instruct = "Check mail for Transaction ID";
        }, 3000);
    }else if(res.status == 2){
        setTimeout(() => {
            shock_close_dialog()
            // vm.paid = true;

            vm.errmessage = "Transaction Failed";
            vm.status = res.status
        }, 3000);
    }


}