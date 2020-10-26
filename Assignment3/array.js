class ArrayOperations{
   
    constructor(array=[]){
      this.array=array;
      console.log(array);
      
    }
    printEven(){
      console.log("Even Numbers:");
      for(let i=0; i<this.array.length;i++){
        if(this.array[i]%2==0){
          console.log(this.array[i]);
        }
      }
      //return this.array%2==0;
    }  
    
    printOdd(){
      console.log("Odd Numbers:");
      for(let i=0; i<this.array.length;i++){
        if(this.array[i]%2!=0){
          console.log(this.array[i]);
        }
      }
    }  
      
    searchNumber(num){
      console.log("Searching...");
      let search=this.array.indexOf(num);
      if(search==-1){
        console.log("Not Present");
      }
      else{
        console.log("Present at position ",search+1);
      }
    }
    printPerfect(){
      console.log("Perfect numbers:");
      
      for(let i=0; i<this.array.length;i++){
        let temp=0;
        let num=this.array[i];
        for(let j=1;j<=num/2;j++)
        {
          
          if(num%j == 0)
            {
            temp += j;
            }
        }
        if(temp==num&& temp!=0){
          console.log(num);
        }
      }
    }
    
}
//let array=[2,3,4]
let obj=new ArrayOperations([2,3,4,6,28]);
obj.printEven();

obj.printOdd();

obj.searchNumber(6);
obj.printPerfect();


//console.log(obj.printEven());
