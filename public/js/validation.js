function ValidateEmail() 
{
    let s = document.getElementById("email").value;
    // console.log(s);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}