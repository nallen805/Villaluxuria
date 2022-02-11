//Redirect to yoga page
function goDoYoga()
{   window.location='/doYoga';  }

//Go dolphin watching
function goDolphins()
{   window.location='/dolphinWatching'; }

//Go to spa days
function goSpaDay()
{   window.location='/spaDay';  }

//Go to the romantic side
function getRomantic()
{   window.location='/romantic'; }

//Go to member login
function memberLogin()
{   window.location='/memberLogin'; }

//New member login
function newMemberRegister()
{
    window.location='/newMemberRegister';
}

// function bookStay()
// {   window.location='/reservation'; }

// Effects on hover
function effects()
{
    
}

//Select package when radio button is selected
function selectPkg($this)
{
    var selectedPkg = document.getElementById('selectedPkg');
    selectedPkg.textContent="hi";
}
