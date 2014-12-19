var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'pl';
recognition.onerror = function(event){console.error(event);};
recognition.onresult = function(event){
    str = event.results[event.resultIndex][0].transcript;

    console.warn(str);
    switch(true){
        case /dalej|dawaj|wio/.test(str):
            if(Reveal){
                Reveal.next();
            }
            if(window.opener && window.opener.Reveal){
                window.opener.Reveal.next();
            }
        break;
        case /cofaj|cofnij|wstecz/.test(str):
            if(Reveal){
                Reveal.prev();
            }
            if(window.opener && window.opener.Reveal){
                window.opener.Reveal.prev();
            }
        break;
        default:
            console.warn();
    }
};
//recognition.start();
