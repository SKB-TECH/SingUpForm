let form=document.querySelector("#formulaire");
form.addEventListener("submit",function(e){
    e.preventDefault();

    const nom=document.getElementById('nom').value
    const post=document.getElementById('nomf').value
    const mail=document.getElementById('adresse').value
    const psd=document.getElementById('motpasse').value

   if( nom === "") 
    {
        document.getElementById('nomuser').style.visibility="visible";
        document.getElementById('snom').style.visibility="visible";
    }

    if( post === "" )
        {
            document.getElementById('snomf').style.visibility="visible";
            document.getElementById('sf').style.visibility="visible";

        }
    if( mail === "" )
    {
        
        document.getElementById('sadresse').style.visibility="visible";
        document.getElementById('sa').style.visibility="visible";
    }
 if( psd === "" )
    {
        document.getElementById('smotpasse').style.visibility="visible";
        document.getElementById('sm').style.visibility="visible";
    }
    
})
