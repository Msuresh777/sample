
let customerName = "Nani";      
let age = 23;                     
let isMember = true;              
let discountRate;                 

if (age >= 60 || isMember) 
{
  discountRate = 0.2;            
} 
else 
{
  discountRate = 0.0;            
}

if (discountRate > 0) 
{
  console.log(customerName + " gets a " + (discountRate * 100) + "% discount.");
} 
else 
{
  console.log(customerName + " does not qualify for a discount.");
}
