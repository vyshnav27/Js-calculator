//function to take numbers from calculator

function bclick(val)
{   
    document.getElementById("screen").value+=val;
}


function rem()
{
    document.getElementById("screen").value=""
}


function sum()
{
    try {
        var text=document.getElementById("screen").value
        var res=eval(text) 
        document.getElementById("screen").value=res
        

        }
    catch(err) {
        document.getElementById("screen").innerHTML = "Doesnt Support";
  
                }
}                

