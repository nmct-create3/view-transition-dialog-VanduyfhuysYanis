function initDialog() {

    document.getElementById('showModalDialog').addEventListener('click',  () => {
        document.startViewTransition();
        document.getElementById('modalDialog').showModal();
    });

    document.getElementById('closeModalDialog').addEventListener('click',  () => {
        document.startViewTransition();
        document.getElementById('modalDialog').close();
    });
}

function init(){
    console.log("DOMContentLoaded");
    document.startViewTransition(() => initDialog());

}

document.addEventListener('DOMContentLoaded', init);
