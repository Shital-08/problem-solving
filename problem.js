//1. Find the Smaller Angle
var Minimal_Angle = (h, m) => 
  {
      if (h == 12) 
         h = 0;
      let hour = 0.5 * (h*60 + m);  
      let min = 6*m;  
      let angle;
      if( hour>min )
         angle = hour-min
      else
         angle = min-hour
      return angle;
  };

//2. Check whether the year is Leap year or not.
var Check_Leap = (N) => 
{
  if(N%100 === 0 && N%400 === 0){
    return "Leap Year";
  }
 else if(N%4 === 0 && N%100 !== 0){
   return "Leap Year";
 }
 else{
   return "Non Leap Year";
 }
};

//3. Perfect Number Check.
var Perfect_Check = (n) => 
{
  var div;
  
     if((n%div===0) && (n%n!==0)){
       return "YES";
    }   
    
    else return "NO";
        
};

//4. Reverse a Number.
var Reverse_Number = (n) => 
  {
      let rem, rev=0;
      while(n>=1){
         rem = n%10;
         rev = rev*10+rem;
         n=Math.floor(n/10)
      }
      return rev;
  };

//5. Substring Check.
var Substring_Check = (S1, S2) => 
{
  let result = S1.includes(S2);
  if(result == true){
    return "YES";
  }
  else{
    return "NO";
  }
};
