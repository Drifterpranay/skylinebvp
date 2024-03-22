import { Component } from '@angular/core';

declare var Razorpay:any;
@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrl: './paymentgateway.component.css'
})
export class PaymentgatewayComponent {

  payNow(){
    const RazorpayOptions = {
    describe :'sample razorpay demo',
    currency : 'INR',
    amount : 500000,
    name : 'vaman',
    key : 'rzp_test_o33jyilraxbpRr',
    image :'https://imgur.com/SPoSEDc',
    prefill:{
    name : 'vaman sri kumar',
    email : 'vaman123@gmail.com',
    Phno :  '7396683272'
    },
    theme:{
    colour : '#f37254'
    },
    modal:{
    ondismiss:() =>{
      console.log('dismissed')
    }
    }
    }
    const sucessCallback = (paymentId:any) =>{
    console.log(paymentId);
    alert ("payment sucess");
    }
    const failureCallback = (e:any)=>{
    console.log(e);
    alert("payment failedz");
    }
    Razorpay.open(RazorpayOptions,sucessCallback,failureCallback)
  }
}

