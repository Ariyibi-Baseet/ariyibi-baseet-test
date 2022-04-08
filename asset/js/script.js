const ToDisabled = document.querySelector('.to-disabled');

ToDisabled.addEventListener('click', Disabled);

function Disabled(e)
{
    e.target.style.backgroundColor = '#0E185F';
    // alert("Hello");

    e.preventDefault();
}
