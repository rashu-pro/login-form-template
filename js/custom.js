/**
 * Created by rashu on 10/16/2022.
 */

let btnHelpWindow = document.querySelector('.help-window-toggle');

//=== HELP SECTION BUTTON CLICK EVENT
btnHelpWindow.addEventListener('click',function (e) {
    e.preventDefault();
    let self = this;
    let divToOpen = document.getElementById(self.getAttribute('data-div-id'));

    //=== CLICK EVENT ON HELP SECTION WINDOW OPEN BUTTON WHEN WINDOW IS ALREADY OPENED
    if(divToOpen.classList.contains('opened')){
        divToOpen.classList.add('focused');
        setTimeout(function () {
            divToOpen.classList.remove('focused');
        },400);
        return;
    }

    document.querySelector('.help-section').classList.add('opened');
    if(screen.width<1199.98){
        window.scrollTo({ top: 550, behavior: 'smooth' });
    }
});

//=== HELP SECTION WINDWO CLOSE BUTTON CLICK EVENT
document.querySelector('.close-window').addEventListener('click', function (e) {
    e.preventDefault();
    let self = this;
    self.closest('.expandable').classList.remove('opened');
});
