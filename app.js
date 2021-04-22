const app = Vue.createApp({

data(){
  return {
carts : [],
total : '',
		products : [
					{id: "1", name: "Xiaomi Redmi Note 8T", image: "images/one.jpg", price: 250},
					{id: "2", name: "Xiaomi Redmi 6 Pro", image: "images/two.jpg", price: 300},
					{id: "3", name: "Xiaomi Redmi Note 8", image: "images/three.jpg", price: 350},
					{id: "4", name: "Xiaomi Redmi 7", image: "images/four.jpg", price: 250},
					{id: "5", name: "Xiaomi  Redmi Note 9 Pro", image: "images/five.jpg", price: 200},
					{id: "6", name: "Xiaomi Redmi Note 8 Pro", image: "images/six.jpg", price: 200}
				]
  }
},

methods:{
add_cart(product){
    if(product){
   this.carts.push({id: product.id, name: product.name, price: product.price});
   this.total = Number(this.total + product.price);
   console.log(this.total);
    }

    
   
    
  },
      


  

  
 remove_cart(cart){
    if(cart){
      this.carts.splice(this.carts.indexOf(cart), 1);
 this.total -= cart.price;
    }
  }
}
 



});
app.mount('#app');